import React, { useEffect, useState } from "react";
import "./css/feed.css";
import Story from "./Story";
import MassageSender from "./MassageSender";
import Posts from "./Posts";

import { db } from "./firebase";

export default function Feed() {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPost(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);
  return (
    <div className="feed">
      <Story />
      <MassageSender />

      {posts.map((post) => {
        return (
          <Posts
            name={post.data.username}
            Time="9:54pm"
            title={post.data.message}
            image={post.data.image}
            profileURL={post.data.photoURL}
          />
        );
      })}
    </div>
  );
}
