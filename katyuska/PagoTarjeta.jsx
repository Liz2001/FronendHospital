import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import Tarjetas from "./img/tarjetas.png"

const PagoTarjeta = () => {
  const [show, setShow] = useState(false);
  const [showTarjeta, setShowTarjeta] = useState(false);
  const [texto, setTexto] = useState("Seleccione su método de pago");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Agendar cita
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agendar cita</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Costo de cita:</h5>
          <div className="mb-3 mt-1">S/ 120</div>
          <h5>Método de pago:</h5>
          <DropdownButton
            className="mb-3 mt-1"
            variant="outline-secondary"
            title={texto}
            id="input-group-dropdown-1"
          >
            <Dropdown.Item
              onClick={() => {
                setTexto("Efectivo");
                setShowTarjeta(false);
              }}
            >
              Efectivo
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setTexto("Tarjeta");
                setShowTarjeta(true);
              }}
            >
              Tarjeta
            </Dropdown.Item>
          </DropdownButton>
          <Form.Check
            type="checkbox"
            label="Deseo que los medicamentos se envíen a mi domicilio"
          />
          {showTarjeta && (
            <div className="mt-3">
              <h5>Ingrese la información de su tarjeta:</h5>
              <Form className="mt-3">
                <Form.Group className="mb-3">
                  <Form.Label>Nombre del titular</Form.Label>
                  <Form.Control type="text" placeholder="Paula"/>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Apellidos del titular</Form.Label>
                  <Form.Control type="text" placeholder="Ramirez Quispe"/>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>N° de tarjeta:</Form.Label>
                  <Form.Control type="number" placeholder="4231 1234 4231 2342"/>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Código de verificación</Form.Label>
                  <Form.Control type="number" placeholder="123"/>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="d-block">Fecha de caducidad</Form.Label>
                  <Form.Control type="number" placeholder="02" className="w-25 d-inline"/>
                    {"  /  "}
                  <Form.Control type="number" placeholder="22" className="w-25 d-inline"/>
                </Form.Group>
                <img src={Tarjetas} height={"65px"} className="position-absolute" style={{right: "11px", marginTop:"-68px"}}/>
              </Form>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Agendar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PagoTarjeta;
