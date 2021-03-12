import Breadcrumbs from "@material-ui/core/Breadcrumbs"
import Link from "@material-ui/core/Link"
import Typography from "@material-ui/core/Typography"
import React from "react"
import { RouteComponentProps, withRouter } from "react-router"
import { of } from "rxjs"
import { ajax } from "rxjs/ajax"
import { catchError, map, mergeMap } from "rxjs/operators"
import Api from "../../Api"
import config from "../../Config"
import history from "../../history"
import BaseLayout from "../../Layout/BaseLayout"
import { IUser } from "../../Redux/Users/Interfaces"
import { withLoader } from "../../Decorators"

type UserDetailParams = {
  id: string
}

type UserDetailProps = RouteComponentProps<UserDetailParams>

const UserDetailView: React.FC<UserDetailProps> = (props) => {
  const [user, setUser]: [IUser, (args0: IUser) => void] = React.useState(null)
  const [isFetching, setIsFetching]: [
    boolean,
    (args0: boolean) => void
  ] = React.useState<boolean>(false)
  const handleClick = React.useCallback(
    () => history.push(config.paths.dashboard),
    [history]
  )

  const userId = parseInt(props.match.params.id)

  const request$ = of([]).pipe(
    map(() => setIsFetching(true)),
    mergeMap(() =>
      ajax.getJSON(Api.user(userId)).pipe(
        map((response: any) => {
          setIsFetching(false)
          return response
        }),
        catchError((err) => {
          if (err.status === 404) {
            history.push(config.paths.pageNotFound)
          }
          // @TODO show a toast
          setIsFetching(false)
          return of({})
        })
      )
    )
  )

  React.useEffect(() => {
    const subscription = request$.subscribe((user: IUser) => {
      setUser(user)
    })
    return () => subscription.unsubscribe()
  }, [])

  return withLoader(
    () => (
      <BaseLayout>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" onClick={handleClick}>
            Dashboard
          </Link>
          <Typography color="textPrimary">{user.first_name}</Typography>
        </Breadcrumbs>
        <Typography variant="h1">
          User detail
        </Typography>
        <Typography paragraph><strong>First Name</strong>: {user.first_name}</Typography>
        <Typography paragraph><strong>E-mail</strong>: {user.email}</Typography>
        <Typography paragraph><strong>Gender</strong>: {user.gender}</Typography>
        <Typography paragraph><strong>Country</strong>: {user.country}</Typography>
        <Typography paragraph><strong>Job Title</strong>: {user.job_title}</Typography>
      </BaseLayout>
    ),
    isFetching || !user
  )
}

export default withRouter(UserDetailView)
