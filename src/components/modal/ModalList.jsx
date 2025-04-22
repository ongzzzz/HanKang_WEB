import ModalItem from "./ModalItem";

const ModalList = ({items}) => {
  return (
    <>
      {items.map((item, index) => (
        <ModalItem 
          key={index}
          title={item.title}
          image={item.image}
          script={item.script}
        />
      ))}
    </>
  );
};

export default ModalList;