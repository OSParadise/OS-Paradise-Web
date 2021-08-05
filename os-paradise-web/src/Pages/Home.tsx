import welcomeBanner from "../Images/welcome-banner.png";

/**
 * Render component for the home page.
 */
function Home() {
  return (
    <div
      style={{
        maxWidth: "96%",
        margin: "auto",
        paddingTop: "40px",
        textAlign: "left",
      }}
    >
      <legend style={{ textAlign: "left", color: "#FFF" }}>
        Welcome to OS Paradise!{" "}
        <span role="img" aria-label="smiling face with hearts">
          🥰
        </span>
      </legend>
      <img src={welcomeBanner} alt="welcome banner" />
    </div>
  );
}

export default Home;
