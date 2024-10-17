import { useContext, useEffect, useRef } from "react";
import { listContext } from "../Strore/Post_Store";
import { useNavigate } from "react-router-dom";


const CreatePost = () => {
  const { addPost } = useContext(listContext);
  const nav = useNavigate();

  const titleElement = useRef();
  const bodyElement = useRef();
  const userIdElement = useRef();
  const tagsElement = useRef();
  const reactionElement = useRef();

  const onClickHandler = (event) => {
    event.preventDefault();
    const title = titleElement.current.value;
    const body = bodyElement.current.value;
    const userid = userIdElement.current.value;
    const reactions = reactionElement.current.value;
    const tags = tagsElement.current.value.split(" ");
    console.log(reactions);
    // Clear form fields
    titleElement.current.value = "";
    bodyElement.current.value = "";
    userIdElement.current.value = "";
    reactionElement.current.value = "";
    tagsElement.current.value = "";

    fetch('https://dummyjson.com/posts/1', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: title,
        body: body,
        userId: userid,
        tags: tags,
        reactions: reactions,
      })
    })
    .then(res => res.json())
    .then(post => addPost(post));

    nav("/post");
  };
   
 
  return (
    <div className="form">
      <div className="mb-3">
        <label htmlFor="title" className="form-label title">Title</label>
        <input
          type="text"
          className="form-control"
          ref={titleElement}
          id="title"
          placeholder="Enter a title"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label title">Share Your Thoughts</label>
        <textarea
          className="form-control"
          ref={bodyElement}
          id="body"
          rows="3"
          placeholder="Share your experience or something new."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label title">User ID</label>
        <input
          type="text"
          className="form-control"
          ref={userIdElement}
          id="userId"
          placeholder="Enter your User ID."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label title">Tags</label>
        <input
          type="text"
          className="form-control"
          ref={tagsElement}
          id="tags"
          placeholder="Enter tags separated by spaces."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label title">Reactions</label>
        <input
          type="text"
          className="form-control"
          ref={reactionElement}
          id="reactions"
          placeholder="Enter Likes and Dislikes separated by space."
        />
      </div>
      <button type="submit" className="btn btn-primary" onClick={onClickHandler}>
        Post
      </button>
    </div>
  );
};

export default CreatePost;
