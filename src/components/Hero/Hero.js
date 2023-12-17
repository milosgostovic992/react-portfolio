import heroImg from '../../hero.png';
import {social} from '../../data/navbardata'
import Wrapper from '../../Helper/Wrapper';
import { Link } from 'react-router-dom';

const Hero = () => {
    return ( 
        <section className="hero">
            <Wrapper>
           <div className="hero__container">
           <article className="hero__article">
                <div className="underline"></div>
                <h1 className="hero__heading">I'm Milos</h1>
                <h4 className="hero__info">Freelance Web And Mobile UI/UX Designer</h4>
                <Link to="/contact" className="hero__link btn">Contact me</Link>
                <ul className="social-icons">
                        {social.map((soc) => {
                            return <li key={soc.id}>
                                <a target='_blank' href={soc.url}>{soc.icon}</a>
                            </li>
                        })}
                    </ul>
            </article>
            <div className="hero__image-holder">
                <img className="hero__image" src={heroImg} alt="" />
            </div>
           </div>
           </Wrapper>
        </section>
     );
}
 
export default Hero;