import { Button, Theme, styled, useTheme } from "@material-ui/core"
import React from "react"

const PrimaryButton = styled(Button)(({ theme }: { theme: Theme }) => ({
  color: "white",
  backgroundColor: "#23A6F0",
  "&:hover": {
    backgroundColor: "#2087C8",
  },
  borderRadius: "5px",
  background: "var(--primary-color, #23A6F0)",
  display: "flex",
  height: "52px",
  padding: "15px 40px", // Default padding
  flexDirection: "column",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.down("sm")]: {
    padding: "15px 10px",
  },
}))

interface PrimaryButtonProps {
  text: string
}

const PrimaryButtonComponent: React.FC<PrimaryButtonProps> = ({ text }) => {
  const theme = useTheme()

  return (
    <PrimaryButton variant="contained" theme={theme}>
      {text}
    </PrimaryButton>
  )
}

export default PrimaryButtonComponent
