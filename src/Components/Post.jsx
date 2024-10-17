import { useContext } from "react";
import { MdDeleteSweep } from "react-icons/md";
import { listContext } from "../Strore/Post_Store";
const Post = ({post}) => {
  const {deletePost} = useContext(listContext);
  return (
    <div className="card cards" style={{width: "35rem", margin: "20px 0px"}}>
    <div className="card-body " >
    <div className="delete_icon" onClick={() => deletePost(post.id)}><MdDeleteSweep /></div>
    <h5 className="card-title">{post.title}</h5>
    <p className="card-text">{post.body}</p>
    {post.tags.map((tag) => (<a href="#" key={tag} className="btn btn-primary tag">{tag}</a>))}
    <div className="card-text reaction">
      <h6>{`User Id : ${post.userId}`}</h6>
      <h6>{`Likes : ${post.reactions.likes}`}</h6>
      <h6>{`Dislikes : ${post.reactions.dislikes}`}</h6>
    </div>
  </div>
</div>
  );
}
export default Post;