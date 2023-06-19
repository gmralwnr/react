import React from "react";
import Comment from "./Comment";


const comments = [
    {
        name: "이인제",
        comment : "안녕하세여 리액트입니다",
    },
    {
        name: "유재석 ",
        comment : "리액트 짜잉야",
    },
    {
        name: "이이이",
        comment : "안 이이이 입니다",
    },

]
function CommentList(props){
    return (
        <div>
            <Comment name={"이인제"} comment={"안녕하세요 리액트입니다"}/>
            
            {comments.map((comment) => {
                return (
                    <Comment name= {comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}
export default CommentList;
