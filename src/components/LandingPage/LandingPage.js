import React from "react";
import { Card } from "antd";
import "./LandingPage.css";
import Scroll from "../Scroll/Scroll";
export const LandingPage = ({ name, name1 }) => {
  return (
    <div className="tc">
      <div class="wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#4A00E0"
            fill-opacity="1"
            d="M0,288L60,256C120,224,240,160,360,133.3C480,107,600,117,720,138.7C840,160,960,192,1080,197.3C1200,203,1320,181,1380,170.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
          <defs>
            <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#8E2DE2" />
              <stop offset="50%" stop-color="#4A00E0" />
            </linearGradient>
          </defs>
          <rect x="0" y="0" width="600" height="1200" fill="url(#linear)" />
        </svg>
      </div>
      <div class="wave1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f3f4f5"
            fill-opacity="1"
            d="M0,288L60,256C120,224,240,160,360,133.3C480,107,600,117,720,138.7C840,160,960,192,1080,197.3C1200,203,1320,181,1380,170.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div class="wave2">
        <svg xml ns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="white"
            fill-opacity="1"
            d="M0,288L60,256C120,224,240,160,360,133.3C480,107,600,117,720,138.7C840,160,960,192,1080,197.3C1200,203,1320,181,1380,170.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="tc br3 pa3 ma2 dib bw2">
        <Scroll>
          <Card
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "30px",
              backgroundColor: "#F5F5F5",
            }}
          >
            Select an account
          </Card>
          <Card className="tl">
            <img
              alt="persons"
              src={
                "https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1001.jpeg"
              }
              style={{ width: 35, height: 35, borderRadius: 400 / 2 }}
            />{" "}
            &nbsp; &nbsp;{" "}
            <a href="https://ritika-soni.github.io/PanorbitAssignment1/">
              {" "}
              {name}{" "}
            </a>
          </Card>
          <Card className="tl">
            <img
              alt="persons"
              src={
                "https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1002.jpeg"
              }
              style={{ width: 35, height: 35, borderRadius: 400 / 2 }}
            />{" "}
            &nbsp; &nbsp; {name1}
          </Card>
          <Card className="tl">
            <img
              alt="persons"
              src={
                "https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1004.jpeg"
              }
              style={{ width: 35, height: 35, borderRadius: 400 / 2 }}
            />{" "}
            &nbsp; &nbsp; {name}
          </Card>
          <Card className="tl">
            <img
              alt="persons"
              src={
                "https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1005.jpeg"
              }
              style={{ width: 35, height: 35, borderRadius: 400 / 2 }}
            />
            &nbsp; &nbsp; {name}
          </Card>
          <Card className="tl">
            <img
              alt="persons"
              src={
                "https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1006.jpeg"
              }
              style={{ width: 35, height: 35, borderRadius: 400 / 2 }}
            />{" "}
            &nbsp; &nbsp; {name}
          </Card>
          <Card className="tl">
            <img
              alt="persons"
              src={
                "https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1007.jpeg"
              }
              style={{ width: 35, height: 35, borderRadius: 400 / 2 }}
            />{" "}
            &nbsp; &nbsp; {name}
          </Card>
          <Card className="tl">
            <img
              alt="persons"
              src={
                "https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1008.jpeg"
              }
              style={{ width: 35, height: 35, borderRadius: 400 / 2 }}
            />{" "}
            &nbsp; &nbsp; {name}
          </Card>
          <Card className="tl">
            <img
              alt="persons"
              src={
                "https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1009.jpeg"
              }
              style={{ width: 35, height: 35, borderRadius: 400 / 2 }}
            />{" "}
            &nbsp; &nbsp; {name}
          </Card>
        </Scroll>
      </div>
    </div>
  );
};
