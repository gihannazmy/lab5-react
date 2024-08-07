import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems, removeFromCart, updateQuantity } from '../features/cart/CartSlice'; // Adjust the path as necessary
import { Container, Row, Col, Card, Button, InputGroup, FormControl } from 'react-bootstrap';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const handleRemove = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id: itemId, quantity: newQuantity }));
    }
  };

  const handleCheckout = () => {
    alert('Proceeding to checkout');
  };

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <>
          <Row>
            {cartItems.map((item) => (
              <Col md={4} key={item.id} className="mb-4">
                <Card>
                  <Card.Img variant="top" src={item.thumbnail} alt={item.title} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>Price: £{item.price.toFixed(2)}</Card.Text>
                    <Card.Text>
                      Quantity:
                      <InputGroup className="mb-2">
                        <Button 
                          variant="outline-secondary" 
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        >
                          -
                        </Button>
                        <FormControl 
                          value={item.quantity} 
                          onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                          style={{ width: '80px', textAlign: 'center' }}
                        />
                        <Button 
                          variant="outline-secondary" 
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        >
                          +
                        </Button>
                      </InputGroup>
                    </Card.Text>
                    <Button 
                      variant="danger"
                      onClick={() => handleRemove(item.id)}
                    >
                      Remove
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-4">
            <Button variant="primary" onClick={handleCheckout}>
              Checkout
            </Button>
            <div className="mt-3">
              <h5>Total Amount: £{totalAmount.toFixed(2)}</h5>
            </div>
          </div>
        </>
      )}
    </Container>
  );
};

export default Cart;
