import { createContext, useEffect, useReducer, useState } from "react";

export const listContext = createContext({
  PostList: [],
  addPost: () => {},
  load: true,
  deletePost: () => {},
});

const PostListReducer = (currPost, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [action.payload, ...currPost];
    case "ADD_INITIAL_POST":
      return action.payload.initialPosts;
    case "DELETE_POST":
      return currPost.filter((post) => post.id !== action.payload.postId);
    default:
      return currPost;
  }
};

const StoreProvider = ({ children }) => {
  const [PostList, DispatchPostList] = useReducer(PostListReducer, []);

  const [load, setLoad] = useState(true);

  useEffect(() => {
    setLoad(true); 
    fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then((data) => {
        addInitialPost(data.posts); 
        setLoad(false); 
      })
      
  }, []);


  const addPost = (posts) => {
    DispatchPostList({
      type: "ADD_POST",
      payload: {
        posts,
      },
    });
  };

  const addInitialPost = (initialPosts) => {
    DispatchPostList({
      type: "ADD_INITIAL_POST",
      payload: { initialPosts },
    });
  };

  const deletePost = (postId) => {
    DispatchPostList({
      type: "DELETE_POST",
      payload: { postId },
    });
  };

  
  return (
    <listContext.Provider value={{ PostList, addPost, deletePost, load}}>
      {children}
    </listContext.Provider>
  );
};

export default StoreProvider;
