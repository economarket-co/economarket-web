import { Container, Skeleton } from '@mui/material'
import React from 'react'

const Loading = () => {
  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh', // Ajusta la altura según tus necesidades
      }}
    >
      <Skeleton
        variant="circle" // Puedes cambiar a "rect" u otras variantes
        width={80} // Cambia el tamaño según tus preferencias
        height={80} // Cambia el tamaño según tus preferencias
        animation="wave" // Puedes utilizar "pulse" u otras animaciones
      />
      <Skeleton
        variant="text" // Cambia a "rect" para un rectángulo o "circle" para un círculo
        width={150} // Cambia el ancho según tus preferencias
      />
    </Container>
  )
}

export default Loading