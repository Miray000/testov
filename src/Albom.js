import React, {useState} from 'react'

const Albom = (row) => {
    const [albums, setAlbums] = useState([])
    fetch(`https://jsonplaceholder.typicode.com/albums/${row}`)
  .then(response => response.json())
  .then(data => setAlbums(data))
  
  .catch(err => console.error(err));
  return (
    <div>
        {albums && (
        <>
        <h1>{albums.title}</h1>
       
        </>
     )}
    </div>
  )
}

export default Albom
