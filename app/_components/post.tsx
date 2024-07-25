import React from "react";
import { PostTypes } from "../_types/post";
export default function Post({
  title,
  author,
  content,
  date,
  likes,
  comments,
}: PostTypes) {
  return (
    <li className="p-2 rounded bg-slate-100 shadow-md">
      <h1 className="text-md font-bold">{title}</h1>
      <span>{author}</span>
      <p>{content}</p>
      <span>{date}</span>
      <span>{likes}</span>
      <ul>
        {comments.map((item, index) => (
          <li key={index}>
            <h2>{item.user}</h2>
            <p>{item.comment}</p>
          </li>
        ))}
      </ul>
    </li>
  );
}
