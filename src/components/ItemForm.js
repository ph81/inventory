import React, { useState, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const ItemForm = (props) => {
  const [item, setItem] = useState(() => {
    return {
      nombre: props.item ? props.item.nombre : "",
      costo: props.item ? props.item.costo : 0,
      iva: props.item ? props.item.iva : 0,
      stock: props.item ? props.item.stock : 0,
      precio: props.item ? props.item.precio : 0
    };
  });

  const [errorMsg, setErrorMsg] = useState("");
  const { nombre, costo, iva, stock, precio } = item;

  const [refs] = useState({
    costo: useRef(0),
    iva: useRef(0),
    stock: useRef(0),
    precio: useRef(0)
  });

  const [vars] = useState({
    fieldCosto: 0,
    fieldIva: 0,
    fieldStock: 0,
    fieldPrecio: 0
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    vars[name] = value;
    
    const fieldCosto = parseInt(refs.costo.current.value, 10);
    const fieldPrecio = parseInt(refs.precio.current.value, 10);
    switch (name) {
      case "costo":
        refs.iva.current.value = fieldCosto * 0.16;
        refs.precio.current.value = fieldCosto + parseInt(refs.iva.current.value);
        setItem((prevState) => ({
          ...prevState,
          [name]: value
        }));
        break;
      case "precio":
        refs.costo.current.value = fieldPrecio / 1.16;
        refs.iva.current.value = parseInt(refs.costo.current.value) * 0.16;
        setItem((prevState) => ({
          ...prevState,
          [name]: value
        }));
        break;
      default:
        refs[name].current.value = value;
        setItem((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [nombre, costo, iva, stock, precio];
    let errorMsg = "";

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value;
    });

    if (allFieldsFilled) {
      const item = {
        id: uuidv4(),
        nombre,
        costo,
        iva,
        stock,
        precio
      };
      if (item.costo === 0) {
        item.costo = parseFloat(refs.costo.current.value);
      }
      if (item.precio === 0) {
        item.precio = parseFloat(refs.precio.current.value);
      }
      if (item.iva === 0) {
        item.iva = parseFloat(refs.iva.current.value);
      }
      props.handleOnSubmit(item);
    } else {
      errorMsg = "Por favor llene los campos requeridos.";
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setItem((prevState) => ({
      ...prevState,
      [name]: value
    }));
    
  };

  return (
    <>
      <div className="main-form">
        <h2>Nuevo</h2>
        {errorMsg && <p className="errorMsg">{errorMsg}</p>}
        <Form onSubmit={handleOnSubmit}>
          <Form.Group controlId="nombre">
            <Form.Label>Nombre:</Form.Label>
            <Form.Control
              className="input-control"
              type="text"
              name="nombre"
              value={nombre}
              required
              placeholder="Nombre del artículo"
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="costo">
            <Form.Label>Costo:</Form.Label>
            <Form.Control
              className="input-control"
              type="text"
              name="costo"
              defaultValue={vars.fieldCosto}
              ref={refs.costo}
              placeholder="Costo"
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group controlId="iva">
            <Form.Label>IVA:</Form.Label>
            <Form.Control
              className="input-control"
              type="text"
              name="iva"
              defaultValue={vars.fieldIva}
              ref={refs.iva}
              onChange={onChange}
              readOnly
            />
          </Form.Group>
          <Form.Group controlId="stock">
            <Form.Label>Stock:</Form.Label>
            <Form.Control
              className="input-control"
              type="text"
              name="stock"
              value={stock}
              placeholder="Unidades disponibles"
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="precio">
            <Form.Label>Precio:</Form.Label>
            <Form.Control
              className="input-control"
              type="text"
              name="precio"
              defaultValue={vars.fieldPrecio}
              ref={refs.precio}
              placeholder="Precio"
              onChange={onChange}
            />
          </Form.Group>
          <Button
            variant="secondary"
            type="submit"
            className="submit-btn"
            onClick={() => console.log(item)}
          >
            Cancelar
          </Button>
          <Button variant="primary" type="submit" className="submit-btn">
            Guardar
          </Button>
        </Form>
      </div>
    </>
  );
};

export default ItemForm;
