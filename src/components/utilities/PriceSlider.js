import { Slider } from '@mui/material';
import React, { useState } from 'react'

const PriceSlider = ({min, max}) => {
    const [valorSlider, setValorSlider] = useState(min);

    // Función para manejar el cambio en el Slider
    const handleSliderChange = (event, newValue) => {
      setValorSlider(newValue);
    };
  
    // Lógica para calcular el precio dentro de un rango variable
    const calcularPrecio = () => {
      // Por ejemplo, asumamos que el rango es de $10 a $100
      const precioMinimo = min;
      const precioMaximo = max;
  
      // Calculamos el precio en función del valor del Slider
      const precioCalculado = (precioMaximo - precioMinimo);
  
      return precioCalculado.toFixed(2); // Ajusta el formato del precio según tus necesidades
    };
  
    return (
      <div>
        <Slider
          value={valorSlider}
          onChange={handleSliderChange}
          aria-labelledby="precio-slider"
          valueLabelDisplay="auto"
          valueLabelFormat={(value) => `${value}%`}
          min={0}
          max={max}
          size="small"
        />
      </div>
    );
}

export default PriceSlider