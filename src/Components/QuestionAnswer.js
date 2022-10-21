import React from 'react'
import '../Style.css'
import {
    Link
} from 'react-router-dom';
export default function QuestionAnswer(props) {
    return (
        <>
            <div className='container'>
                <div id='questionDiv' className='main container my-4'>
                    <h3><pre> &larr;  Add Question</pre> </h3>
                    <div className='questionField'><span className='spans'>Question Title</span></div>
                    <div className='answerField'><span className='spans'>Answer Type</span>

                        <button className="btn btn-secondary dropdown-toggle dk22" role="button" data-bs-toggle="dropdown" >
                        </button>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="/">None</Link></li>
                            <li><Link className="dropdown-item" to="/text">Text</Link></li>
                            <li><Link className="dropdown-item" to="/number">Number</Link></li>
                            <li><Link className="dropdown-item" to="/select">Select</Link></li>
                            <li><Link className="dropdown-item" to="/textarea">TextArea</Link></li>
                            <li><Link className="dropdown-item" to="/radio">Radio</Link></li>
                            <li><Link className="dropdown-item" to="/checkbox">Checkbox</Link></li>
                            <li><Link className="dropdown-item" to="/slider">Slider</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
