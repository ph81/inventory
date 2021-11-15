import React from 'react';
import Header from '../components/Header';
import ItemList from '../components/ItemList'
import Footer from '../components/Footer';

const Products = () => {
   return (
      <>
      <Header />
      <main className="flex-shrink-0">
         <ItemList />
      </main>
      <Footer />
      </>
   )
}

export default Products;