import React, { useContext } from 'react';
import ItemForm from './ItemForm';
import GlobalContext from '../context/GlobalContext';
import { useNavigate } from 'react-router-dom';

const NewItem = () => {
   const { items, setItems } = useContext(GlobalContext);
   let navigate = useNavigate();
   
  const handleOnSubmit = (item) => {
    setItems([item, ...items]);
    console.log(items);
    navigate('/');
  };

  return (
    <>
      <ItemForm handleOnSubmit={handleOnSubmit} />
    </>
  );
}

export default NewItem;