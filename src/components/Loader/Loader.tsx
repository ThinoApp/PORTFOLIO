import "./Loader.scss";
const Loader = () => {
  return (
    <div className="Loader">
      <h1>
        {[..."THINO"].map((item, index) => (
          <span className={`item-${index}`}>{item}</span>
        ))}
      </h1>
      <div className="triple-dot">
        <div className="dot-item dot-1"></div>
        <div className="dot-item dot-2"></div>
        <div className="dot-item dot-3"></div>
      </div>
    </div>
  );
};
export default Loader;
