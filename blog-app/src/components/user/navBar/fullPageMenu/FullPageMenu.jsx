const FullPageMenu = ({menuOpen}) => {
  

  return (
    <>
      <div
        className={`fullPageMenu ${menuOpen ? "active" : ""}`}
        id="nav"
      >
        <div className="nav">
          hola
        </div>
      </div>
    </>
  );
};

export default FullPageMenu