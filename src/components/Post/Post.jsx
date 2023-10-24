import React from 'react'
import { Link } from 'react-router-dom';

export default function Post(props) {
  const { post, updatePost, removePost, getDate} = props;       

  return (    
    <div className='container-posts'>
      <p>{getDate(post.created)}</p>
      <div>
        <p className='text'>
          <Link className='text' to={`/posts/${post.id}`}>{post.content}</Link>
        </p>
      </div>      
    </div>
  )
}
