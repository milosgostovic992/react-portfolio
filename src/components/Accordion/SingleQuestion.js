import { useState, useRef, useEffect } from "react";
import { FiChevronDown } from 'react-icons/fi'

const SingleQuestion = ({ title, info, id, activeQuestionId, setActiveQuestionId }) => {

const [showinfo, setShowInfo] = useState(false);

const  clickHandler = () => {
    setActiveQuestionId(id === activeQuestionId ? null : id);
}

useEffect(() => {
    console.log('change');
}, [showinfo])


return ( 
    <div className="accordion-row"> 
        <h2>
        <button 
            onClick={clickHandler} className="btn-accordion">
                <h2 className="accordion-heading">{title}</h2>
                {id === activeQuestionId ? <FiChevronDown className="accordion-icon active" /> : <FiChevronDown className="accordion-icon"/>}
        </button>
            <div className={`accordion-content ${id === activeQuestionId ? 'accordion-active' : ''}`}>
            <div className="accordion-holder">
                <p className="accordion-text">{info}</p>
            </div>
        </div>
        </h2>
    </div>
    );
}
 
export default SingleQuestion;