import React from 'react'
import { Link } from "react-router-dom";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
    <div className="content">
      <img src={Delete}alt="" />
      {/* <img src={`../upload/${post?.img}`} alt="" /> */}
      <div className="user">
         <img
         src={Edit}
          alt=""
        />
        <div className="info">
          <span>dffdfs</span>
          <p>Posted </p>
        </div>
      
          <div className="edit">
            <Link to={`/write?edit=2`} >
              <img src={Edit} alt="" />
            </Link>
            <img src={Edit} alt="" />
          </div>
    
      </div>
      <h1>gsjhdjdy</h1>
      <p
    hdhyhfudyfui
      ></p>      </div>
    <Menu />
  </div>
//     <div className="single">
//     <div className="content">
//       <img src={post.img} alt="" />
//       {/* <img src={`../upload/${post?.img}`} alt="" /> */}
//       <div className="user">
//         {post.userImg && <img
//           src={post.userImg}
//           alt=""
//         />}
//         <div className="info">
//           <span>{post.username}</span>
//           <p>Posted {moment(post.date).fromNow()}</p>
//         </div>
//         {currentUser.username === post.username && (
//           <div className="edit">
//             <Link to={`/write?edit=2`} state={post}>
//               <img src={Edit} alt="" />
//             </Link>
//             <img onClick={handleDelete} src={Delete} alt="" />
//           </div>
//         )}
//       </div>
//       <h1>{post.title}</h1>
//       <p
//         dangerouslySetInnerHTML={{
//           __html: DOMPurify.sanitize(post.desc),
//         }}
//       ></p>      </div>
//     <Menu cat={post.cat}/>
//   </div>
  )
}

export default Single