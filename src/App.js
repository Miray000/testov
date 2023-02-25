import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './App.css';
import Modal from './Modal'








function App() {
  
 const [row, setRow] = useState()
  const [showModal, setShowModal] = useState(false);
  const [dev, setDev] = useState([])
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(response => setDev(response))
  
  .catch(err => console.error(err));

 



  return (
    <div className="App">
       <Modal showModal={showModal} row={row}  setShowModal={setShowModal}/>
     <Link to="/albom">Opem</Link>
    
    
     {dev.map(({name, email, id}, index) => {
            return (
                <div className='op' key={index}>
                  <p>{name}</p>
                    <Link key={index} to={`/posts/${id}`}>Пости</Link>
                    <div className="flex items-center justify-center h-60">
                     <p>{row}</p>
                      <button type="button" id={id}  onClick={(e)=>setRow(id, e)}>open</button>
                
                      
            </div>
                  <p>{email}</p>
                </div>
            )
        })}
    </div>
  );
}

export default App;
