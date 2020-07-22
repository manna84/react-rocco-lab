import React from 'react';
import prime from 'img/prime.png';

const Product = ({description,price, imgPath, ratingPath, reviews }) => {

	const addCart = (event) => {
		alert(`${description} is added in your cart`)
	}
	
	return (
		<>
                
                <article class="product-view">

                        <ul>
                            <li><a href=""><img src={imgPath} alt="camera" class="product-photo" /></a></li>
                            <li><a href="" class="product-desc">{description}</a></li>
                            <li>
                                 <ul class="rating-box">
                                    <li><a href=""><img src={ratingPath} alt="star rating" class="rating" /></a></li>
                                    <li><a href="">{reviews}</a></li>
                                </ul>
                            </li>
                            
                            <li>
                                <ul class="product-price">
                                    <li><a href="">CDN$ {price}</a></li>
                                    <li><a href=""><img src={prime} alt="prime logo" class="prime-logo" /></a></li>
                                </ul>
                            </li>
                            <li class="addCartBox"><button onClick={addCart} class="addCart">Add to cart</button></li>

                        </ul>

                    </article>
                            
                

		</>
	)
}
export default Product;