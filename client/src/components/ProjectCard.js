import React from 'react';

const ProjectCard = ({ project }) => (
  <div className="project-card">
    <h3>{project.title}</h3>
    <p>{project.description}</p>
    <p>Technologies: {project.technologies.join(', ')}</p>
    <a href={project.githubLink}>View on GitHub</a>
  </div>
);

export default ProjectCard;
