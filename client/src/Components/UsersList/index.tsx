import Link from "@material-ui/core/Link"
import Paper from "@material-ui/core/Paper"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableFooter from "@material-ui/core/TableFooter"
import TableHead from "@material-ui/core/TableHead"
import TablePagination from "@material-ui/core/TablePagination"
import TableRow from "@material-ui/core/TableRow"
import TableSortLabel from "@material-ui/core/TableSortLabel"
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"
import React, {useCallback} from "react"
import {useDispatch, useSelector} from "react-redux"
import styled from "styled-components"
import config from "../../Config"
import {withLoader} from "../../Decorators"
import history from "../../history"
import {useFullTextSearch, usePagination, useSorting} from "../../Hooks"
import {request, selectUsers} from "../../Redux/Users"
import {IUser} from "../../Redux/Users/Interfaces"
import {selectIsFetching} from "../../Redux/Utils"
import {Colors} from "../../Theme/Ui"

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
    ["first_name"],
    ""
  )
  const handleSearch = ({ target }) => {
    setPage(0)
    setSearch(target.value)
  }

  // sorting
  const [sort, setSort, sortedItems] = useSorting(
    textFilteredItems,
    "id",
    "asc"
  )
  const handleSort = (field: string) => (): void =>
    setSort({
      field,
      direction:
        sort.field === field && sort.direction === "asc" ? "desc" : "asc",
    })

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

  const content = (
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
              <TableCell>
                <Link
                  onClick={() =>
                    history.push(
                      config.paths.userDetail.replace(":id", user.id)
                    )
                  }
                >
                  {user.first_name}
                </Link>
              </TableCell>
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
  )

  return (
    <section>
      <Typography variant="h1">
        Users
      </Typography>
      <Toolbar>
        <TextField
          label="Search by first name"
          value={search}
          onChange={handleSearch}
        />
      </Toolbar>
      {withLoader(content, isFetching)}
    </section>
  )
}

export default UsersList
