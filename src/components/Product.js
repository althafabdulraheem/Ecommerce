import React, { useState, useContext } from 'react';

import { Modal, Button } from 'react-bootstrap';

import Products from './ProductData';
import './Product.css';
import Cart from './Cart'
import {Name} from '../index.js';

const Product = ({count,value}) => {
  console.log(Name)
  const[names,seName]=useState("");
//  <Name.Consumer>{(Cname)=>{console.log(Cname)}}</Name.Consumer>
 const news=useContext(Name)
console.log(news)
  const [show, setShow] = useState(false);
  const [cartname, setCartname] = useState('');

  const [id, setId] = useState('');

  const addToCart = (item) => {
    setShow(true);
    setCartname(Products[item].name);
  };

  const initModal = () => {
    setShow(false);
  };

  const confirmCart = () => {
   count(value+1);
  };

  return (
    <>
   
     
      <h1>{names}</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-6">
            <div className="product-wrapper">
              <div className="heading" />
              <div className="product-container">
                <div className="card" >
                  <div className="product-image" style={{ overflow: 'hidden',height:"300px"}}>
                    <img
                      src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                      alt="productImage"
                    />
                  </div>
                  <div className="card-body">
                    <p>{Products[0].name}</p>
                    <p>₹1500</p>
                  </div>
                  <div className="card-footer">
                    <button className="btn btn-success" onClick={() => { addToCart(0); }}>
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-6">
            <div className="product-wrapper">
              <div className="heading" />
              <div className="product-container">
                <div className="card" >
                  <div className="product-image" style={{ overflow: 'hidden',height:"300px"}}>
                    <img
                      src="https://images.unsplash.com/photo-1577375729152-4c8b5fcda381?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                      alt="productImage"
                    />
                  </div>
                  <div className="card-body">
                    <p>{Products[0].name}</p>
                    <p>₹1500</p>
                  </div>
                  <div className="card-footer">
                    <button className="btn btn-success" onClick={() => { addToCart(0); }}>
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-6">
            <div className="product-wrapper">
              <div className="heading" />
              <div className="product-container">
                <div className="card" >
                  <div className="product-image" style={{ overflow: 'hidden',height:"300px"}}>
                    <img
                      src="https://images.pexels.com/photos/3521937/pexels-photo-3521937.jpeg?auto=compress&cs=tinysrgb&w=400"
                      alt="productImage"
                    />
                  </div>
                  <div className="card-body">
                    <p>{Products[0].name}</p>
                    <p>₹1500</p>
                  </div>
                  <div className="card-footer">
                    <button className="btn btn-success" onClick={() => { addToCart(0); }}>
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Button variant="success" onClick={initModal}>
        Open Modal
      </Button> */}
      <Modal show={show}>
        <Modal.Header closeButton onClick={initModal}>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>{cartname}</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={initModal}>
            Close
          </Button>
          <Button variant="dark" value={id} onClick={confirmCart}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Product;
