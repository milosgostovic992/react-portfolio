import Wrapper from '../../Helper/Wrapper';
import { services } from '../../data/serviesdata'

import './services.scss'

const Services = () => {
    return ( 
        <section className="services">
            <Wrapper>
                <div className="services__heading-holder">
                <h2 className='services__heading'>Services</h2>
                <div className="underline"></div>
                </div>
            <ul className='services__list'>
            {services.map((s)=> (
                <li className='services__item' key={s.id}>
                   <span className='services__icon'>{s.icon}</span>
                    <h3 className="services__title">{s.title}</h3>
                    <div className="services__underline underline"></div>
                    <p className='services__text'>{s.text}</p>
                </li>
            ))}
        </ul>
            </Wrapper>
        </section>
     );
}
 
export default Services;