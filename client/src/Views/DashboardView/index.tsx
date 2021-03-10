import React from "react"
import BaseLayout from '../../Layout/BaseLayout'
import UsersList from '../../Components/UsersList'
import Typography from '@material-ui/core/Typography'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'

const DashboardView: React.FC = () => (
  <BaseLayout>
    <Breadcrumbs aria-label="breadcrumb">
      <Typography color="textPrimary">Dashboard</Typography>
    </Breadcrumbs>
    <UsersList />
  </BaseLayout>
)

export default DashboardView
