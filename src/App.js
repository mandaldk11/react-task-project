import React from 'react'
import QuestionAnswer from './Components/QuestionAnswer'
import Select from './Components/Select'
import Textarea from './Components/Textarea'
import Checkbox from './Components/Checkbox'
import Slider from './Components/Slider'
import Text from './Components/Text'
import Number from './Components/Number'
import Radio from './Components/Radio'
import {
  BrowserRouter as Router,
  Routes,
  Route

} from 'react-router-dom'

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<QuestionAnswer None='None' />} />
          <Route path='/text' element={<Text Text='Text' />} />
          <Route path='/number' element={<Number Number='Number' />} />
          <Route path='/select' element={<Select Select='Select' />} />
          <Route path='/textarea' element={<Textarea TextArea='TextArea' />} />
          <Route path='/radio' element={<Radio Radio='Radio' />} />
          <Route path='/checkbox' element={<Checkbox CheckBox='CheckBox' />} />
          <Route path='/slider' element={<Slider Slider='Slider' />} />

        </Routes>
      </Router>

    </div>
  )
}
