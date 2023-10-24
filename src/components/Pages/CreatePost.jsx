import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function CreatePost(props) {
    const { addPost } = props;
    const [content, setContent] = useState();
    const navigate = useNavigate();    

    const handleClose = () => {
        localStorage.setItem("content", content);
    
        navigate("/", { replace: false });
      };
    
    return (
    <div className='post'>        
        <form className='post-new'>
        <div className="post-control">
        <button type="button" className="btn btn-icon" onClick={handleClose}>
          <span className="material-symbols-outlined">Х</span>
        </button>
      </div>
            <label className='label' htmlFor='text'>Создать пост</label>
            <div className="post-img"></div>
            <textarea 
                className='post-input'
                type='text' 
                id='text' 
                name='text'
                placeholder="Введите текст"
                value={content} 
                onChange={e => setContent(e.target.value)} 
                rows='3' 
                autoComplete='off' 
                required/>
                <div className="post-control bottom">
            <button 
                className='btn' 
                onClick={ () => {
                    addPost(content);
                    navigate('/');
                } }>
                    Опубликовать
            </button>
            </div>
        </form>        
    </div>
  )
}
