import React from 'react';
import logo from 'img/logo-amazon.png';
import search from 'img/search.svg';
import cart from 'img/shopping-cart.svg';

const Header = () => {
    return (
        <>
            <header>

                <div class="main-header">
                    <div class="box-logo">

                        <a href="/"><img src={logo} alt="amazon-logo" class="main-logo"/></a>

                        <div class="search-box">
                            <input type="text" placeholder="Search for Item" class="bar-search"/>
                            <button><img src={search} alt="search-lens"/></button>
                        </div>
                </div>

                <nav class="main-nav">
                    <ul>
                        <li class="btn"><a href="">Prime</a></li>
                        <li>
                            <ul class="cart-shopping">
                                <li><a href=""><img src = {cart} alt = "shopping-cart"/></a></li>
                                <li class="btn"><a href="">Cart</a></li>
                            </ul>
                        </li>
                        <li><button type="button"><a href="/login">LOG IN</a></button></li>
                        <li><button><a href="/signup">SIGN UP</a></button></li>
                    </ul>
                </nav>
                </div>

            </header>
        </>
    )
}

export default Header;