import React from 'react';
import Header from '../components/Header';
import NewItem from '../components/NewItem';
import Footer from '../components/Footer';

const NewProduct = () => {
   return (
      <>
      <Header />
      <main>
         <NewItem />
      </main>
      <Footer />
      </>
   )
}

export default NewProduct;