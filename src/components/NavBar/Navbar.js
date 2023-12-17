import logo from '../../logo.svg'
import {useState, useEffect, useRef} from 'react'
import { FaBars} from 'react-icons/fa'
import {links} from '../../data/navbardata'
import Wrapper from '../../Helper/Wrapper'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);

    useEffect(() => {
        const linkHeight = linksRef.current.getBoundingClientRect().height;
       if(showLinks) {
           linksContainerRef.current.style.height = `${linkHeight} px`;
           console.log(linksContainerRef.current.style.height = `${linkHeight}px`);
       } else {
           linksContainerRef.current.style.height = `0px`;
       }
    }, [showLinks])
    
    const clickHandler = () => {
        setShowLinks(!showLinks);
    };

    return ( 
        <nav>
            <Wrapper>
                <div className="nav-center">
                    <div className="nav-header">
                        <div className="nav-img-holder">
                            <Link to='/'><img className='nav-logo-img' src={logo} alt="logo" /></Link>
                        </div>
                        <button className='nav-toggle' onClick={clickHandler}><FaBars/></button>
                    </div>
                    <div className='links-container' ref={linksContainerRef}>
                        <ul className="links" ref={linksRef}>
                            {links.map((link) => {
                                return <li key={link.id}>
                                    <Link to={link.url}>{link.text}</Link>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
            </Wrapper>
        </nav>
     );
}
 
export default Navbar;