import "../../styles/loading/Loading.scss";

const Loading = ({fadeOut}) => {
  return (
    <div className={`loading-container ${fadeOut ? "fade-out" : ""}`}>
      <img src="../../images/loading/loading 1.png" />
    </div>
  );
};

export default Loading;