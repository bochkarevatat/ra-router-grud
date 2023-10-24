import React from 'react'
import Post from './../Post/Post';
import { Link } from 'react-router-dom';


export default function HomePage(props) {    
    const { posts, getDate } = props;
    return (
    <div className='container'>
        <button className='wrapper-btn'>
            <Link className='container-btn' to='/posts/new'>Создать пост</Link>
        </button>
        <div>            
            {
            posts.map( ( post ) => {
                return(
                    <Post key={post.id} post={post} getDate={getDate}/>
                );
            })
            }

        </div>

    </div>
  )
}
