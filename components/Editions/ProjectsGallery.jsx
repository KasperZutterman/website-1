import PropTypes from 'prop-types';
import Gallery from './Gallery';
import Project from './Project';

const Projects = ({ edition, projects }) => {
  const $projects = projects.map(p => <Project key={p.id} edition={edition} project={p} />);
  return <Gallery className="c-projects">{$projects}</Gallery>;
};

Projects.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape).isRequired
};

export default Projects;
