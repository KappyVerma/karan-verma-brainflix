import { Link } from "react-router-dom";
import "./VideoSideBar.scss";

function VideoSideBar({ sideBarVideo, bannerVideo, url }) {
  const sortedVideo = sideBarVideo.sort((a, b) => b.timestamp - a.timestamp);
  return (
    <div className="video-sidebar">
      <h3 className="video-sidebar__header">NEXT VIDEOS</h3>
      <ul className="video-sidebar__list">
        {sortedVideo
          .filter((vid) => vid.id !== bannerVideo.id)
          .map((vid) => (
            <li className="video-sidebar__item" key={vid.id}>
              <Link
                to={`/video/${vid.id}`}
                className="video-sidebar__container"
              >
                <div className="video-sidebar__poster">
                  <img
                    src={`${url}/${vid.image}`}
                    alt={vid.image}
                    className="video-sidebar__link"
                  />
                </div>
                <div className="video-sidebar__detail">
                  <h4 className="video-sidebar__title">{vid.title}</h4>
                  <p className="video-sidebar__text">{vid.channel}</p>
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
export default VideoSideBar;
