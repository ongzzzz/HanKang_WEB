import "../../styles/about-her/Items.scss";

const Items = ({className, year, title}) => {
  return (
    <div className={className}>
      <div className="year">{year}</div>
      <div className="title">{title}</div>
    </div>
  );
};

export default Items;