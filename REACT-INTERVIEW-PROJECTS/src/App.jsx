import './App.css'
import Accordion from './components/accordian'
import RandomColor from './components/random-color'
import StarRating from './components/star-rating'

function App() {

  return (
    <div className='App'>
     {/* Accordion Component */}
    {/* <Accordion/> */}
    
     {/* Random Color Components */}
    {/* <RandomColor/> */}

    {/* Star Rating Component */}
    <StarRating noOfStars={10}/>
    </div>

  )
}

export default App
