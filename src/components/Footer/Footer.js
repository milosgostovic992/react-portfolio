import Wrapper from '../../Helper/Wrapper';
import  {social} from '../../data/footersocialdata'
import { Link } from 'react-router-dom';
import logo from '../../logo.svg'
import './Footer.scss'

const Footer = () => {
    return ( 
        <footer className="footer">
            <Wrapper>
                <div className="footer__holder">
                    <div className="nav-img-holder">
                        <Link to='/'><img className='footer__logo' src={logo} alt="logo" /></Link>
                    </div>
                    <ul className="footer__social-list">
                        {social.map((s) => (
                            <li key={s.id} className='footer__social-item'>
                                <a className='footer__social-link' href="">{s.icon}</a>
                            </li>
                        ))}
                    </ul>
                    <h3 className="footer__info">All right reserved</h3>
                </div>
            </Wrapper>
        </footer>
     );
}
 
export default Footer;