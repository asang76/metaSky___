import React from "react";
import "./about.css";
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
        <div className="col-lg-6 col-sm-12 left_container">
          <div className="sub_container">
            <img className="left_logo " src={skywallet} alt="" />
            <h1 className="left_heading">YOUR EVERYDAY CRYPTO WALLET</h1>
            <div className="cards_align_right d-flex justify-content-end">
            <div className="about_cards" >
                <img src={currency} className="w-25 m-2" alt="" />
                <div className="card-body">
                  <p className="card-text w-75">
                  Use accores any app and currency
                  </p>
                </div>
              </div>
              <div className="about_cards">
                <img src={web} className="w-25 m-2" alt="" />
                <div className="card-body">
                  <p className="card-text w-75">
                  One place for all your web3 possession
                  </p>
                </div>
              </div>
            </div>
            <div className="cards_align_left">
            <div className="about_cards" >
                <img src={Secure} className="w-25 m-2" alt="" />
                <div className="card-body">
                  <p className="card-text w-75">
                  simple and secure
                  </p>
                </div>
              </div>
              <div className="about_cards " >
                <img src={work} className="w-25 m-2" alt="" />
                <div className="card-body">
                  <p className="card-text w-75">
                  Works everywhere
                  </p>
                </div>
              </div>
            </div>
            <div className="bg_circle">
              <img className="w-75" src={bgcircle} alt="" />
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12 right_contianer">
          <div className="sub_container ">
            <img className="first_container_logo" src={skyclub} alt="" />
            <h1 className="w-50 mb-4 mt-4 fw-bolder text-light">
              YOUR EVERYDAY CRYPTO WALLET
            </h1>
            <div className="mt-5 d-flex justify-content-start cards_align">
              <div className="about_cards " >
                <img src={chat} className="w-25 m-2" alt="" />
                <div className="card-body">
                  <p className="card-text w-75">
                  Chat, play games, and host events
                  </p>
                </div>
              </div>

              <div className="about_cards " >
                <img src={doa} className="w-25 m-2" alt="" />
                <div className="card-body">
                  <p className="card-text w-75">
                  Create your own DAO and Tokens in 1 click
                  </p>
                </div>
              </div>
            </div>

            <div className=" d-flex justify-content-center cards_align">
            <div className="about_cards ">
                <img src={nft} className="w-25 m-2" alt="" />
                <div className="card-body">
                  <p className="card-text w-75">
                  Create eco-friendly NFT artwork and tickets 
                  </p>
                </div>
              </div>
              
              <div className="about_cards " >
                <img src={offer} className="w-25 m-2" alt="" />
                <div className="card-body">
                  <p className="card-text w-75">
                  Offer exclusive content and NFT memberships
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
