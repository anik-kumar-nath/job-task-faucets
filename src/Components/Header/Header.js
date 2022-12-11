import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import manIcon from './../../Assets/man.svg';

var primaryColor = '#950ceb';
// import arbi from "./../../Assets/arbitrum.svg";
// import avalanche from "./../../Assets/avalanche.svg";
// import bsc from "./../../Assets/bsc.svg";
// import ethereum from "./../../Assets/ethereum.svg";
// import fantom from "./../../Assets/fantom.svg";
// import harmony from "./../../Assets/harmony.svg";
// import poa from "./../../Assets/poa.svg";
// import polygon from "./../../Assets/polygon.svg";

const networkList = [
    {
        id: "syerweru",
        name: "Arbitrum Rinkeby",
        // img: arbi,
    },
    {
        id: "s7e8r8e",
        name: "Avalanche Fuji",
        // img: avalanche,
    },
    {
        id: "fdf7we7r",
        name: "BNB Chain Testnet",
        // img: bsc,
    },
    {
        id: "mfsere7r7",
        name: "Ethereum Rinkeby",
        // img: ethereum,
    },
    {
        id: "fd7fwser",
        name: "Fantom Testnet",
        // img: fantom,
    },
    {
        id: "se7r8s8er",
        name: "Harmony Testnet",
        // img: harmony,
    },
    {
        id: "dfser77r",
        name: "POA Network Sokol",
        // img: poa,
    },
    {
        id: "mvnus7er",
        name: "Polygon Mumbai",
        // img: polygon,
    },
];
const Header = () => {
    const [network, setNetwork] = useState(networkList[0]);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div className='px-3'>
            <Navbar>
                <Navbar.Brand href="#home" className='fw-bold fs-3' style={{ 'color': primaryColor }}>Faucets</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <div className='mx-2'>
                        <Dropdown>
                            <Dropdown.Toggle variant="bg-light border border-dark" id="dropdown-basic">
                                {network.name}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {
                                    networkList.map(item => <Dropdown.Item key={item.id} onClick={() => setNetwork(item)} >{item.name}</Dropdown.Item>)
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className='mx-2'>
                        <Button variant="white fw-bold" style={{ 'color': primaryColor, 'border': `2px solid ${primaryColor}` }} onClick={handleShow}>
                            Connect Wallet
                        </Button>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Modal heading</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                    <div>
                        <Dropdown>
                            <Dropdown.Toggle variant="" id="dropdown-basic">
                                <img src={manIcon} className='fluid bg-white rounded-circle' height={30} alt="" />
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>Login</Dropdown.Item>
                                <Dropdown.Item>Sign Up</Dropdown.Item>
                                <Dropdown.Item>FAQ</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;