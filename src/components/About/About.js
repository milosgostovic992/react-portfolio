import './About.scss'; 
import Wrapper from '../../Helper/Wrapper';
import img from '../../about=img.png'

const About = () => {
    return ( 
        <section className="about">
            <Wrapper>
                <div className="about__holder">
                    <div className="about__content">
                        <h3 className='about__title'>About me</h3>
                        <p className='about__text'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus culpa velit minus sapiente optio ea voluptas dolor totam aliquam veniam magni ipsum officiis quisquam exercitationem illum magnam, iste repellat dolorem.
                            Corporis, reprehenderit ipsam quas perspiciatis ratione aliquam molestias non explicabo, aliquid repudiandae quibusdam eum unde ea? Laboriosam, culpa alias iusto exercitationem cupiditate possimus excepturi porro quo, atque odio veritatis ab?
                            Corporis ea earum placeat ex repudiandae eum, similique nostrum facilis numquam, ullam veritatis corrupti itaque, pariatur aliquid sapiente rem repellat neque dolor nobis eos unde aspernatur nisi magnam. Expedita, nulla.
                            Veniam itaque, cupiditate provident deserunt consequatur magni quod debitis consectetur id quisquam iusto explicabo ratione modi harum numquam quasi architecto minus maiores cumque perspiciatis in, natus perferendis qui? Autem, saepe.
                        </p>
                    </div>
                   <div className="about__img-holder has-cover">
                        <img className='about__img' src={img} alt="" />
                   </div>
                </div>
            </Wrapper>
        </section>
     );
}
 
export default About;