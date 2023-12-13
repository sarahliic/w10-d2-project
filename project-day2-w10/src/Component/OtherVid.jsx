import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import NavBar from "./NavBar";

function OtherVid({ video, onVideoClick }) {
  const { id } = useParams();

  const [viewVideo, setViewVideo] = useState(null);
  const [otherVideos, setOtherVideos] = useState([]);
  //comments state
  const [comments, setComments] = useState([]);
  const [commnets, setCommnets] = useState("");
  // likes and dislikes state
  const [reactImage, setReactImage] = useState({
    img1: "https://cdn-icons-png.flaticon.com/512/126/126473.png",
    img2: "https://cdn-icons-png.flaticon.com/512/126/126473.png",
  });
  const [DisreactImage, setDisReactImage] = useState({
    img1: "https://cdn-icons-png.flaticon.com/512/126/126473.png",
    img2: "https://cdn-icons-png.flaticon.com/512/126/126473.png",
  });
  const apiKey = "AIzaSyBNyG3718AS3slTzg_DJ358cYJxVTqytGU";
  const API_URL = `https://youtube.googleapis.com/youtube/v3/videos?id=${id}&key=${apiKey}`;
  const Other_Api = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&key=${apiKey}`;

  useEffect(() => {
    getApi();
    getOtherApi();
  }, []);

  const getApi = () => {
    axios
      .get(API_URL)
      .then((res) => {
        console.log(res);
        const video = res.data.items.find((vid) => vid.id === id);
        setViewVideo(video);
      })
      .catch((err) => console.log("Error: " + err));
  };

  const getOtherApi = () => {
    axios
      .get(Other_Api)
      .then((res) => {
        console.log(res);
        setOtherVideos(res.data.items);
      })
      .catch((err) => console.log("Error: " + err));
  };
  if (!viewVideo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="w-1/4">
        <h2>Other Videos</h2>
        <div>
          {otherVideos.map((video) => (
            <div key={video.id.videoId}>
              <img
                src={video.thumbnail}
                alt={video.title}
                onClick={() => onVideoClick(video.id)}
              />
              <p>{video.snippet.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OtherVid;
