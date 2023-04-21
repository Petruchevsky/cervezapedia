import React from 'react'
import { Modal } from 'react-bootstrap'



function ModalCerveza({cerveza, modal, toggleModal}) {
  
  const modalImageStyle = {
   width: "80px", // Establece el ancho de la imagen
   height: "auto", // Establece la altura de la imagen en función del ancho
   maxWidth: "100px", // Establece el ancho máximo de la imagen
   maxHeight: "auto", // Establece la altura máxima de la imagen en función del ancho máximo
   objectFit: "contain", // Ajusta la imagen al contenedor manteniendo su relación de aspecto
   margin: "0 auto",
   padding: "10px 0px 0px 0px"
 };

  return (
     
       <Modal show={modal} onHide={toggleModal} className="text-center my-4">
          <Modal.Body>
             <Modal.Header>DESCRIPCIÓN</Modal.Header>
             {cerveza && 
                <>
                <img 
                   src={cerveza.image_url} 
                   alt={`Imagen de ${cerveza.name}`} 
                   style={modalImageStyle}
                />
                <Modal.Title className="mb-3 fw-bold fs-3">{cerveza.name}</Modal.Title>
               <div className="text-start px-3" style={{textAlign:'justify'}}>
                 <p><strong>Clasificación: </strong>{cerveza.tagline}</p>
                 <p><strong>Grados Alcohólicos: </strong>{cerveza.abv}°Alc</p>
                 <p><strong>Índice de Amargor (1 dulce - 120 amargo): </strong>{cerveza.ibu} Puntos</p>
                 <p><strong>Color (1 clara - 300 oscura): </strong>{cerveza.ebc} Puntos</p>
                 <p><strong>Descripción: </strong>{cerveza.description}</p>
                 <p><strong>Tips del Fabricante: </strong>{cerveza.brewers_tips}</p>
               </div>
                </>
             }
          </Modal.Body>
       </Modal>       
     
  )
}

export default ModalCerveza
