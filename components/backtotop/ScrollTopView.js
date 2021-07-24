const ScrollTopView = (props) => {
  const { onScroll, onVisbile, visible } = props;

  console.log(visible);
  if (typeof window === "object") window.addEventListener("scroll", onVisbile);

  return (
    <>
      <div
        style={{
          position: "fixed",
          bottom: 30,
          right: 30,
        }}
      >
        <button
          className="btn btn-primary btn-small"
          onClick={onScroll}
          style={{
            display: visible ? "inline-block" : "none",
            borderRadius: 5,
          }}
        >
          ScrollTop
        </button>
      </div>
      <h1
        style={{
          position: "fixed",
          bottom: 25,
          left: "40%",
          display: visible ? "inline-block" : "none",
        }}
      >
        End Scroll
      </h1>
    </>
  );
};

export default ScrollTopView;
