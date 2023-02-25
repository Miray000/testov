import React, {useState} from 'react'
import {useParams} from 'react-router-dom'


const Home = () => {
    const {id} = useParams();
        const [posts, setPosts] = useState([])
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => response.json())
        .then(data => setPosts(data))

        
        
        


   
  return (
    <div>
       
     {posts && (
        <>
        <h1>{posts.title}</h1>
        <h2>{posts.body}</h2>
        </>
     )}
    </div>
  )
}

export default Home
