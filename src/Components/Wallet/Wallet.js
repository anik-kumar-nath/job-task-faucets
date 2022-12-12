import React, { useContext } from 'react';
import { ContextAPI } from '../../AuthContext/AuthContext';

import ReCapcha from '../ReCapcha/ReCapcha';
import History from './History';

const Wallet = () => {
    const { network } = useContext(ContextAPI);
    return (
        <div className='bg-white p-2 text-start'>
            <p>Your wallet is connected to <strong>{network.name}</strong> , so you are requesting <strong>{network.name}</strong> Link/ETH.</p>
            <strong>Wallet Address</strong>
            <br />
            <input type="text" className='w-50' placeholder='Wallet Address..' />
            <br />
            <strong>Wallet Address</strong>
            <br />
            <input type="text" className='w-25' placeholder='20 Test Link' disabled />
            <input type="text" className='w-25 ms-2' placeholder='0.5 ETH' disabled />
            <br />
            <div className='my-3'>
                <ReCapcha></ReCapcha>
            </div>
            <br />
            <button>Send Request</button>
            <br />
            <History></History>
        </div>
    );
};

export default Wallet;