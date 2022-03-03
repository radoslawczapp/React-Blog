import React from 'react'
import "./post.css"

function Post() {
    return (
        <div className="post">
            <img className="postImg" src="./post.jpg" alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit</span>
                <hr />
                <span className="postDate">
                    1 hour ago
                </span>
            </div>
            <p className="postDesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur molestias aliquam quibusdam nisi. Nobis eveniet quibusdam vitae repellendus, aliquid provident odit officiis culpa neque perspiciatis laudantium, iure, odio nesciunt cum! Nobis eveniet quibusdam vitae repellendus, aliquid provident odit officiis culpa neque perspiciatis laudantium, iure. Nobis eveniet quibusdam vitae repellendus, aliquid provident odit officiis culpa neque perspiciatis laudantium, iure</p>
        </div>
    );
}

export default Post