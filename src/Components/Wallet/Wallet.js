import React, { useContext } from 'react';
import { ContextAPI } from '../../AuthContext/AuthContext';
import ReCapcha from '../ReCapcha/ReCapcha';
import History from './History';
var primaryColor = '#950ceb';
const Wallet = () => {
    const { network } = useContext(ContextAPI);
    return (
        <div className='bg-white p-2 text-start'>
            <p style={{ 'background': '#eef2fe', 'padding': '0.2rem 1rem' }}>Your wallet is connected to <strong>{network.name}</strong> , so you are requesting <strong>{network.name}</strong> Link/ETH.</p>
            <strong style={{ 'color': primaryColor }}>Wallet Address</strong>
            <br />
            <div style={{ 'maxWidth': '600px' }}>
                <input type="text" style={{ 'width': '100%' }} placeholder='Wallet Address..' />
                <br />
                <strong style={{ 'color': primaryColor }}>Wallet Address</strong>
                <br />
                <div className='d-flex justify-content-between'>
                    <input type="text" style={{ 'width': '49%' }} placeholder='20 Test Link' disabled />
                    <input type="text" style={{ 'width': '49%' }} placeholder='0.5 ETH' disabled />
                </div>
            </div>
            <div className='my-3'>
                <ReCapcha></ReCapcha>
            </div>
            <button className='btn mb-3' style={{ 'background': primaryColor, 'color': 'white' }}>Send Request</button>
            <br />
            <History></History>
        </div>
    );
};

export default Wallet;