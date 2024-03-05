const Borders = (props) => {
  return (
    <>
      <div className="border border-primary mt-5 rounded p-1">
        {props.children}
      </div>
    </>
  );
};

export default Borders;
