import { usePosts } from '../context/PostContext';

const PostList = () => {
    const { state, dispatch } = usePosts();

    const deletePost = id => {
        dispatch(deletePost(id));
    };

    return (
        <ul>
            {state.posts.map(post => (
                <li key={post.id} className='post'>
                    <h2>{post.title}</h2>
                    <img src={post.thumbnailUrl} alt={post.title} />
                    <button onClick={() => deletePost(post.id)}>Eliminar</button>
                </li>
            ))}
        </ul>
    );
};

export default PostList;