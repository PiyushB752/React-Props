import './App.css';
import elephant from "./images/elephant.jpeg";
import DataComponent from './components/DataComponent';

function App() {
  // code here
  const i = DataComponent()
  return(
    <div className="app">
      <h1>Kalvium gallary</h1>
      <div className='imgContainer'>
      {
        i.map((images)=>(
          <img src={images.img} />
        ))
      }
      </div>
    </div>
  )
}

export default App;
