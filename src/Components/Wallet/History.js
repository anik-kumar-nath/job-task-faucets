import React, { useState } from 'react';
// import Table from 'react-bootstrap/Table';
import './History.css';

const ETH = [
    {
        sr: 1,
        time: '12:30 PM',
        amount: '487',
        hash: '4s8er5s5fe57rjmxnfuewrurks'
    },
    {
        sr: 2,
        time: '10:30 PM',
        amount: '875',
        hash: 'sf7s7ers4e7r7wser'
    },
    {
        sr: 3,
        time: '11:30 PM',
        amount: '789',
        hash: 'se4s7er7'
    }
]
const TestLink = [
    {
        sr: 1,
        time: '08:30 AM',
        amount: '748',
        hash: '7s7effkeurusue4'
    },
    {
        sr: 2,
        time: '10:23 AM',
        amount: '974',
        hash: 'sfe7r7sr4fer'
    },
    {
        sr: 3,
        time: '11:10 AM',
        amount: '874',
        hash: 's4e7s8er'
    }
]

const History = () => {
    const [transaction, setTransaction] = useState(ETH)
    const [active, setActive] = useState(true);


    return (
        <div>
            <strong>Request History</strong>
            <br />
            <div className='d-flex flex-wrap'>
                <button onClick={() => { setTransaction(ETH); setActive(true) }} className={`${active ? 'btn btn-primary' : 'btn btn-secondary'} mx-1`}>ETH Transaction History</button>
                <button onClick={() => { setTransaction(TestLink); setActive(false) }} className={`${active ? 'btn btn-secondary' : 'btn btn-primary'} mx-1`}>TestLink Transaction History</button>
            </div>
            <br />
            <table>
                <thead>
                    <tr>
                        <th>Sr</th>
                        <th>Time</th>
                        <th>Amount</th>
                        <th>Hash</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        transaction.map(item =>
                            <tr key={item.sr}>
                                <td>{item.sr}</td>
                                <td>{item.time}</td>
                                <td>{item.amount}</td>
                                <td>{item.hash}</td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default History;