import React from 'react';
import Header from "components/Header";
import ProductList from "components/ProductList";
import Footer from "components/Footer";
import 'css/index.css';


const App = () => {

    const productArr = [
        {id:1, description:'Nikon COOLPIX B500 Digital Camera, Black', price: 249, imgPath:'/src/img/camera.png', ratingPath:'/src/img/rating-4.5.png', reviews: 12341},
        {id:2, description:'Echo Plus (2nd gen) – Premium sound with built- Charcoal', price: 134, imgPath:'/src/img/echo.png', ratingPath:'/src/img/rating-4.5.png', reviews: 5446},
        {id:3, description:'Apple iPhone X, GSM Unlocked 5.8in, 64 GB - Space Gray', price: 729, imgPath:'/src/img/iphone.png', ratingPath:'/src/img/rating-4.png', reviews: 676},
        {id:4, description:'Xbox 360 Controller, 360 Wireless Controller 2.4 GHZ', price: 49, imgPath:'/src/img/xbox.png', ratingPath:'/src/img/rating-4.5.png', reviews: 5675},
        {id:5, description:'Razer Cynosa Chroma Gaming Keyboard', price: 54, imgPath:'/src/img/keyboard.png', ratingPath:'/src/img/rating-4.png', reviews: 122},
        {id:6, description:'"PlayStation 4 - 1TB Slim - Console Edition', price: 349, imgPath:'/src/img/ps4.png', ratingPath:'/src/img/rating-4.5.png', reviews: 2132}
    ]

	return (

        <> 
            <Header />
            <ProductList data = {productArr} />
            <Footer />
        </>

        )
}

export default App;