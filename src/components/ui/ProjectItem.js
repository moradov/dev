import React from "react";

const ProjectItem = ({
  projectsData: {
    id,
    name,
    image_src,
    used_tools,
    descreption,
    creation_date,
    project_url,
  },
}) => {
  return (
    <div className="project">
      <div className="left-content">
        <h2 className="project-name">{name} </h2>
        <p className="project-date">{creation_date} </p>
        <p className="project-desc">{descreption} </p>
        <div className="used-tech">
          <p>used tools &nbsp;</p>
          <div className="tools">
            {used_tools.map((tool) => (
              <span className="tool" key={tool}>
                {tool}{" "}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div
        className="right-content"
        onClick={() => {
          window.open(project_url, "_blank");
        }}
      >
        <img src={image_src} alt="project" />
      </div>
    </div>
  );
};

export default ProjectItem;
