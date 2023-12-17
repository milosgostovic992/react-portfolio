import Wrapper from "../../Helper/Wrapper";
import ContactDetails from "../ContactDetails/ContactDetails";
import details from '../../data/contactdetails'

const Contact = () => {
    console.log(details);
    return (
        <section className="contact">
            <Wrapper>
                <h3 className="contact__title">Contact me...</h3>
                <div className="contact__holder">
                   <ul>
                        {details.map((d) => 
                            <ContactDetails key={d.id} {...d}/>
                        )}
                   </ul>
                </div>
            </Wrapper>
        </section>
    );
}
 
export default Contact;