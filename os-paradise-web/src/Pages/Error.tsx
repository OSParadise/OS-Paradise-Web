/**
 * Component to display upon routing error.
 */
function Error() {
  return (
    <div style={{ maxWidth: "86%", margin: "auto", paddingTop: "40px" }}>
      <legend style={{ textAlign: "left" }}>
        Oops! Page not found!{" "}
        <span role="img" aria-label="crying face">
          😢
        </span>
      </legend>
    </div>
  );
}

export default Error;
