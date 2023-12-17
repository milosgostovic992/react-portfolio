import accordionData from '../../data/accordiondata'
import SingleQuestion from './SingleQuestion';
import { useState } from 'react';

const Accordion = () => {

    const [activeQuestionId, setActiveQuestionId] = useState(null);

    const [questions, setQuestions] = useState(accordionData)

    return (  <div className="div">
        <div className="slider-title">
            <h2>Skills</h2>
            <div className="underline"></div>
        </div>
        <div className='container container-slider'>
            <section className="info">
                {accordionData.map((q) => {
                    return <SingleQuestion activeQuestionId={activeQuestionId}
                        setActiveQuestionId={setActiveQuestionId} key={q.id} {...q} />
                })}
            </section>
        </div>
    </div>
        
     );
}
 
export default Accordion;