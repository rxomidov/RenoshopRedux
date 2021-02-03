import React, {useEffect, useState} from 'react';
import axios from "axios";
function Posts(props) {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
            .then(response => {
                console.log(response.data)
                setPosts(response.data);
            })
        //console.log(posts)
    },[]);
    return (
        <div>
            <h1>Posts</h1>
            {posts.map(post=>(
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <div>{post.body}</div>
                </div>
            ))}
        </div>
    );
}

export default Posts;