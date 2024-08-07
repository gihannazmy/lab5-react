import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import ThemeContext from '../context/ThemeContext'; 

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { theme } = useContext(ThemeContext); 

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  const discountedPrice = product.price - (product.price * (product.discountPercentage / 100));

  return (
    <Container className={`bg-${theme} text-${theme === 'light' ? 'dark' : 'light'}`}>
      <Row className="my-4">
        <Col md={6}>
          <Image src={product.thumbnail} alt={product.title} fluid />
        </Col>
        <Col md={6}>
          <h1>{product.title}</h1>
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
          <Button variant="secondary" className="ml-2">Add to Cart</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
