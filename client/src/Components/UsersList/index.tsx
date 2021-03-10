import React, { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectUsers } from "../../Redux/Users"
import { selectIsFetching } from "../../Redux/Utils"
import { usePagination, useSorting, useFullTextSearch } from "../../Hooks"
import { IUser } from "../../Redux/Users/Interfaces"
import { Dimmer } from "../../Theme/Ui"
import CircularProgress from "@material-ui/core/CircularProgress"
import TextField from '@material-ui/core/TextField'
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableSortLabel from "@material-ui/core/TableSortLabel"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import TableFooter from "@material-ui/core/TableFooter"
import TablePagination from "@material-ui/core/TablePagination"
import Paper from "@material-ui/core/Paper"
import { Colors } from "../../Theme/Ui"
import styled from "styled-components"
import { request } from "../../Redux/Users"

const TableHeadCell = styled(TableCell)`
  background-color: ${Colors.lightGray};
`
const Toolbar = styled.div`
  margin-bottom: 1rem;
`

// @TODO Split in many more components
// @TODO use callback to avoid unnecessary re-rendering
const UsersList: React.FC = () => {
  const dispatch = useDispatch()
  const isFetching: boolean = useSelector(selectIsFetching("users"))
  const users: IUser[] = useSelector(selectUsers)

  // users table
  const headers = [
    { field: "id", label: "ID" },
    { field: "first_name", label: "First Name" },
    { field: "email", label: "E-mail" },
    { field: "gender", label: "Gender" },
    { field: "country", label: "Country" },
  ]

  // full text
  const [search, setSearch, textFilteredItems] = useFullTextSearch(
    users.slice(),
    ['first_name', ],
    '',
  )
  const handleSearch = ({ target }) => {
    setPage(0)
    setSearch(target.value)
  }

  // sorting
  const [sort, setSort, sortedItems] = useSorting(textFilteredItems, "id", "asc")
  const handleSort = (field: string) => (): void => setSort({ field, direction: sort.field === field && sort.direction === 'asc' ? 'desc' : 'asc' })

  // pagination
  const [rowsPerPage, setRowsPerPage] = React.useState(5)
  const [page, setPage, items] = usePagination(sortedItems, rowsPerPage)

  const handleChangePage = useCallback(
    (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
      setPage(newPage)
    },
    [setPage]
  )

  const handleChangeRowsPerPage = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setRowsPerPage(parseInt(event.target.value, 10))
      setPage(0)
    },
    [setRowsPerPage, setPage]
  )

  React.useEffect(() => {
    dispatch(request())
  }, [])

  if (isFetching) {
    return (
      <Dimmer>
        <CircularProgress color="secondary" />
      </Dimmer>
    )
  }

  return (
    <section>
      <h1>Users</h1>
      <Toolbar>
        <TextField label='Search by first name' value={search} onChange={handleSearch} />
      </Toolbar>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {headers.map((headCell) => (
                <TableHeadCell
                  key={headCell.field}
                  sortDirection={
                    sort.field === headCell.field ? sort.direction : false
                  }
                >
                  <TableSortLabel
                    active={sort.field === headCell.field}
                    direction={
                      sort.field === headCell.field ? sort.direction : "asc"
                    }
                    onClick={handleSort(headCell.field)}
                  >
                    {headCell.label}
                  </TableSortLabel>
                </TableHeadCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((user) => (
              <TableRow key={user.id}>
                <TableCell component="th" scope="row">
                  {user.id}
                </TableCell>
                <TableCell>{user.first_name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.gender}</TableCell>
                <TableCell>{user.country}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                count={users.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </section>
  )
}

export default UsersList
