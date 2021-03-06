import "./DescTrailer.css";
import ReactStars from "react-rating-stars-component";
import Button from "react-bootstrap/Button";
const DescTrailer = (props) => {
  const movie = props.location.state.el;
  return (
    <div>
      <div className="Movie">
        <img src={movie.image} alt="Film image"></img>
        <div className="Description">
          <h2>{movie.name}</h2>
          <h4>{movie.type}</h4>
          <p>{movie.description}</p>
          <ReactStars count={movie.rating} size={24} color="#ffd700" />
          <Button onClick={() => props.history.goBack()}>Go Back</Button>
        </div>
      </div>
      <div className="trailer">
        <iframe
          width="560"
          height="315"
          src={movie.trailer}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <Button onClick={() => props.history.goBack()}>Go Back</Button>
      </div>
    </div>
  );
};

export default DescTrailer;
