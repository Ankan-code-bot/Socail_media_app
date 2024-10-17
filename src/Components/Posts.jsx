import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { listContext } from "../Strore/Post_Store";
import LoadingState from "./Loading";

const Postes = () => {
  const { PostList, load } = useContext(listContext);
 
  return (
    
    <div className="first-Container">
        <center>
        {load && <LoadingState />} 
        {!load && PostList.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </center>
    </div>
  );
}

export default Postes;
