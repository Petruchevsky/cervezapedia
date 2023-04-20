import React from 'react'
import { Row } from 'react-bootstrap'
import useCerveza from '../hooks/useCerveza'
import Cerveza from './Cerveza';
import Error from './Error';


function ListadoCervezas() {

  const { cervezas, error } = useCerveza();


  return (
   <div>
   {(error && cervezas.length === 0) ? (
     <Error />
   ) : (
     <Row className="mt-5">
       {cervezas.map((cerveza) => (
         <Cerveza key={cerveza.id} cerveza={cerveza}></Cerveza>
       ))}
     </Row>
   )}
 </div>
  )
}


export default ListadoCervezas
