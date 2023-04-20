import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Formulario from "./components/Formulario";
import { CervezaProvider } from "./context/CervezaProvider";
import ListadoCervezas from "./components/ListadoCervezas";
import ModalCerveza from "./components/ModalCerveza";

function App() {

	const [theme, setTheme] = useState("light");

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
	}

	useEffect(() => {
		document.body.setAttribute("data-theme", theme)
	},[theme])

	return (
		<CervezaProvider>
		
			<Row classname="">
					<header className="mb-5 shadow-img ">
						<div className="d-flex">
							<Col className="mx-auto" lg={11}>
								<div className="ps-5 ms-5">
									<h1 className="pt-1">Cervezapedia</h1>
									<h6 className="my-0">Aplicación Desarrollada por Moisés Berdichevsky (M.E.B.A)</h6>
									<h6 className="pb-2">Powered by React/Bootstrap</h6>
								</div>
							</Col>
							<Col className="pt-4 pe-5 mt-2" lg={1}>
								<button 
									className="rounded-5 bg-transparent border-0"
									onClick={toggleTheme}
								>
									{theme === "light" ? 
										<span className="material-symbols-outlined fs-1 text-white scale-effect">dark_mode</span> :
										<span class="material-symbols-rounded fs-1 text-white scale-effect">light_mode</span>}
								</button>
							</Col>
						</div>
					</header>
			</Row>

				<Container className="mt-4">
					<Formulario />
					<ModalCerveza />
					<ListadoCervezas />
				</Container>

		</CervezaProvider>
	);
}

export default App;
