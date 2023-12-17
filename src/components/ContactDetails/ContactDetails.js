import './ContactDetails.scss'
const ContactDetails = ({ id, info, result, icon }) => {



    return ( 
        <li className="contact__item" key={id}>
                <span className="contact__item-icon">
                    {icon}
                </span>
            <div className='contact__item-holder'>
                <span className='contact__item-text'>{info}: {result}</span>
            </div>
        </li>
     );
}
 
export default ContactDetails;