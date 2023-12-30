import "./UserComment.scss";

export default function UserComments({ video, formatTimeStamp }) {
  return (
    <ul className="comment-section__comments">
      {video.comments.map((comment) => (
        <li className="comment-section__list" key={comment.id}>
          <div className="comment-section__avatar"></div>
          <div className="comment-section__content">
            <h4 className="comment-section__item">{comment.name}</h4>
            <p className="comment-section__item comment-section__item--time">
              {formatTimeStamp(comment.timestamp)}
            </p>
            <p className="comment-section__item comment-section__item--cmt">
              {comment.comment}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
