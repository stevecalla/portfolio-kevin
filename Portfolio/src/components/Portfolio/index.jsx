import ProjectCard from '../ProjectCard';

function Portfolio() {
  

  return (
    

    <section>
        <div className='project-container'>

        
        
        <ProjectCard 
          title='Plates with Purpose'
          techStack='Handlebars, javascript'
          description='Plates With Purpose is an innovative platform that acts as a cross between a food bank and a takeout restaurant. '
          image='platesWithPurpose' 
          link='https://github.com/Kevins-Trove/PlatesWithPurpose/tree/main' />

        <ProjectCard 
          title='Wildside-Events'
          techStack='Javascript'
          description='The Wildside Events app shows event ideas in your area.'
          image='wildsideEvents' 
          link='https://github.com/Kevins-Trove/Wildside-Events' />
          
          <ProjectCard 
          title='Plates with Purpose'
          techStack='Handlebars, javascript'
          description='Plates With Purpose is an innovative platform that acts as a cross between a food bank and a takeout restaurant. '
          image='platesWithPurpose' 
          link='https://github.com/Kevins-Trove/PlatesWithPurpose/tree/main' />
          
       </div>
          
    </section>
  );
}

export default Portfolio;
