import React from 'react';
import Notices from '../Notice/Notices';
import Wallet from '../Wallet/Wallet';
var primaryColor = '#950ceb';
const Home = () => {
    return (
        <div>
            <Notices></Notices>
            <div className='p-4' style={{ 'background': '#eef2fe' }}>
                <div className='my-4 text-start'>
                    <h2 style={{ 'color': primaryColor }}>Request testnet LINK</h2>
                    <p>Get testnet LINK for an account on one of the supported blockchain testnets so you can <br /> create and test your own oracle and Chainlinked smart contract</p>
                </div>
                <Wallet></Wallet>
            </div>
        </div>
    );
};

export default Home;