import React from 'react';
import Product from "components/Product";

const ProductList = ({data}) => {
    const productArr = data.map(user => <Product key={user.id} description={user.description} price={user.price} imgPath={user.imgPath} ratingPath={user.ratingPath} reviews={user.reviews} />)

    return (
        <>
            
            <section class="product-box row">

                <article class="product-bar-list">

                    <ul>
                        <li><h5>Electronics</h5></li>
                        <li><a href="">Audio & Home Theatre</a></li>
                        <li><a href="">Camera,photo & video</a></li>
                        <li><a href="">GPS & Navigation</a></li>
                        <li><a href="">Office Electronics</a></li>
                        <li><a href="">Accessories & Supplies</a></li>
                        <li><a href="">Computers & Accessories</a></li>
                        <li><a href="">eBook Reader & Accessories</a></li>
                        <li><a href="">Cell Phone & Accessories</a></li>
                        <li><a href="">Headphones</a></li>
                        <li><a href="">Poertable Audio & Video</a></li>
                        <li><a href="">Radio Communication</a></li>
                        <li><a href="">Security and surveillance</a></li>
                        <li><a href="">Telephone and Accessories</a></li>
                        <li><a href="">Televisions & Video</a></li>
                    </ul>

                </article>

                <article class="product-best">
                        {productArr}
                    </article>

            

</section>
        </>
    )
}


export default ProductList;