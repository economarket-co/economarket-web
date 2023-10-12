import generic from "../../assets/Generic.png"


export const comprobarImagen = (product) =>{

    if("Carulla" in product && "img" in product.Carulla){

      return product.Carulla.img
    }else{
      if("Exito" in product && "img" in product.Exito){

        return product.Exito.img
      }else{
        if("Olimpica" in product && "img" in product.Olimpica){

          return product.Olimpica.img
        }else{
          return generic
        }
      }
    }
}