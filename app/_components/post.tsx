import React from "react";
import { PostTypes } from "../_types/post";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Post({
  id,
  title,
  author,
  content,
  date,
  likes,
  comments,
}: PostTypes) {
  console.log(id);
  return (
    <li className="p-2 rounded bg-slate-100 shadow-md flex flex-col">
      <Link href={`/${id}`}>
        <h1 className="text-md font-bold">{title}</h1>
        <span className="text-sm text-gray-400">{author}</span>
        <p className="my-3 text-sm">{content}</p>
        <div className="flex items-center gap-3 mt-auto">
          <span className="text-sm text-gray-400">{date}</span>
          <span>
            <FontAwesomeIcon icon={faHeart} className="mr-1" />
            {likes}
          </span>
        </div>
      </Link>
    </li>
  );
}
