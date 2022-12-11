import React from 'react';
import Header from '../Header/Header';
import Login from '../Header/Login';
import Notices from '../Notice/Notices';
import Wallet from '../Wallet/Wallet';
var primaryColor = '#950ceb';
const Home = () => {
    return (
        <div>
            <Header></Header>
            {/* <Login></Login> */}
            <Notices></Notices>
            <div className='p-2' style={{ 'background': '#eef2fe' }}>
                <div className='p-5 my-2 text-start'>
                    <h2 style={{ 'color': primaryColor }}>Request testnet LINK</h2>
                    <p>Get testnet LINK for an account on one of the supported blockchain testnets so you can <br /> create and test your own oracle and Chainlinked smart contract</p>
                </div>
                <Wallet></Wallet>
            </div>
        </div>
    );
};

export default Home;