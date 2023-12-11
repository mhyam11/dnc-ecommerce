import React from 'react'
import './index.scss'
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';
import Search from '../../components/Search/Search';
import ProductCard from '../../components/ProductCard/ProductCard';
import { useParams } from 'react-router-dom';
import ProductDetail from '../../components/ProductDetail/ProductDetail';

const Products = ({data}) => {
  const {productId} = useParams();
  const selectedProduct = data.find(product => product.id == productId);

  return (
    <section className="product">
      <HeaderMenu/>
      <Search/>
      <ProductDetail data={selectedProduct}/>
        </section>  
  )
}

export default Products;