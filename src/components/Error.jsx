import React from 'react'
import { Modal } from 'react-bootstrap'
import useCerveza from '../hooks/useCerveza';

function Error() {

  const { error, setError } = useCerveza(); 

  const toggleError = () => {
   setError(!error)
  }

  const errorImageStyle = {
   width: "300px", // Establece el ancho de la imagen
   height: "auto", // Establece la altura de la imagen en función del ancho
   maxWidth: "300px", // Establece el ancho máximo de la imagen
   maxHeight: "auto", // Establece la altura máxima de la imagen en función del ancho máximo
   objectFit: "contain", // Ajusta la imagen al contenedor manteniendo su relación de aspecto
   margin: "0 auto",
   padding: "10px 0px 0px 0px",
   borderRadius: "150px",
   margin: "15px"
 };


  return (
    <Modal show={error} onHide={toggleError}>
      <Modal.Body className="text-center">
         <Modal.Header>LO SENTIMOS, PERO...</Modal.Header>
         <img 
            src="/img/homero no beer.jpg" 
            alt="Imagen de Homero sin Cerveza"
            style={errorImageStyle}
         />
         <Modal.Title>
            No existen Cervezas en nuestra base de datos con el amargor y la los grados de alcohol que especificaste.
         </Modal.Title>
      </Modal.Body>
      
    </Modal>
  )
}

export default Error
