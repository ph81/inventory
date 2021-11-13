import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';
import Item from './Item';
import { Table } from 'react-bootstrap';

const ItemList = () => {
   const {items, setItems} = useContext(GlobalContext);

   const handleRemoveItem = (id) => {
      setItems(items.filter((item) => item.id !== id));
    };

   return (
      <>
      <h3>Product list</h3>
      {items.length > 0 ?
      (
         <Table striped bordered hover>
         <thead>
         <tr>
            
            <th>Nombre</th>
            <th>Costo</th>
            <th>IVA</th>
            <th>Stock</th>
            <th>Precio</th>
            <th></th>
            <th></th>
         </tr>
         </thead>
         <tbody>
         {items.map(item => 
            <Item key={item.id} {...item} handleRemoveItem={handleRemoveItem} />
         )}
         </tbody>
         </Table>
      )
      : (
         <h4>Inventario vacío, agregue artículos por favor.</h4>
      )}
      
      </>
   )
}

export default ItemList;