import { Navbarfirst } from "./Navbarfirst";
import liongateimg from "./images/LionsgatePlay-426X2946_V1.jpg";
import discoveryimg from "./images/426x294_Discovery.jpg";
import erosnow from "./images/Erosnow-426X2948_V1.jpg";
import hoicimg from "./images/hoichoi-426X2946_V1.jpg";
import docubay from "./images/Docubay-426X2947_V1.jpg";
import shortstv from "./images/ShortsTV-426X2944_V1.jpg";
import mubi from "./images/Mubi-426X2946_V1.jpg";
import manorama from "./images/426x294_MANORAMAMAX.jpg";
import hayu from "./images/Hayu_logo_for_MLP_Grid.jpg";
//import bigimg from "./images/bigimg.jpg";
import bigimg from "./images/bigimg.jpg";
import prime from "./images/PRIME_multi-benefit_MAGNET_2X._SX1440_CR575,0,865,675_QL80_AC_FP_.jpg";
import mpltemplate from "./images/MLP_Template_Image_Left._SX1440_CR0,0,865,675_QL80_AC_FP_.jpg";
import inkids from "./images/IN-kids-30Jan._SX1440_CR575,0,865,675_QL80_AC_FP_.jpg";
import { Link } from "react-router-dom";
export const Firsthome = () => {
  return (
    <div>
      <Navbarfirst />
      <div>
        <div className="firsthome">
          <div>
            <h1 className="firsth1tag">Welcome To Prime Video</h1>
            <p className="firstptag">
              Join Prime to watch the latest movies, TV shows and award-winning
              Amazon Originals
            </p>
            {/* <Link to="/login" target='_blank' style={{textDecorationLine:'none', color: "white", fontSize: "20px" }}>Sign In</Link>         */}
            
            <button              
              style={{
                marginLeft: "65px",
                fontSize: "18px",
                color: "white",
                background: "#0f79af",
                textAlign: "center",
                width: "300px",
                height: "50px",
                borderRadius: "5px",
                border: "0px",
                
              }}
            >
              <Link to="/login" target='_blank' style={{
                textDecorationLine:'none', color: "white", fontSize: "20px"
              }}>
                Start Trials
              </Link>
            </button>
            <p style={{ marginLeft: "85px" }}>
              With select credit or debit cards
            </p>
          </div>
          <div>
            <img src={bigimg}></img>
          </div>
        </div>
      </div>

      <div className="seconddiv">
        <div>
          <p className="yourfavouritediv">
            Your favorite channels all in one place
          </p>
          <p className="firstptag">
            With Prime Video Channels, find shows and movies from your favorite
            channels all in one place. Enjoy with an add-on subscription to
            Channels of your choice
          </p>
        </div>
        <div className="ninegrid">
          <div>
            <img src={liongateimg}></img>
          </div>
          <div>
            {" "}
            <img src={discoveryimg}></img>
          </div>
          <div>
            <img src={erosnow} alt="" />
          </div>
          <div>
            <img src={hoicimg}></img>
          </div>
          <div>
            <img src={docubay}></img>
          </div>
          <div>
            <img src={shortstv}></img>
          </div>
          <div>
            <img src={mubi}></img>
          </div>
          <div>
            <img src={manorama} alt="" />
          </div>
          <div>
            <img src={hayu} alt="" />
          </div>
        </div>
      </div>
      <div className="thirddiv">
        <div>
          <h1 className="firsth1tag">One membership, many benefits</h1>
          <p className="firstptag">
            Your Prime membership now also includes ad-free music along with
            unlimited free, fast delivery on eligible items, exclusive access to
            deals & more.
          </p>
          <button
            style={{
              marginLeft: "65px",
              fontSize: "18px",
              color: "white",
              background: "#0f79af",
              textAlign: "center",
              width: "300px",
              height: "50px",
              borderRadius: "5px",
              border: "0px",
            }}
          >
            <Link to="/login" target='_blank' style={{
                textDecorationLine:'none', color: "white", fontSize: "20px"
              }}>
              Get Started
            </Link>
          </button>
        </div>
        <div>
          <img src={prime}></img>
        </div>
      </div>
      <div>
        <div></div>
        <div className="fourthdiv">
          <div>
            <img src={mpltemplate}></img>
          </div>
          <div>
            <h1 className="firsth1tag">Even better with Fire TV Stick</h1>
            <p className="firstptag">
              The biggest movies and TV shows are always better on a big <br />
              screen. Simply plug in your Amazon Fire TV Stick and stream on
              <br /> any HDTV. Press the voice button on the remote and say the
              name
              <br /> of the title you want to watch to find it in seconds.
            </p>
            <button
              style={{
                marginLeft: "65px",
                fontSize: "18px",
                color: "white",
                background: "#0f79af",
                textAlign: "center",
                width: "300px",
                height: "50px",
                borderRadius: "5px",
                border: "0px",
              }}
            >
              <Link to="/login" target='_blank' style={{
                textDecorationLine:'none', color: "white", fontSize: "20px"
              }}>              
                Get Started
                </Link>
            </button>
          </div>
        </div>
      </div>

      <div className="fifthdiv">
        <div>
          <h1 className="firsth1tag">Family Friendly</h1>
          <p className="firstptag">
            With easy to use Parental Controls and a dedicated kids page, enjoy
            <br />
            secure, ad-free kids entertainment. Kids can enjoy popular TV <br />
            shows like Peppa Pig, Powerpuff Girls, and Chhota Bheem.
          </p>
          <button
            style={{
              marginLeft: "65px",
              fontSize: "18px",
              color: "white",
              background: "#0f79af",
              textAlign: "center",
              width: "300px",
              height: "50px",
              borderRadius: "5px",
              border: "0px",
            }}
          >
              <Link to="/login" target='_blank' style={{
                textDecorationLine:'none', color: "white", fontSize: "20px"
              }}>
              Get Started
              </Link>
          </button>
        </div>

        <div>
          <img src={inkids}></img>
        </div>
      </div>
      <div className="firsthomefooter">
        <div>
          <img
            src="https://m.media-amazon.com/images/G/01/digital/video/acquisition/web_footer_logo._CB462908456_.png"
            alt=""
          />
          <div>
            <span style={{ color: "#0f79af" }}>
              Terms and Privacy NoticeSend us feedbackHelp
            </span>
            <span style={{ color: "white" }}>
              © 1996-2022, Amazon.com, Inc. or its affiliates
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
