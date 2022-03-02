import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
const CategoriesList = ({ setCategoriesPosition }) => {
  const posRef = useRef(null);
  useEffect(
    () => setCategoriesPosition(posRef.current.offsetTop),
    // eslint-disable-next-line
    []
  );
  return (
    <div className="projects-categories">
      <div className="categorie" ref={posRef}>
        <div className="cat-image">
          <img
            src="https://i.ibb.co/qkt4tCx/609acf3b7a299c11d4b136c9-ui-ux-design-tools.jpg"
            alt=""
          />
          <div className="cat-name">
            <NavLink to="/design">Design </NavLink>
          </div>
          <div className="cat-desc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde dicta
            laborum doloremque accusantium dolore.
          </div>
        </div>
      </div>
      <div className="categorie">
        <div className="cat-image">
          <img
            src="https://i.ibb.co/99QrJyw/frontend-security-vulnerabilities-min.jpg"
            alt=""
          />
          <div className="cat-name">
            <NavLink to="/front">Front end</NavLink>
          </div>
          <div className="cat-desc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde dicta
            laborum doloremque accusantium dolore.
          </div>
        </div>
      </div>
      <div className="categorie">
        <div className="cat-image">
          <img src="https://i.ibb.co/H7MfbKk/how-to-start-a-blog.png" alt="" />
          <div className="cat-name">
            <NavLink to="/design">Blogs </NavLink>
          </div>
          <div className="cat-desc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde dicta
            laborum doloremque accusantium dolore.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesList;
