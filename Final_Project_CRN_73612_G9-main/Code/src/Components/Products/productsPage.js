import React from 'react'
import './products.css'
import Footer from '../Footer/Footer'
import { Container, Icon } from '../SignIn/SignInPageElements'
import MediaCard from './ProductItem1'
import MediaCard2 from './ProductItem2'
import MediaCard3 from './ProductItem3'
import MediaCard4 from './ProductItem4'
import MediaCard5 from './ProductItem5'
import MediaCard6 from './ProductItem6'
import MediaCard7 from './ProductItem7'
import MediaCard8 from './ProductItem8'

const ProductsPage = () => {
    return (
        <div className="container">
            <Container className="container">
                <Icon to="/" className="title">Orange Tech</Icon>
                <div className="products-container">
                    <div className="search-filter-container">
                        <h1>Filter & Search</h1>
                        <div className="search-filter-items">
                            <ul>
                                <li>Company
                                    <form><br />
                                        <input type="radio" id="sam" name="company" value="sam"></input>
                                        <label for="sam">Samsung</label><br />
                                        <input type="radio" id="apple" name="comapany" value="apple"></input>
                                        <label for="apple">Apple</label><br />
                                        <input type="radio" id="asus" name="comapany" value="asus"></input>
                                        <label for="asus">ASUS</label>
                                    </form>
                                </li>
                                <li>Product
                                    <form><br />
                                        <input type="radio" id="phones" name="product" value="phones"></input>
                                        <label for="phones">Phones</label><br />
                                        <input type="radio" id="Tablets" name="product" value="Tablets"></input>
                                        <label for="Tablets">Tablets</label><br />
                                        <input type="radio" id="Laptops" name="product" value="Laptops"></input>
                                        <label for="Laptops">Laptops</label>
                                    </form>
                                </li>
                                <li>Price
                                    <form><br />
                                        <input type="radio" id="one" name="price" value="one"></input>
                                        <label for="one">$1000-$1500</label><br />
                                        <input type="radio" id="seven" name="price" value="seven"></input>
                                        <label for="seven">$750-$999</label><br />
                                        <input type="radio" id="five" name="price" value="five"></input>
                                        <label for="five">$500-$749</label>
                                    </form>
                                </li>
                                <li>Type
                                    <form><br />
                                        <input type="radio" id="New" name="type" value="New"></input>
                                        <label for="New">New</label><br />
                                        <input type="radio" id="Open" name="type" value="Open"></input>
                                        <label for="Open">Open Box</label><br />
                                        <input type="radio" id="Used" name="type" value="Used"></input>
                                        <label for="Used">Used</label>
                                    </form>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="search-filter-container-two">
                        <form className="search-bar">
                            <label for="Sitem">Search Item: </label>
                            <input type="text" id="Sitem" name="Sitem"></input>
                        </form>
                    </div>
                    <div className="row">
                        <div className="column"><MediaCard /></div>
                        <div className="column"><MediaCard2 /></div>
                        <div className="column"><MediaCard3 /></div>
                        <div className="column"><MediaCard4 /></div>

                    </div>
                    <div className="row">
                        <div className="column"><MediaCard5 /></div>
                        <div className="column"><MediaCard6 /></div>
                        <div className="column"><MediaCard7 /></div>
                        <div className="column"><MediaCard8 /></div>

                    </div>


                </div>
            </Container>
            <Footer />
        </div>



    )
}

export default ProductsPage