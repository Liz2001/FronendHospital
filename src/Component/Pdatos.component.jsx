const Pdatos = () => {
	return <>
		<div className="mb-3">
			<label for="login" className="form-label" >Nombre</label>
			<input type="email" className="form-control" id="nombre" placeholder="Jennifer Morales Luna Mendoza" disabled />

		</div>
		<div className="mb-2">
			<label for="login" className="form-label">Edad</label>
			<input type="email" className="form-control" placeholder="22" disabled />

		</div>
		<div className="mb-2">
			<label for="login" className="form-label">Peso</label>
			<input type="email" className="form-control" placeholder="60.4 Kg" disabled />

		</div>
		<div className="mb-2">
			<label for="login" className="form-label">Altura</label>
			<input type="text" className="form-control" placeholder="160 cm" disabled />
		</div>
		<div className="mb-2">
			<label for="login" className="form-label">Tipo de sangre</label>
			<input type="text" className="form-control" placeholder="O" disabled />

		</div>
		<button type="button" className="btn btn-primary">Historial Clinico</button>

	</>
}
export default Pdatos