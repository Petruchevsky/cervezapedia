import { Button, Card, Col } from 'react-bootstrap'
import ModalCerveza from './ModalCerveza';
import { useState } from 'react';

function Cerveza({cerveza}) {

   const [modal, setModal] = useState(false);

   const toggleModal = () => {
      setModal(!modal);
   }

   const cardImageStyle = {
      width: "80px", // Establece el ancho de la imagen
      height: "auto", // Establece la altura de la imagen en función del ancho
      maxWidth: "100px", // Establece el ancho máximo de la imagen
      maxHeight: "auto", // Establece la altura máxima de la imagen en función del ancho máximo
      objectFit: "contain", // Ajusta la imagen al contenedor manteniendo su relación de aspecto
      margin: "0 auto",
      padding: "10px 0px 0px 0px"
    };

  

  return (
   <Col md={6} lg={4}>
      <Card className="text-center mb-3">
         <Card.Img
            src={cerveza.image_url}
            alt={`Imagen de ${cerveza.name}`}
            variant="top"
            style={cardImageStyle}
            className="text-center"
         />

         <Card.Body>
            <Card.Title className="mb-3"> {cerveza.name} </Card.Title>
            <Button
               onClick={() => toggleModal()}
               className="scale-effect"
            >
               SEE ENTIRE DESCRIPTION
            </Button>
         </Card.Body>
      </Card>
      
      <ModalCerveza cerveza={cerveza} modal={modal} toggleModal={toggleModal} />
   </Col>
  )
}

export default Cerveza
