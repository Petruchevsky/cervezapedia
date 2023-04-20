import React from 'react'
import { Col } from 'react-bootstrap'

function Bg() {

  const BgImgStyle = {
   marginTop: "50px",
   borderRadius: "20px",
   objectFit: "contain"
  } 

  return (
    <Col className="bg-div big-div text-center my-4 rounded-4 mx-auto" lg={12} sm={12}>
      <img 
         src="/img/bg.jpg" 
         alt="Imagen de una Hermosa Cerveza"
         style={BgImgStyle} 
         className="shadow-img img-fluid"
      />
 <div className="little-div rounded-4 mt-4 mb-4 mx-5">
        <h4 className="py-5 px-3"> Deliciosa, Refrescante, Efervescente, Reconfortable, Única y a la Medida de Cada Uno de Nosotros... Hay tantas Maravillas que podríamos decir de la Diosa inspiradora de tantas cosas buenas... Nuestra Amada Cerveza!</h4>
 </div>

    </Col>
  )
}

export default Bg
