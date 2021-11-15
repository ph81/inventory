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
      <tr className="align-middle">
         <td>{nombre}</td>
         <td>{costo}</td>
         <td>{iva}</td>
         <td>{stock}</td>
         <td>{precio}</td>
         <td>
            <Button variant="transparent" 
            data-bs-toggle="tooltip" data-bs-placement="top" title="Editar artículo"
            onClick={() => navigate(`/edit/${id}`)}>
            <FcEditImage />
            </Button>
            <Button variant="transparent" 
            data-bs-toggle="tooltip" data-bs-placement="top" title="Borrar artículo"
            onClick={() => handleRemoveItem(id)} >
            <FcEmptyTrash />
            </Button>
         </td>
      </tr>
   )
}

export default Item;