import { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft} from 'react-icons/fi'
import {FaQuoteRight} from 'react-icons/fa'
import { FaAngleDoubleUp } from 'react-icons/fa';
import data from "../../data/sliderdata"

const Slider = () => {

const [people, setPeople] = useState(data);
const [index, setIndex] = useState(0)

useEffect(() => {

    const lastIndex = people.length - 1;
    if(index < 0) {
        setIndex(lastIndex);
    }
    if(index > lastIndex) {
        setIndex(0)
    }

}, [people, index])

useEffect(() => {
    let timer = setInterval(()=> {
        setIndex(index + 1)
    }, 10000)

    return () => clearInterval(timer);
}, [index])


    return ( 
     <section className="slider-section">
        <div className="slider-title">
            <h2>Projects</h2>
            <div className="underline"></div>
        </div>
        <div className="slider-section-center">
            {people.map((person, personIndex) => {
                // const {id, image, name, title, quote} = person;

                let position = 'slider-article nextSlide';

                if(personIndex === index) {
                    position = 'slider-article activeSlide';
                }

                if(personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
                    position = 'slider-article lastSlide'
                }

                return <article className={position} key={person.id}>
                    <h4>{person.name}</h4>
                    <img src={person.image} alt={person.name} className="slider-person-img" />
                    <p className="slider-title-inner">{person.title}</p>
                    <p className="slider-text">{person.quote}</p>
                    <a className="slider-link" href="">More about Project</a>
                    <FaAngleDoubleUp className="slider-icon"></FaAngleDoubleUp>
                </article>
            })}
            <button className="prev" onClick={()=> setIndex(index - 1)}>
                <FiChevronLeft/>
            </button>
                <button className="next" onClick={() => setIndex(index + 1)}>
                <FiChevronRight/>
            </button>
        </div>
     </section>
     );
}
 
export default Slider;