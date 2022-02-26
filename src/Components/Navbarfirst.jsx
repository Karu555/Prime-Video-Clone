import navbarimg from "./images/web_footer_logo._CB462908456_.png";
import globeimg from "./images/globe.png";
export const Navbarfirst = () => {
  return (
    <div className="navbardiv">
      <div className="leftnavbardiv">
        <img src={navbarimg} />
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: "20px",
          boxSizing: "border-box",
        }}
      >
        <span className="globediv">
          <img src={globeimg}></img>
        </span>
        <span style={{ color: "white", marginRight: "30px" }}>EN</span>{" "}
        <span style={{ color: "white" }}>Sign In</span>
      </div>
    </div>
  );
};
