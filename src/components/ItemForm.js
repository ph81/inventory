import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';


const ItemForm = (props) => {
   const [item, setItem] = useState(() => {
      return {
        nombre: props.item ? props.item.nombre : '',
        costo: props.item ? props.item.costo : 0,
        iva: props.item ? props.item.iva : 0,
        stock: props.item ? props.item.stock : 0,
        precio: props.item ? props.item.precio : 0
      };
    });
  
   const [errorMsg, setErrorMsg] = useState('');
   const { nombre, costo, iva, stock, precio } = item;
   const navigate = useNavigate();
  
   const handleOnSubmit = (event) => {
      event.preventDefault();
      const values = [nombre, costo, iva, stock, precio];
      let errorMsg = '';
  
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
        console.log(item);
        props.handleOnSubmit(item);
      } else {
        errorMsg = 'Por favor llene los campos requeridos.';
      }
      setErrorMsg(errorMsg);
   }

   const handleInputChange = (event) => {
      const { name, value } = event.target;
      switch (name) {
         case 'costo':
            if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
               setItem((prevState) => ({
                ...prevState,
                [name]: value
               }));
            }
            break;
         case 'stock':
          if (value === '' || parseInt(value) === +value) {
            setItem((prevState) => ({
              ...prevState,
              [name]: value
            }));
          }
          break;
         case 'precio':
          if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
            setItem((prevState) => ({
              ...prevState,
              [name]: value
            }));
          }
          break;
      default:
          setItem((prevState) => ({
            ...prevState,
            [name]: value
          }));
      }
  }

   return (
      <>
      <div className="main-form">
         <h2>Artículo</h2>
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Nombre:</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="nombre"
            value={nombre}
            placeholder="Nombre del artículo"
            onChange={handleInputChange}
          />
         </Form.Group>
         <Form.Group controlId="name">
          <Form.Label>Costo:</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="costo"
            value={costo}
            placeholder="Costo"
            onChange={handleInputChange}
          />
         </Form.Group>
         <Form.Group controlId="name">
          <Form.Label>IVA:</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="iva"
            value={iva}
            readOnly
          />
         </Form.Group>
         <Form.Group controlId="name">
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
         <Form.Group controlId="name">
          <Form.Label>Precio:</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="precio"
            value={precio}
            placeholder="Precio"
            onChange={handleInputChange}
          />
         </Form.Group>
         <Button variant="secondary" type="submit" 
         className="submit-btn"
         onClick={() => navigate(`/`)}>
          Cancelar
        </Button>
         <Button variant="primary" type="submit" className="submit-btn">
          Guardar
        </Button>
      </Form>
      </div>
      </>
   )  
}

export default ItemForm;