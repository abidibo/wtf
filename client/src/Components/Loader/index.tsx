import React from 'react'
import {Dimmer} from "../../Theme/Ui"
import CircularProgress from "@material-ui/core/CircularProgress"

const Loader = () => (
  <Dimmer><CircularProgress color='secondary' /></Dimmer>
)

export default Loader
