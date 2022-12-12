import React, { useContext } from 'react';
import { ContextAPI } from '../../AuthContext/AuthContext';
import networkinfo from './../../Assets/error.svg';
import ReCapcha from '../ReCapcha/ReCapcha';
import History from './History';
var primaryColor = '#950ceb';
const Wallet = () => {
    const { network } = useContext(ContextAPI);
    return (
        <div className='bg-white p-4 text-start'>
            <div style={{ 'background': '#eef2fe', 'padding': '0.2rem 1rem' }} className='d-flex align-items-center my-2'><img src={networkinfo} height={20} className='m-1' alt="" /> <small> Your wallet is connected to <strong>{network.name}</strong> , so you are requesting <strong>{network.name}</strong> Link/ETH.</small> </div>
            <small className='my-3 fw-bold' style={{ 'color': primaryColor }}>Wallet Address</small>
            <div style={{ 'maxWidth': '600px' }}>
                <input type="text" className='px-2' style={{ 'width': '100%' }} placeholder='Wallet Address..' />
                <br />
                <small className='my-3 fw-bold' style={{ 'color': primaryColor }}>Wallet Address</small>
                <br />
                <div className='d-flex justify-content-between'>
                    <input type="text" className='px-2' style={{ 'width': '49%' }} placeholder='20 Test Link' disabled />
                    <input type="text" className='px-2' style={{ 'width': '49%' }} placeholder='0.5 ETH' disabled />
                </div>
            </div>
            <div className='my-3'>
                <ReCapcha></ReCapcha>
            </div>
            <button className='btn mb-3 fw-bold' style={{ 'background': primaryColor, 'color': 'white' }}>Send Request</button>
            <br />
            <History></History>
        </div>
    );
};

export default Wallet;