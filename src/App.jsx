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
	};

	useEffect(() => {
		document.body.setAttribute("data-theme", theme);
	}, [theme]);

	return (
		<CervezaProvider>
			<Row className="">
				<header className="mb-sm-2 shadow-img">
					<Col lg={12}>
						<div className="d-flex justify-content-between align-items-center">
							<div className="text-start ms-2 ms-md-3">
								<h1 className="pt-1">Cervezapedia</h1>
								<h6 className="my-0 fs-7 custom-sm-text">Powered by React/Bootstrap</h6>
								<h6 className="pb-2 fs-7 custom-sm-text">
									Aplicación Desarrollada por Moisés Berdichevsky (M.E.B.A)
								</h6>
							</div>

							<button
								className="rounded-5 bg-transparent border-0 me-md-5 pe-md-4 pe-lg-5 me-4"
								onClick={toggleTheme}
							>
								{theme === "light" ? (
									<span className="material-symbols-outlined fs-1 text-white scale-effect">
										dark_mode
									</span>
								) : (
									<span className="material-symbols-rounded fs-1 text-white scale-effect">
										light_mode
									</span>
								)}
							</button>
						</div>
					</Col>
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
