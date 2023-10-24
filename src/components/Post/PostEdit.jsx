import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PostEdit(props) {
  const { post, updatePost, removePost, getDate } = props; 
  const [isEdit, setIsEdit] = useState(false);  
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  return (    
    <div className='posts'>      
      <span>{getDate(post.created)}</span>
      <div>
        { !isEdit && <p className='post-edit'>{post.content}</p>}
        { isEdit && <textarea 
                className=''
                type='text' 
                id='text' 
                name='text'
                value={content} 
                onChange={e => setContent(e.target.value)} 
                rows='3' 
                autoComplete='off' 
                required/>}
        { !isEdit && <button className='' onClick={ () => {
            setContent(post.content);
            setIsEdit(true);}}>Изменить</button> }
        { !isEdit && <button className='btn-delete' onClick={ () => {           
            removePost(post.id);
            navigate('/');
            } } >Удалить</button>}
        { isEdit && <button className='' onClick={ () => {            
            updatePost(post.id, content);
            //setIsEdit(false);
            navigate('/');
            } }>Сохранить</button>}
      </div>
      
    </div>
  )
}
