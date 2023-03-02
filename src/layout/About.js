import React from "react";
import "./about.css";
import Cards from "./Cards";
import AOS from 'aos'
import 'aos/dist/aos.css'
import skyclub from "../asset/svg/aboutsvg/skyclub.svg";
import skywallet from "../asset/svg/aboutsvg/skywallet.svg";
import currency from "../asset/svg/aboutsvg/currency.svg";
import offer from "../asset/svg/aboutsvg/offer.svg";
import nft from "../asset/svg/aboutsvg/nft.svg";
import doa from "../asset/svg/aboutsvg/doa.svg";
import work from "../asset/svg/aboutsvg/work.svg";
import bgcircle from "../asset/svg/aboutsvg/bgcircle.svg";
import Secure from "../asset/svg/aboutsvg/scure.svg";
import chat from "../asset/svg/aboutsvg/chat.svg";
import web from "../asset/svg/aboutsvg/web3.svg";

const About = () => {
  return (
    <div className="about_container">
      <div className="row">
      <div className="col-lg-6 col-sm-12 left_container " >
          <div className="p-lg-5 p-sm-1">
            <img className="mb-lg-5 mt-lg-5 w-25 " src={skywallet} alt="" />
            <h1 className="w-50  mb-4 mt-4 fw-bolder transition_right" data-aos="fade-right">
              YOUR EVERYDAY CRYPTO WALLET
            </h1>
            <div className="mt-lg-5 d-flex justify-content-end me-lg-4 " data-aos="zoom-in-left" data-aos-duration="1000">
              <Cards
                img={currency}
                title={"Use accores any app and currency"}
                color={"#D7AF09"}
              />
              <Cards
                img={web}
                title={"One place for all your web3 possession"}
                color={"#C9A409"}
              />
            </div>
            <div className=" d-flex justify-content-start ms-lg-4" data-aos="zoom-out-right" data-aos-duration="1000">
              <Cards img={Secure} title={"simple and secure"}  color={"#C9A409"} />
              <Cards img={work} title={"Works everywhere"}  color={"#D7AF09"} />
            </div>
            <div className="bg_circle">
              <img className="w-75" src={bgcircle} alt="" />
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12 right_contianer">
          <div className="p-lg-5 p-sm-1">
            <img className="mb-lg-5 mt-lg-4 w-25 " src={skyclub} alt="" />
            <h1 className="w-50  mb-4 mt-4 fw-bolder text-light" data-aos="fade-left" data-aos-delay="400">
              YOUR EVERYDAY CRYPTO WALLET
            </h1>
            <div className="mt-lg-5 d-flex justify-content-start ms-lg-4" data-aos="zoom-in-left" data-aos-duration="1000">
              <Cards img={chat} title={"Chat, play games, and host events"}   color={"#C9A409"} />
              <Cards img={doa} title={"Create your own DAO and Tokens in 1 click"}  color={"#D7AF09"} />
            </div>
            <div className=" d-flex justify-content-end me-lg-4" data-aos="zoom-out-right" data-aos-duration="1000">
              <Cards img={nft} title={"Create eco-friendly NFT artwork and tickets "}   color={"#D7AF09"}/>
              <Cards img={offer} title={"Offer exclusive content and NFT memberships"}   color={"#C9A409"}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
