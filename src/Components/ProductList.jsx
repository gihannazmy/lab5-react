import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { addToCart } from '../features/cart/CartSlice';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
      });
  }, []);

  const handleAddToCart = (product, e) => {
    e.stopPropagation();
    dispatch(addToCart(product));
  };

  return (
    <Container>
      <Row className="my-4">
        {products.map(product => (
          <Col md={4} key={product.id} className="mb-4">
            <Card className="clickable-card">
              <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>

                <Card.Img variant="top" src={product.thumbnail} />
              </Link>

              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                {product.price !== undefined ? (
                  <Card.Text>£{product.price.toFixed(2)}</Card.Text>
                ) : (
                  <Card.Text>Price not available</Card.Text>
                )}
                <Button
                  variant="success"
                  className="ml-2"
                  onClick={(e) => handleAddToCart(product, e)}
                >
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
