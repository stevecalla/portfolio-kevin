import { Link } from 'react-router-dom';
import { toProperCase } from '../../utils/helpers';
import PropTypes from 'prop-types';
import * as projects from '../../assets/images/projects';

const ProjectCard = ({ title, techStack,  description , image, link  }) => {

    const cardStyle = {
        backgroundImage: `url(${projects[image]})`, // Use the imported image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden',
        position: 'relative'
        
        
      };

    const overlayStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    };
  
    const cardTitle = {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
       
        
        width: '100%',
        color: 'white',
        
      };

      const cardLink = {
        width: '100%',
        color: 'cyan',
        
      };
    return (
    <div className="project-card" style={cardStyle}>
        
        
      <div style={overlayStyle}>
      
      <div style={cardTitle}>
        <h2>{toProperCase(title)}</h2>
        <p>{toProperCase(techStack)}</p>
        <p>{description}</p>
        <p  style={cardLink}><Link to={`${link}`}>See Repositiry</Link></p>
      </div>
        
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default ProjectCard;
