import axios from "axios";
import React, { createContext, useState } from "react";

const CervezaContext = createContext();

function CervezaProvider({ children }) {

	const [cervezas, setCervezas] = useState([]);
  // const [search, setSearch] = useState(false)
  const [error, setError] = useState(false)


	const obtenerCervezas = async (datos) => {
		try {
			const url = `https://api.punkapi.com/v2/beers?abv_gt=${datos.gradosMin}&abv_lt=${datos.gradosMax}&ibu_gt=${datos.amargorMin}&ibu_lt=${datos.amargorMax}`;
			const { data } = await axios(url);
			console.log(data);
			setCervezas(data);
      // setSearch(true);
      if (data.length === 0) {
        setError(true);
      } else {
        setError(false);
      }
		} catch (error) {
			console.log(error);
		}
	};


  // const handleClick = e => {
  //   console.log(search)
  //   if(search) setError(true)
  // }

	return (
		<CervezaContext.Provider
			value={{
				obtenerCervezas,
				cervezas,
        error,
        setError,
        // handleClick
			}}
		>
			{children}
		</CervezaContext.Provider>
	);
}

export { CervezaProvider };
export default CervezaContext;
