import React from 'react'
import './Cart.css'
import Footer from '../Footer/Footer'
import { Container, Icon } from '../SignIn/SignInPageElements'
import { useNavigate } from "react-router-dom";
import CartItem1 from './CartItem1';
import CartItem2 from './CartItem2';

const Cart = () => {

    const navigate = useNavigate();

    const purchased = () => {
        alert("Make sure you are signed in before completing your checkout!!");

        navigate("/signin");
        window.location.reload();
    }

    return (
        <>
            <Container>
                <Icon to="/" style={{ color: "#FFA500" }}>Orange Tech</Icon>
                <div className="cart-container">
                    <div className="column">
                        <h2>CART ITEMS</h2><br />
                        <h3><CartItem1 /></h3><br />
                        <h3><CartItem2 /></h3>
                    </div>
                    <div className="column" className="summary">
                        <h2>CART SUMMARY</h2><br />
                        <h3>Total: $ 3000</h3><br />
                        <h3>Total with tax (13%): 3390</h3>
                        <button className="checkout-button" onClick={purchased}>
                            Proceed To Checkout
                        </button>
                    </div>
                    <div>
                    </div>
                </div>
            </Container>
            <Footer />
        </>


    )
}

export default Cart