// export default Bollywood;
// import ArticlesVertical from "../ArticlesVertical/ArticlesVertical";
import React, { useState } from "react";
import ScrollToTop from "react-scroll-to-top";
import ArticlesVertical2 from "../ArticlesVertical/ArticleVertical2";
import Photo from "../Images/Brahmastra.jpg";
// import { Link } from "react-router-dom";
// import CatCompo from "../../Utility/BollywoodCompo";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
// import { BollywoodData } from "../../Utility/BollywoodArticles";
import TopPosts2 from "../TopPosts/TopPosts2";
import "../TopPosts/TopPosts.css";

// const articles = require("../API_Data/BollywoodArticles.json");
const ads = require("../API_Data/BollywoodAds.json");

const Bollywood = () => {
  const navigate = useNavigate();
  const [adsData, setAdsData] = useState([]);

  useEffect(() => {
    setAdsData(ads);
  }, []);

  const handleNavigate = (id, item) => {
    console.log("Parameters", id, item);

    //Push
    navigate(`/Details/${id}`, {
      state: { Details: item },
      // replace: true,
    });
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/Bollywood")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  });

  return (
    <div className="Bollywood">
      <div className="vh-header">
        <h1 className="vh-heading">Latest Articles</h1>
        <hr className="vh-hr" />
      </div>
      {data.map((item) => {
        return (
          <div key={item.id} onClick={() => handleNavigate(item.id, item)}>
            <ArticlesVertical2
              photoUrl={item.photoUrl}
              photo={Photo}
              title={item.title}
              description={item.description}
              category={item.category}
              date={item.date}
            />
          </div>
        );
      })}
      <button className="load-more-btn">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2267/2267918.png"
          alt=""
        />
        Load More
      </button>
      {/* <ArticlesVertical ads={bollyWoodAds} /> */}
      <div className="ad-box2">
        <h2>Advertisement</h2> <br />
        {adsData.map((data) => {
          return (
            <iframe title={data.title} src={data.link} frameBorder="0"></iframe>
          );
        })}
      </div>
      <TopPosts2
        photo="https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg"
        title="RRR"
        category="Drama / Action"
        // articleLink={articleLink}
        date="28/03/2022"
      />
      <ScrollToTop className="scroll-arrow" color="black" smooth />
    </div>
  );
};

export default Bollywood;
