import React, { useState } from 'react'
import '../Options.css'
import img1 from '../Images/minus.jpg'
import img2 from '../Images/plus.jpg'
export default function Options() {
    const [inputField, setInputfield] = useState([{ user: '', min: '', max: '' }])

    function handleSubmit(e) {
        alert("You have successfully submitted Form ! check Your data in console")
        let data = { inputField };
        console.log("All Input field data", data)
        e.preventDefault();
    }

    function handleaddclick() {
        setInputfield([...inputField, { user: '', min: '', max: '' }]);
    }
    function handleRemove(index) {
        const list = [...inputField];
        list.splice(index, 1);
        setInputfield(list);
    }

    function handleinputchange(e, index) {
        const { name, value } = e.target;
        const list = [...inputField];
        list[index][name] = value;
        setInputfield(list);
    }

    return (
        <>
            <div className='container'>
                {
                    inputField.map((x, i) => {
                        return (
                            <form onSubmit={handleSubmit}>
                                <div className='container optionDiv'>
                                    <h6>option-{i + 1}</h6>
                                    <input className='mx-2' type='text' name='user' placeholder='Placeholder' onChange={e => handleinputchange(e, i)} />
                                    <input className='mx-2' type='number' name='min' placeholder='Min' onChange={e => handleinputchange(e, i)} />
                                    <input className='mx-2' type='number' name='max' placeholder='Max' onChange={e => handleinputchange(e, i)} />

                                </div>
                                <div className='container'>
                                    {
                                        inputField.length !== 1 &&
                                        <img onClick={() => handleRemove(i)} src={img1} alt='minusIcon' />
                                    }
                                    {
                                        inputField.length - 1 === i &&
                                        <img onClick={handleaddclick} src={img2} alt='plusIcon' />
                                    }

                                </div>
                            </form>
                        );
                    })}
                <div className=' container my-4 mx-4'>
                    <button onClick={handleSubmit} type="submit" className="btn btn-success">Submit</button>
                </div>
            </div>
        </>

    )
}
