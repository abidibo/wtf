import React from "react"
import BaseLayout from "../../Layout/BaseLayout"
import Image404 from '../../Assets/Images/404.gif'
import { FlexColumnJCenterACenter, ImageResponsive } from '../../Theme/Ui'
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import history from "../../history"
import config from "../../Config"

const DashboardView: React.FC = () => (
  <BaseLayout>
    <FlexColumnJCenterACenter>
      <Typography variant="h1">
        Page Not Found
      </Typography>
      <ImageResponsive src={Image404} alt="404" />
      <div style={{ marginTop: '2rem' }}>
        <Button
          color="secondary"
          variant="contained"
          onClick={() => history.push(config.paths.dashboard)}
        >
          Back to dashboard
        </Button>
      </div>
    </FlexColumnJCenterACenter>
  </BaseLayout>
)

export default DashboardView
