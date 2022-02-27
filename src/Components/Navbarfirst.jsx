import navbarimg from "./images/web_footer_logo._CB462908456_.png";

import { FaGlobe } from "react-icons/fa";

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
        <span
          style={{ color: "white", marginRight: "30px", lineHeight: "30px" }}
        >
          <FaGlobe
            style={{
              width: "22px",
              height: "22px",
              lineHeight: "40px",
            }}
          />
          <span
            style={{
              fontSize: "20px",
            }}
          >
            {" "}
            EN
          </span>
        </span>{" "}
        <span style={{ color: "white", fontSize: "20px" }}>Sign In</span>
      </div>
    </div>
  );
};
