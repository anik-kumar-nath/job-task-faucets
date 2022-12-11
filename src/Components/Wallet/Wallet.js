import React, { useContext } from 'react';
import { ContextAPI } from '../../AuthContext/AuthContext';
import Table from 'react-bootstrap/Table';
import ReCapcha from '../ReCapcha/ReCapcha';

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
            <strong>Request History</strong>
            <br />
            <button>ETH Transaction History</button>
            <button>TestLink Transaction History</button>
            <br />
            <div className='w-auto'>
                <Table striped bordered >
                    <thead>
                        <tr>
                            <th>sr</th>
                            <th>Time</th>
                            <th> Amount</th>
                            <th>Hash</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default Wallet;