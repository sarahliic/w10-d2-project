import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../NavBar";
import SidessBar from "../SidessBar";

import { Link } from "react-router-dom";

function Landing() {
  const [videose, setVideos] = useState([]);
  const apiKey = `AIzaSyBNyG3718AS3slTzg_DJ358cYJxVTqytGU`;
  const API_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=${apiKey}`;

  useEffect(() => {
    getApi();
  }, []);

  // api
  const getApi = () => {
    axios
      .get(`${API_URL}`)
      .then((res) => {
        console.log(res);
        setVideos(res.data.items);
      })
      .catch((err) => console.log("there is error: " + err));
  };
  //  title="YouTube Video Player"
  // allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  return (
    <>
      {/* <!-- Header Starts --> */}
      <NavBar></NavBar>
      {/* <!-- Header Ends --> */}

      {/* <!-- Main Body Starts --> */}
      <div className="mainBody">
        <SidessBar></SidessBar>
        {/* <!-- Sidebar Ends -->

      <!-- Videos Section --> */}

        <div className="videos">
          <h1>Recommended</h1>

          <div className="videos__container">
            {/* <!-- Single Video starts --> */}
            {videose.map((video) => (
              <div className="video" key={video.id.videoId}>
                <div className="video__thumbnail">
                  <Link to={`/ViewVideo/${video.id.videoId}`}>
                    <img
                      src={video.snippet.thumbnails.medium.url}
                      alt="img-vid"
                    />
                  </Link>
                </div>
                <div className="video__details">
                  <div className="author">
                    <img
                      src="http://aninex.com/images/srvc/web_de_icon.png"
                      alt="img-vid"
                    />
                  </div>
                  <div className="title">
                    <h3>{video.snippet.title}</h3>
                    <a href="">{video.channelTitle}</a>
                    <span>10M Views • {video.publishTime}</span>
                  </div>
                </div>
              </div>
            ))}
            {/* <!-- Single Video Ends --> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
