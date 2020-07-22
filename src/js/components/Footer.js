import React from 'react';
import logo from 'img/logo-amazon.png';
import facebook from 'img/facebook.svg';
import twitter from 'img/twitter.svg';
import youtube from 'img/youtube.svg';
import snapchat from 'img/snapchat.svg';

const Footer = () => {
    return (
        <>
            <footer>

                <section class="first-footer footer-box row">
                    <ul>
                        <li><h4>Get to Know Us</h4></li>
                        <li><a href="">Careers</a></li>
                        <li><a href="">Amazon and Our Planet</a></li>
                        <li><a href="">Investor Relations</a></li>
                        <li><a href="">Press Releases</a></li>
                    </ul>

                    <ul>
                        <li><h4>Make Money with Us</h4></li>
                        <li><a href="">Sell on Amazon</a></li>
                        <li><a href="">Sell Under Amazon Accelerator</a></li>
                        <li><a href="">Amazon Associates</a></li>
                        <li><a href="">Sell on Amazon Handmade</a></li>
                        <li><a href="">Advertise Your Products</a></li>
                        <li><a href="">Independently Publish</a></li>
                    </ul>
                                
                    <ul>
                        <li><h4>Amazon Payment Products</h4></li>
                        <li><a href="">Amazon.ca Rewards Mastercard</a></li>
                        <li><a href="">Shop with Points</a></li>
                        <li><a href="">Reload Your Balance</a></li>
                        <li><a href="">Amazon Currency Converter</a></li>
                        <li><a href="">Gift Cards</a></li>
                        <li><a href="">Amazon Cash</a></li>
                    </ul>

                    <ul>
                        <li><h4>Let Us Help You</h4></li>
                        <li><a href="">COVID-19 and Amazon</a></li>
                        <li><a href="">Shipping Rates & Policies</a></li>
                        <li><a href="">Amazon Prime</a></li>
                        <li><a href="">Returns Are Easy</a></li>
                        <li><a href="">Manage your Content and Devices</a></li>
                        <li><a href="">Customer Service</a></li>
                    </ul>
                </section>

                <section class="second-footer footer-box row">

                    <ul>
                        <li><a href="#"><img src={logo} alt = "amazon-logo" class="main-logo"/></a></li>
                        <li><select id="country" name="Country">
                            <option value="UK">UK</option>
                            <option value="Canada" selected>Canada</option>
                            <option value="US">US</option>
                            <option value="France">France</option>
                        </select></li>
                    </ul>

                    <ul class="social-list">
                        <li>Follow us on :</li>
                        <li><a href=""><img src={facebook} alt="facebook icon"/></a></li>
                        <li><a href=""><img src={twitter} alt="facebook icon"/></a></li>
                        <li><a href=""><img src={youtube} alt="facebook icon"/></a></li>
                        <li><a href=""><img src={snapchat} alt="facebook icon"/></a></li>
                    </ul>
                </section>

                <section class="third-footer">
                    <ul>
                        <li><a href="">Conditions of Use</a></li>
                        <li><a href="">Privacy Notice</a></li>
                        <li><a href="">Interest-Based Ads</a></li>
                    </ul>

                    <p>&copy; 2008-2020, Amazon.com, Inc. or its affiliates</p>

                </section>

            </footer>
        </>
    )
}

export default Footer;