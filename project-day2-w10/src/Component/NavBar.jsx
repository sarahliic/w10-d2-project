import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function NavBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const apiKey = `AIzaSyBNyG3718AS3slTzg_DJ358cYJxVTqytGU`;
  const search_api = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchTerm}&key=${apiKey}`;

  // menue
  const [showSidebar, setShowSidebar] = useState(false);

  const handleMenuClick = () => {
    setShowSidebar(!showSidebar);
  };
  // handle with search
  const handleSearch = () => {
    axios
      .get(search_api)
      .then((res) => {
        console.log(res.data.items);
        setSearchResults(res.data.items);
      })
      .catch((err) => console.log("Error: " + err));
  };

  // handerl submit
  const handleSubmint = (e) => {
    e.preventdefault();
    handleSearch();
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <div className="header">
        <div className="header__left">
          <i id="menu" className="material-icons" onClick={handleMenuClick}>
            menu
          </i>
          <img
            src="https://www.youtube.com/about/static/svgs/icons/brand-resources/YouTube-logo-full_color_light.svg?cache=72a5d9c"
            alt=""
          />
        </div>

        <div className="header__search">
          <form onClick={handleSubmint}>
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleInputChange}
            />

            <button className="material-icons" type="button">
              search
            </button>
          </form>
        </div>

        <div className="header__icons">
          <i className="material-icons display-this">account_circle</i>
        </div>
      </div>

      {/* Display resluts */}

      <div className="videos">
        <h1>Recommended</h1>

        <div className="videos__container">
          {/* <!-- Single Video starts --> */}
          {searchResults.map((video) => (
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
  );
}

export default NavBar;
