import { useContext, useEffect, useState } from 'react';
import manIcon from './../../Assets/man.svg';
import { ContextAPI } from '../../AuthContext/AuthContext';
import { Link } from 'react-router-dom';
import { GoogleLogout } from 'react-google-login';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import MetaMask from './../../Assets/MetaMask.svg';
import WalletConnect from './../../Assets/WalletConnect.svg';
import wallet from "./../../Assets/wallet.png";
import arbi from "./../../Assets/arbitrum.svg";
import avalanche from "./../../Assets/avalanche.svg";
import bsc from "./../../Assets/bsc.svg";
import ethereum from "./../../Assets/ethereum1.png";
import fantom from "./../../Assets/fantom.svg";
import harmony from "./../../Assets/harmony.svg";
import poa from "./../../Assets/poa.svg";
import polygon from "./../../Assets/polygon.svg";
var primaryColor = '#950ceb';

const networkList = [
    {
        id: "syerweru",
        name: "Arbitrum Rinkeby",
        img: arbi,
    },
    {
        id: "s7e8r8e",
        name: "Avalanche Fuji",
        img: avalanche,
    },
    {
        id: "fdf7we7r",
        name: "BNB Chain Testnet",
        img: bsc,
    },
    {
        id: "mfsere7r7",
        name: "Ethereum Rinkeby",
        img: ethereum,
    },
    {
        id: "fd7fwser",
        name: "Fantom Testnet",
        img: fantom,
    },
    {
        id: "se7r8s8er",
        name: "Harmony Testnet",
        img: harmony,
    },
    {
        id: "dfser77r",
        name: "POA Network Sokol",
        img: poa,
    },
    {
        id: "mvnus7er",
        name: "Polygon Mumbai",
        img: polygon,
    },
];
const Header = () => {
    const { logOut, profile, clientId, network, setNetwork } = useContext(ContextAPI);
    useEffect(() => {
        setNetwork(networkList[3])
    }, [])
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='px-3'>
            <Navbar>
                <Link className='btn fw-bold fs-3' to={'/'} style={{ 'color': primaryColor }}>Faucets</Link>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <div className='mx-1'>
                        <Dropdown>
                            <Dropdown.Toggle variant="bg-light border border-dark d-flex align-items-center" id="dropdown-basic">
                                <div className='d-flex'>
                                    <img src={network.img} height={20} className='m-1' alt="" /> <span className='d-none d-md-block'>  {network.name}</span>
                                </div>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {
                                    networkList.map(item => <Dropdown.Item key={item.id} onClick={() => setNetwork(item)} ><img src={item.img} className='mx-1' height={20} alt="" />{item.name}</Dropdown.Item>)
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className='mx-1'>
                        <Button variant="white fw-bold" style={{ 'color': primaryColor, 'border': `2px solid ${primaryColor}` }} onClick={handleShow}>

                            <div className='d-flex align-items-center'>
                                <img src={wallet} height={20} className='m-1' alt="" /><span className='d-none d-md-block'> Connect Wallet</span>
                            </div>
                        </Button>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Connect your wallet</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className='row w-100'>
                                    <button className='btn bg-light col mx-2'>
                                        <img src={MetaMask} className='w-100' alt="" />
                                    </button>
                                    <button className='btn bg-light col mx-2'>
                                        <img src={WalletConnect} className='w-100' alt="" />
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>
                    </div>
                    <div>
                        <Dropdown>
                            <Dropdown.Toggle variant="" id="dropdown-basic">
                                {
                                    profile ?
                                        <img src={profile.imageUrl} className='fluid bg-white rounded-circle' height={30} alt="" />
                                        : <img src={manIcon} className='fluid bg-white rounded-circle' height={30} alt="" />
                                }
                            </Dropdown.Toggle>
                            {
                                profile ?
                                    <Dropdown.Menu>
                                        <Dropdown.Item> <GoogleLogout clientId={clientId} buttonText="Log out" onLogoutSuccess={logOut} /></Dropdown.Item>
                                        <Dropdown.Item><Link to={'/faq'} className='text-black'>FAQ</Link></Dropdown.Item>
                                    </Dropdown.Menu>
                                    :
                                    <Dropdown.Menu>
                                        <Dropdown.Item ><Link to={'/login'} className='text-black'>Log In</Link></Dropdown.Item>
                                        <Dropdown.Item><Link to={'/signup'} className='text-black'>Sing Up</Link></Dropdown.Item>
                                        <Dropdown.Item><Link to={'/faq'} className='text-black'>FAQ</Link></Dropdown.Item>
                                    </Dropdown.Menu>
                            }
                        </Dropdown>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};
export default Header;