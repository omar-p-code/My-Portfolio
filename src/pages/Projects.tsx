import { lazy } from "react"
import { projects } from "../constants";

const Project = lazy(() => import('../components/Project'));

function Projects() {
   return (
      <section id="projects" className="projects">
         <div className="intro py-10 px-5 mt-[15vh]">
            <h3 className="text-(--primary) font-semibold text-shadow-primary text-3xl mb-5">Here is my work.</h3>

            <div className="projects-container flex flex-wrap justify-center items-center gap-3">
               {projects.map(project => (
                  <>
                     <Project title={project.title} cover={project.cover} status='pinned' techs={project.techs} />
                     <Project title={project.title} cover={project.cover} status='pinned' techs={project.techs} />
                     <Project title={project.title} cover={project.cover} status='pinned' techs={project.techs} />
                     <Project title={project.title} cover={project.cover} status='pinned' techs={project.techs} />
                     <Project title={project.title} cover={project.cover} status='pinned' techs={project.techs} />
                     <Project title={project.title} cover={project.cover} status='pinned' techs={project.techs} />
                     <Project title={project.title} cover={project.cover} status='pinned' techs={project.techs} />
                  </>
               ))}
            </div>
         </div>
      </section>
   )
}

export default Projects