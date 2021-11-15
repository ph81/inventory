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
      <section className="container">
         <h1>Inventario</h1>
         {items.length > 0 ?
         (
            <div className="table-responsive">
            <Table bordered hover>
            <thead>
            <tr>
               <th>Artículo</th>
               <th>Costo</th>
               <th>IVA</th>
               <th>Stock</th>
               <th>Precio</th>
               <th>Acciones</th>
            </tr>
            </thead>
            <tbody>
            {items.map(item => 
               <Item key={item.id} {...item} handleRemoveItem={handleRemoveItem} />
            )}
            </tbody>
            </Table>
            </div>
            )
            : (
               <h4>Inventario vacío, agregue artículos por favor.</h4>
            )}
         
         </section>
      
      </>
   )
}

export default ItemList;