import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { fa0, fa4 } from "@fortawesome/free-solid-svg-icons"
import React from "react"
import { Container, Typography } from "@mui/material"
import { sadReo } from "@/config/Constants"
import Image from "next/image"

const NotFound: React.FC<{}> = () => {
  return (
    <Container sx={{ textAlign: "center", pt: "70px" }}>
      <FontAwesomeIcon icon={fa4} fontSize="60px" />
      <FontAwesomeIcon icon={fa0} fontSize="60px" />
      <FontAwesomeIcon icon={fa4} fontSize="60px" />
      <div style={{ textAlign: "center" }}>
        <Image src={sadReo} alt="sad_reo" height={150} width={150}></Image>
      </div>
      <Typography mt={0}>This is not what you are searching for.</Typography>
    </Container>
  )
}

export default NotFound
