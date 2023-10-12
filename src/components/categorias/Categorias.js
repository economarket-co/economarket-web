import { Card, CardContent,Typography} from '@mui/material'
import React, { useState } from 'react'
import { dataCategorias as data } from './Categorias-Object'
import { Link } from 'react-router-dom';
import { useStatevalue } from '../../StateProvider';
import { actionTypes } from '../../reducer';

const Categorias = ({categoria}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [{selectedCategoria}, dispatch] = useStatevalue();

  const cardStyles = {
    width: '250px',
    height: '300px',
    borderRadius: '8px',
    overflow: 'hidden',
    transition: 'transform 0.3s',
    position: 'relative',
    backgroundColor: isHovered ? 'transparent':'white',
    // position: 'relative',
    // background: isHovered
    //   ? 'url("nueva-imagen.jpg")'
    //   : 'url("imagen-inicial.jpg")',
    // backgroundSize: 'cover',
    // backgroundPosition: "center",
    // backgroundRepeat: 'no-repeat',
  };
  // const backGround ={
  //   zIndex: '2',
  //   backgroundColor: isHovered ? data[categoria].color: "transparent",
  //   width: "100%",
  //   height: "30px"
  // }
  const textStyles = {
    padding: '16px',
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    backgroundColor: isHovered ? "#FFFFFF" : data[categoria].color,
    textAlign: 'center',
    zIndex: '2',
    transition: 'background-color 0.3s',
  };

  const imageStyles = {
    transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
    transition: 'transform 0.3s',
    width: '100%',
    height: 'auto',
    position: 'relative',
    zIndex: '1',
    backgroundColor: isHovered ? 'transparent':'white',

  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const selectCategory = () =>{
    dispatch({
      type: actionTypes.SELECT_CATEGORIA,
      item: categoria
    })
    console.log("Categoria>>>>>",selectedCategoria);
  }

  return (
    <>
    <Link to="/productos" style={{ textDecoration: 'none' }} onClick={() =>selectCategory}>
        <Card
          style={cardStyles}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img alt='' style={imageStyles} src={!isHovered ? data[categoria].imagen1: data[categoria].imagen2}/>
          <CardContent style={textStyles}>
              <Typography color={isHovered ? data[categoria].color: "#FFFFFF"} style={textStyles} variant='h6' fontFamily="DM Serif Display" fontWeight={400}>
              {data[categoria].label}
              </Typography>
          </CardContent>
        </Card>
      </Link>
    </>
  );
}

export default Categorias