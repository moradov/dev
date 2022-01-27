import React, { useEffect, useState } from "react";
import ProjectItem from "../ui/ProjectItem";
const ProjectsList = ({ projectsList, type }) => {
  const [projectsListData, setProjectsListData] = useState([]);
  useEffect(() => {
    if (projectsList.length > 0 && type) {
      const projectsListDataFilter = projectsList.filter(
        (i) => i.type === type
      );
      setProjectsListData([...projectsListDataFilter]);
    }
    // eslint-disable-next-line
  }, [projectsList]);
  return (
    <div className="content-wrapper">
      <div className="projects-list">
        {projectsListData.length > 0 &&
          projectsListData.map((project) => (
            <ProjectItem projectsData={project} key={project.id} />
          ))}
      </div>
    </div>
  );
};

export default ProjectsList;
