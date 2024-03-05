const ChildrenSpan = (props) => {
  return (
    <>
      <span className="text-primary">{props.label}</span>
      <h3>{props.value}</h3>
    </>
  );
};

export default ChildrenSpan;
