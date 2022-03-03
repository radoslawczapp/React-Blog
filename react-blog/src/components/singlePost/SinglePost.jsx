import React from 'react'
import "./singlePost.css"

function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="../post.jpg" alt="" className="singlePostImg" />
                <h1 className="singlePostTitle">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                        <i className="singlePostIcon fa-solid fa-trash-can"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Joe Doe</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi quidem tempore cum id facere ipsa harum perferendis, officia temporibus aliquam laborum placeat incidunt ea assumenda fugit eaque distinctio. Sed, autem? Excepturi quidem tempore cum id facere ipsa harum perferendis, officia temporibus aliquam laborum placeat incidunt ea assumenda fugit eaque distinctio. Sed, autem? Excepturi quidem tempore cum id facere ipsa harum perferendis, officia temporibus aliquam laborum placeat incidunt ea assumenda fugit eaque distinctio. Sed, autem? Excepturi quidem tempore cum id facere ipsa harum perferendis, officia temporibus aliquam laborum placeat incidunt ea assumenda fugit eaque distinctio. Sed, autem? Excepturi quidem tempore cum id facere ipsa harum perferendis, officia temporibus aliquam laborum placeat incidunt ea assumenda fugit eaque distinctio. Sed, autem? Excepturi quidem tempore cum id facere ipsa harum perferendis, officia temporibus aliquam laborum placeat incidunt ea assumenda fugit eaque distinctio. Sed, autem?</p>
            </div>
        </div>
    )
}

export default SinglePost