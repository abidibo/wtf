import styled from "styled-components"

// colors
export const Colors = {
  primary: "#d32d42",
  secondary: "#b3c100",
  lightGray: "#f7f7f7",
  mediumGray: "#c0c0c0",
  white80: "rgba(255, 255, 255, .8)",
}

// mix
export const ImageResponsive = styled.img`
  max-width: 100%;
`

// flex stuff
export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`

export const FlexRowJBetweenACenter = styled(FlexRow)`
  align-items: center;
  justify-content: space-between;
`

export const FlexColumnJCenterACenter = styled(FlexColumn)`
  align-items: center;
  justify-content: center;
`

// misc
export const Dimmer = styled.div`
  align-items: center;
  background: ${Colors.white80};
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
`
