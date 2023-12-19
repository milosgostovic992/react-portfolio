import './About.scss'; 
import Wrapper from '../../Helper/Wrapper';
import img from '../../about=img.png'
import heroImg from '../../hero.png';

const About = () => {

    const tags = ['CSS', 'HTML', "JavaScript", "React.js" ]
    return ( 
        <section className="about">
            <Wrapper>
                <div className="about__holder">
                    <div className="about__content">
                        <h3 className='about__title'>About me</h3>
                       <div className="about__underline underline"></div>
                    </div>
                    <div className="about__inner">
                        <div className="about__img-holder has-cover">
                                <img className='about__img' src={heroImg} alt="" />
                        </div>
                        <div className="about__article">
                            <p className="about__article-text">
                                Hi there. My name is Miloš and programming has always been
                                my passion. Three years ago I decided to take my first step
                                towards becoming a part of the IT industry and finished a
                                course for Front-end development and that is where it all
                                began. In the past two years, I've been working hard on several
                                projects to perfect my skills. I've learned a lot since I began. I've
                                been working on several commercial projects, that includes
                                web applications. mobile applications and websites. Past 6
                                months I have also been on an active React.js mentorship
                                program inside of Vega IT. Also for a short period of time, I was
                                in a Manual Quality Assurance position helping our team with
                                testing.
                            </p>
                            <div className="about__tags">
                                {tags.map((tag) => (
                                    <span className='about__tag'>{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
     );
}
 
export default About;