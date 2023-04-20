import { useContext } from 'react'
import CervezaContext from '../context/CervezaProvider'

const useCerveza = () => {
  return useContext(CervezaContext)
}

export default useCerveza
