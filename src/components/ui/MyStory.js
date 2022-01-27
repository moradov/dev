import React from "react";

const MyStory = () => {
  return (
    <div className="my-story">
      <div className="content-wrapper">
        <div className="left-content">
          <h2 className="title">My story</h2>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            ducimus voluptates, voluptatibus sint explicabo soluta. Iusto
            cupiditate est ipsum voluptas suscipit eius dignissimos libero dicta
            veniam placeat necessitatibus animi autem quas, accusamus eos!
          </p>
          <button className="main-btn">About me</button>
        </div>
        <div className="right-content">
          <img
            src="https://i.ibb.co/6JQ7KqK/photo-1520265292119-d7e443f4c975.jpg"
            alt="my strory"
          />
        </div>
      </div>
    </div>
  );
};

export default MyStory;
