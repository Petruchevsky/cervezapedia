import React from 'react'
import { Col } from 'react-bootstrap'

function Bg() {

  const BgImgStyle = {
   marginTop: "50px",
   borderRadius: "20px",
   objectFit: "contain",
   
  } 

  return (
    <Col sm={12} xs={11} className="big-div my-4 rounded-4 mx-auto d-flex flex-column">
      <img 
         src="/img/bg.jpg" 
         alt="Imagen de una Hermosa Cerveza"
         style={BgImgStyle} 
         className="shadow-img img-fluid mt-3"
      />
 <div className="little-div rounded-4 mt-4 mb-3">
        <h4 className="py-3 px-3 fs-6"> Deliciosa, Refrescante, Efervescente, Reconfortable, Única y a la Medida de Cada Uno de Nosotros... Hay tantas Maravillas que podríamos decir de la Diosa inspiradora de tantas cosas buenas... Nuestra Amada Cerveza!</h4>
 </div>

    </Col>
  )
}

export default Bg
