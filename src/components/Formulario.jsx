import { Button, Form, Row, Col, Alert } from "react-bootstrap";
import { useState } from "react";
import useCerveza from "../hooks/useCerveza";
import Bg from "./Bg";

function Formulario() {
	const { obtenerCervezas, cervezas } = useCerveza();

	const [busqueda, setBusqueda] = useState({
		gradosMin: "",
		gradosMax: "",
		amargorMin: "",
		amargorMax: "",
	});

	const [alerta, setAlerta] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (Object.values(busqueda).includes("")) {
			setAlerta("Todos los Campos son Obligatorios");
			return;
		}
		setAlerta("");
		obtenerCervezas(busqueda);
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Row>
				<Col className="mx-auto mb-4" lg={5}>
					<Form.Group>
						<Form.Label htmlFor="grados">Grados de Alcohol</Form.Label>
						<Form.Select
							name="grados"
							id="grados"
							placeholder="Selecciona un rango de la lista"
							value={busqueda.grados}
							onChange={(e) => {
								const [gradosMin, gradosMax] = e.target.value.split("-");
								setBusqueda({
									...busqueda,
									gradosMin,
									gradosMax,
									[e.target.name]: e.target.value,
								});
							}}
						>
							<option>Selecciona Graduación Alcohólica</option>
							<option value="0-2"> 0 - 2 °Alc </option>
							<option value="2-4"> 2 - 4 °Alc </option>
							<option value="4-6"> 4 - 6 °Alc </option>
							<option value="6-8"> 6 - 8 °Alc </option>
							<option value="8-10"> 8 - 10 °Alc </option>
							<option value="10-12"> 10 - 12 °Alc </option>
							<option value="12-15"> 12 - 15 °Alc </option>
							<option value="15-20"> 15 - 20 °Alc </option>
						</Form.Select>
					</Form.Group>
				</Col>

				<Col className="mx-auto mb-4" lg={5}>
					<Form.Group>
						<Form.Label htmlFor="amargor">
							Selecciona Índice de Amargor
						</Form.Label>
						<Form.Select
							id="amargor"
							name="amargor"
							value={busqueda.amargor}
							onChange={(e) => {
								const [amargorMin, amargorMax] = e.target.value.split("-");
								setBusqueda({
									...busqueda,
									amargorMin,
									amargorMax,
									[e.target.name]: e.target.value,
								});
							}}
						>
							<option>Selecciona Índice de Amargor</option>
							<option value="10-20">10 a 20 Puntos</option>
							<option value="20-30">20 a 30 Puntos</option>
							<option value="30-40">30 a 40 Puntos</option>
							<option value="40-50">40 a 50 Puntos</option>
							<option value="50-60">50 a 60 Puntos</option>
							<option value="60-70">60 a 70 Puntos</option>
							<option value="70-80">70 a 80 Puntos</option>
							<option value="80-90">80 a 90 Puntos</option>
							<option value="90-100">90 a 100 Puntos</option>
							<option value="100-110">100 a 110 Puntos</option>
							<option value="110-120">110 a 120 Puntos</option>
						</Form.Select>
					</Form.Group>
				</Col>
			</Row>

			<Row className="">
				<Col className="mt-3 mx-auto" lg={6}>
					<Button
						className="text-uppercase w-100 shadow-img scale-effect"
						variant="danger"
						type="submit"
					>
						Buscar Cervezas
					</Button>
				</Col>

				{alerta && (
					<Alert className="mt-3 text-uppercase text-center" variant="danger">
						{alerta}
					</Alert>
				)}
			</Row>

			{cervezas.length === 0 && (
				<Row>
					<Bg />
				</Row>
			)}
		</Form>
	);
}

export default Formulario;
