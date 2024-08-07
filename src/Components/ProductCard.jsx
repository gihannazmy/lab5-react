import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductCard = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  const discountedPrice = product.price - (product.price * (product.discountPercentage / 100));

  return (
    <div className="product-details">
      <h1>{product.title}</h1>
      <img src={product.thumbnail} alt={product.title} />
      <p>{product.description}</p>
      <p>Category: {product.category}</p>
      <p>Brand: {product.brand}</p>
      <p>Rating: {product.rating}</p>
      {product.discountPercentage ? (
        <p>
          Price: <strike>£{product.price.toFixed(2)}</strike> £{discountedPrice.toFixed(2)} ({product.discountPercentage}% off)
        </p>
      ) : (
        <p>Price: £{product.price.toFixed(2)}</p>
      )}
    </div>
  );
};

export default ProductCard;
