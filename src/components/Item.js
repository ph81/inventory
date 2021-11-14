import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FcEditImage, FcEmptyTrash } from 'react-icons/fc';

const Item = ({
   id,
   nombre,
   costo,
   iva,
   stock,
   precio,
   handleRemoveItem
}) => {
   const navigate = useNavigate();

   return (
      <tr>
         <td>{nombre}</td>
         <td>{costo}</td>
         <td>{iva}</td>
         <td>{stock}</td>
         <td>{precio}</td>
         <td><Button variant="light" 
            onClick={() => navigate(`/edit/${id}`)}>
            <FcEditImage />
            </Button>
         </td>
         <td><Button variant="light" 
            onClick={() => handleRemoveItem(id)} >
            <FcEmptyTrash />
            </Button>
         </td>
      </tr>
   )
}

export default Item;