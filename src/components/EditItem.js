import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';
import { useParams, useNavigate } from 'react-router-dom';
import ItemForm from './ItemForm';

const EditItem = () => {
   const { items, setItems } = useContext(GlobalContext);
   const { id } = useParams();
   const navigate = useNavigate();
   const itemToEdit = items.find((item) => item.id === id);
 
   const handleOnSubmit = (item) => {
     const filteredItems = items.filter((item) => item.id !== id);
     setItems([item, ...filteredItems]);
     navigate('/');
   };
 
   return (
     <div>
       <ItemForm item={itemToEdit} handleOnSubmit={handleOnSubmit} />
     </div>
   );
}

export default EditItem;