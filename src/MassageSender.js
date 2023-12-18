import React, { useState } from "react";
import "./css/massage.css";
import { Avatar, IconButton, Modal } from "@mui/material";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import CloseIcon from "@mui/icons-material/Close";
import { useStateValue } from "./StateProvider";
// import { db } from "./firebase";
import firebase from "firebase/compat/app";
import { db, storage } from "./firebase";

export default function MassageSender() {
  const [open, setOpen] = useState(false);
  const [{ user }, dispatch] = useStateValue();
  const [image, setImage] = useState("");
  const [massege, setMassege] = useState("");
  const [progress, setProgress] = useState(0);

  const handleUpload = (e) => {
    e.preventDefault();
    if (image === "") {
      db.collection("posts").add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        massege: massege || " ",
        usename: user.displayName,
        photoURL: user.photoURL,
      });
    } else {
      const uploadTask = storage.ref(`images/ ${image.name}`).put(image.name);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          setProgress(progress);
        },
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then(url => {
              db.collection("posts").add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                massege: massege || " ",
                usename: user.displayName,
                photoURL: user.photoURL,
                image: url
              });
            });
        }
      );
    }
    handeClose();
    setImage(null);
    setMassege("");
    setProgress(null);
  };

  const uploadFile = () => {
    document.getElementById("imageFile").click();
  };

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
    console.log(image.name);
  };

  const handeClose = () => {
    setOpen(false);
  };
  const clickHander = () => {
    setOpen(true);
  };
  return (
    <>
      <Modal open={open} onClose={handeClose}>
        <div className="modal_pop">
          <form>
            <div className="modalHanding">
              <h3>Create Post</h3>
              <IconButton onClick={handeClose}>
                <CloseIcon />
              </IconButton>
            </div>
            <div className="modalHander_top">
              <Avatar />
              <h5>{user.displayName}</h5>
            </div>
            <div className="modalBody">
              <textarea
                rows="5"
                placeholder="what's your mind Rajan Singh?"
                onChange={(e) => setMassege(e.target.value)}
              >
                {massege}
              </textarea>
            </div>
            <div className="modalFooterLeft">
              <h4>Add to your post</h4>
            </div>
            <div className="modalFooterRigth">
              <IconButton>
                <PhotoLibraryIcon
                  onClick={uploadFile}
                  fontSize="large"
                  style={{ color: "lightgreen" }}
                />
                <VideoCallIcon fontSize="large" style={{ color: "red" }} />
                <InsertEmoticonIcon
                  fontSize="large"
                  style={{ color: "#ffb100" }}
                />
              </IconButton>
              <input
                type="file"
                id="imageFile"
                onChange={handleChange}
                style={{ display: "none" }}
              />
            </div>

          {
            image!==" " && <h2>Image is added</h2>
          }

            {progress !== " " && <progress value="20" max="100" />}

            <input
              type="submit"
              className="post_submit"
              value="Post"
              onClick={handleUpload}
            />
          </form>
        </div>
      </Modal>

      <div className="messagesender">
        <div className="messagesender-top">
          <Avatar src={user.photoURL} />
          <form>
            <input
              type="text"
              placeholder="What's on you maind Rajan singh"
              onClick={clickHander}
            />
          </form>
        </div>
        <div className="messagesender_buttom">
          <div className="messngeOption">
            <VideoCallIcon style={{ color: "red" }} fontSize="large" />
            <p>Live Video</p>
          </div>
          <div className="messngeOption">
            <PhotoLibraryIcon
              style={{ color: "lightgreen" }}
              fontSize="large"
            />
            <p>Photo/Video</p>
          </div>
          <div className="messngeOption">
            <InsertEmoticonIcon style={{ color: "#ffb100" }} fontSize="large" />
            <p>Feeling/Activety</p>
          </div>
        </div>
      </div>
    </>
  );
}
