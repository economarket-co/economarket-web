import { Button, Paper, Typography } from '@mui/material'
import React from 'react'

const Resumen = () => {
  return (
    <Paper
      sx={{
        backgroundColor: "#ffffff",
        borderRadius: "13px",
        flexDirection: "column",
        overflow: "hidden",
        padding: "64px 75px",
        position: "relative",
        maxWidth: 417,
        maxHeight: 294,
        width: "100%",
        "@media (min-width: 600px)": {
          width: "567px",
        },
      }}
    >
      <div
        sx={{
          alignItems: "flex-start",
          alignSelf: "stretch",
          display: "flex",
          flex: "0 0 auto",
          flexDirection: "column",
          gap: "10px",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          sx={{
            alignItems: "flex-start",
            alignSelf: "stretch",
            display: "flex",
            flex: "0 0 auto",
            flexDirection: "column",
            gap: "10px",
            position: "relative",
            width: "100%",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "#636363",
              fontFamily: "Quicksand",
              fontWeight: 600,
              letterSpacing: 0,
              marginTop: "-15%",
              position: "relative",
              whiteSpace: "nowrap",
              width: "fit-content",
            }}
          >
            Resumen de compra
          </Typography>
        </div>

        <div style={{
            backgroundColor: "#B4B4B4",
            marginTop: "2%",
            marginBottom: "2%",
            width: "100%",
            height: "1px"
        }}>
        </div>
        <Typography
          sx={{
            alignSelf: "stretch",
            color: "#9d9d9d",
            fontFamily: "Quicksand",
            // fontSize: "21px",
            fontWeight: 500,
            // letterSpacing: 0,
            // lineHeight: "normal",
            // position: "relative",
          }}
        >
          Tienes # items en tu carrito.
          <br />
          <br />
          x# de productos no se encuentran en algunos supermercados. Revisa las listas y verifica que las alternativas sean de tu agrado.
        </Typography>
      </div>
        <Button sx={{
            marginTop: "10%", 
            backgroundColor: "#01CC5E",
            color: "#ffffff",
            fontFamily: "Quicksand",
            fontWeight: 500,
            textTransform: "none"
        }}>
            ver comparaciones
        </Button>   
    </Paper>
  )
}

export default Resumen