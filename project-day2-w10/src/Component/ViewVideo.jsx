import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import NavBar from "./NavBar";
function ViewVideo() {
  const { id } = useParams();

  const [viewVideo, setViewVideo] = useState(null);
  const [otherVideos, setOtherVideos] = useState([]);

  //current video
  const [currentVideoId, setCurrentVideoId] = useState(id);

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

  const handleLike = () => {
    setReactImage((prevState) => ({
      ...prevState,
      img2: "https://www.freeiconspng.com/thumbs/like-icon-png/black-like-icon-png-13.png",
    }));
  };

  const handledisLike = () => {
    setDisReactImage((prevState) => ({
      ...prevState,
      img2: "https://www.freeiconspng.com/thumbs/like-icon-png/black-like-icon-png-13.png",
    }));
  };
  // full
  // https://www.freeiconspng.com/thumbs/like-icon-png/black-like-icon-png-13.png

  // un full
  //https://cdn-icons-png.flaticon.com/512/126/126473.png
  return (
    <>
      <NavBar></NavBar>

      <div className="flex">
        <div className="w-1/4">
          {/*  */}
          <div className="videos__container">
            {otherVideos.map((video) => (
              <div key={video.id.videoId} className="video">
                <div className="video__thumbnail">
                  <Link to={`/ViewVideo/${video.id.videoId}`}>
                    <img
                      src={video.snippet.thumbnails.medium.url}
                      alt="Video Thumbnail"
                    />
                  </Link>
                  <div className="video__details">
                    <div className="title">
                      <h3>{video.snippet.title}</h3>
                      <a href="">{video.channelTitle}</a>
                      <span>10M Views • {video.publishTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-3/4 pr-4 h-96">
          <div className="mb-4 bg-[#F9F9F9]">
            <iframe
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${currentVideoId}`}
              title="YouTube Video Player"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
            <div>
              {otherVideos.length > 0 && (
                <div className="w-[100%]">
                  {/* <p className="text-sm font-semibold">
                    Title: {otherVideos[0].snippet.title}
                  </p> */}
                  <div className="card w-full bg-base-100 shadow-xl">
                    <div className="card-body">
                      <h2 className="card-title">Title:</h2>
                      <p>{otherVideos[0].snippet.title}</p>
                      <h2 className="card-title">Descriptions:</h2>
                      <p>{otherVideos[0].snippet.description}</p>
                      <div className=" flex flex-col justify-start items-center ">
                        <p className="text-gray-600 font-serif font-medium">
                          Liked?
                        </p>
                        <div className="flex ml-4 mt-2">
                          <button className="mr-6" onClick={handleLike}>
                            <img src={reactImage.img2} width={25} />
                          </button>
                          <button onClick={handledisLike}>
                            <img
                              src={DisreactImage.img2}
                              className="transform rotate-180"
                              width={25}
                            />
                          </button>
                        </div>
                      </div>
                      <div className="card-actions justify-end">
                        <button className="btn btn-error text-white font-bold">
                          Subscribe
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <br />
            <br />
            <br />
            <br />
            {/* comments section */}
            <div className="card w-full ">
              <div className="card-body">
                <h2 className="card-title">Comments</h2>
                <input
                  type="text"
                  placeholder="Add comment.."
                  className="input input-bordered input-lg w-full "
                  value={commnets}
                  onChange={(e) => setCommnets(e.target.value)}
                />
                <div className="card-actions justify-end">
                  <button
                    className="btn btn-primary text-white w-42"
                    onClick={() => {
                      setComments([
                        ...comments,
                        {
                          author: "John Doe",
                          text: commnets,
                        },
                      ]);
                      setCommnets("");
                    }}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>

            {/* div commnents added */}
            {comments.map((comment, index) => (
              <div
                key={index}
                className=" mx-auto border px-6 py-4 rounded-lg w-full"
              >
                <div className="flex items-center mb-6">
                  <div>
                    <div className="text-lg font-medium text-gray-800">
                      {comment.author}
                    </div>
                  </div>
                </div>
                <p className="text-lg leading-relaxed mb-6">{comment.text}</p>
                <div className="flex justify-between items-center">
                  <div>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-700 mr-4"
                    >
                      <i className="far fa-thumbs-up"></i> Like
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-700">
                      <i className="far fa-comment-alt"></i> Reply
                    </a>
                  </div>
                  <div className="flex items-center">
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-700 mr-4"
                    >
                      <i className="far fa-flag"></i> Report
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-700">
                      <i className="far fa-share-square"></i> Share
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* descriptions */}
        </div>
      </div>

      {/* ------------------- */}
    </>
  );
}

export default ViewVideo;
