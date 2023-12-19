import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios';
import { FaAngleDoubleRight } from 'react-icons/fa';
import jobData from "../../data/tabsdata"

function Tabs() {

    const [value, setValue] = useState(0);
    const [jobs, setJobs] = useState(jobData);

    // useEffect(() => {
    //     axios.get(url)
    //         .then(response => {
    //             const newJobs = response.data;
    //             setJobs(newJobs);
    //             setLoading(false);
    //         })
    // }, [])


    // if (loading) {
    //     return <section className='section loading'>
    //         <h1>Loading...</h1>
    //     </section>
    // }

    const { company, dates, duties, title } = jobs[value];

    return <section className='section'>
        <div className="title">
            <h2>Expierence</h2>
            <div className="underline"></div>
        </div>
        <div className="jobs-center">
            <div className="btn-container">
                {
                    jobData.map((job, index) => {
                        return <button
                            className={`job-btn ${index === value && 'active-btn'}`}
                            key={index}
                            onClick={() => {
                                setValue(index);
                            }}
                        >{job.company}
                        </button>
                    })}
            </div>
            {
              
                <article className={`job-info`} >
                    <h3>{title}</h3>
                    <h4>{company}</h4>
                    <p className='job-date'>{dates}</p>
                    {duties.map((duty, dutyIndex) => <div className="job-desc" key={dutyIndex}>
                        <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
                        <p>{duty}</p>                        
                    </div>)}
                </article>
            }
        </div>
    </section>
}

export default Tabs;
