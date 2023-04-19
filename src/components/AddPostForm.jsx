import React, { useContext, useState } from 'react';
import { PostsContext } from '../context/PostContext';
import './PostList.css'

const AddPostForm = ({ addPost }) => {
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [thumbnailUrl, setThumbnailUrl] = useState('');

    
    const handleSubmit = (e) => {
        e.preventDefault();
        const id = Date.now().toString();
        const newPost = { id, title, url, thumbnailUrl };
        addPost(newPost);
        setTitle('');
        setUrl('');
        setThumbnailUrl('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                required
                className="form-input"
            />
            <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="URL"
                required
                className="form-input"
            />
            <input
                type="text"
                value={thumbnailUrl}
                onChange={(e) => setThumbnailUrl(e.target.value)}
                placeholder="Thumbnail URL"
                required
                className="form-input"
            />
            <button type="submit">Agregar Post</button>
        </form>
    );
};


export default AddPostForm;

