import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    posts: []
};

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost(state, action) {
            state.posts.push(action.payload);
        },
        deletePost(state, action) {
            state.posts = state.posts.filter(post => post.id !== action.payload);
        },
        updatePost(state, action) {
            const { id, updatedPost } = action.payload;
            const postIndex = state.posts.findIndex(post => post.id === id);
            state.posts[postIndex] = updatedPost; 
        }
    }
});

export const { addPost, deletePost, updatePost } = postsSlice.actions;
export default postsSlice.reducer;