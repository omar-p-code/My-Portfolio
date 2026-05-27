import { lazy } from "react"
import { projects } from "../constants";

const Project = lazy(() => import('../components/Project'));

function Projects() {
   return (
      <section id="projects" className="projects">
         <div className="intro py-10 px-5 mt-[15vh]">
            <h3 className="text-(--text) font-semibold text-3xl mb-5">Here is my work.</h3>

            <div className="projects-container grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5">
               {projects.map(project => (
                  <>
                     <Project project={project} />
                  </>
               ))}
            </div>
         </div>
      </section>
   )
}

export default Projects