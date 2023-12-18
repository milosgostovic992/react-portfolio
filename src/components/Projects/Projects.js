import Wrapper from '../../Helper/Wrapper';
import './projects.scss'
import { projects } from '../../data/projectdata'

const Projects = () => {
    return ( 
        <div className='projects'>
            <Wrapper>
                <ul className="project__list">
                    <div className="projects__heading-holder">
                        <h2 className='projects__heading'>Projects</h2>
                        <div className="underline"></div>
                    </div>
                    {projects.map((project) => (
                    <li key={project.id} className='projects__item'>       
                        <div className="projects-holder">
                            <div className="projects__image-holder has-cover">
                                <img src={project.image} alt="" className="project__img" />
                            </div>
                            <div className="projects__info">
                                <span className="project__info-id">
                                {project.id}.
                                </span>
                                <h3 className="project__info-heading">{project.title}</h3>
                                <p className='project__info-text'>{project.text}</p>
                            </div>
                        </div>
                    </li>
                ))}
                </ul>
            </Wrapper>
        </div> 
        );
}
 
export default Projects;