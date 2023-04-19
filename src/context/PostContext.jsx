import { createContext, useContext, useReducer } from "react";
import postReducer from "../components/postReducer";

export const PostsContext = createContext()

export const usePosts = () => useContext(PostsContext) 


export const PostsProvider = ({ children }) => {

    const [state, dispatch] = useReducer(postReducer, { posts: [] });

    return (
        <PostsContext.Provider value={{ state, dispatch }}>
            {children}
        </PostsContext.Provider>
    );
};

