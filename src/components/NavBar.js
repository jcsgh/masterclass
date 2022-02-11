import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <nav style={container}>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/tour">Tour</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    )
}

const container = {
    display: 'flex',
    justifyContent: 'space-around',
  }

export default NavBar;