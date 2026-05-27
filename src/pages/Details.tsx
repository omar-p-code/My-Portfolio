import { useNavigate, useParams } from "react-router-dom"
import { projects, type Project } from "../constants"



function Details() {
   const { id } = useParams()
   const navigation = useNavigate()

   const { video, client, slider, demo, title, status, repo, techs, description }: Project = projects.find(project => {
      const formattedTitle = project.title.toLocaleLowerCase().replace(/\s/g, '-')
      return formattedTitle === id
   })!

   return (
      <section className="min-h-screen py-5">
         <h2 className="w-fit px-5 text-center text-(--text) text-shadow-(--text)/100 text-shadow-lg py-5 font-bold text-2xl border-s-0 border-2 border-(--secondary) hover:ps-10 transition-all duration-300 rounded-e-md cursor-default" onClick={() => navigation('/projects')}>Project Details</h2>

         {video && (
            <div className="videos flex gap-5 my-5 justify-center items-center">
               {video.map((vid, index: number) => (
                  <video key={index} controls className="w-fit rounded-md">
                     <source src={vid.src} type="video/mp4" />
                     Your browser does not support the video tag.
                  </video>
               ))}
            </div>
         )}

         <div className="table">
            <div className="row">
               <div className="text-lg mb-2 font-bold underline">Title</div>
               <div className="cell">{title}</div>
            </div>
            <div className="row">
               <div className="text-lg mb-2 font-bold underline">Description</div>
               <div className="cell">{description}</div>
            </div>
            <div className="row">
               <div className="text-lg mb-2 font-bold underline">Tech Stack</div>
               <div className="cell flex gap-3">{techs!.map((skill, index) => (
                  <div key={index + '-skill'} className='py-1 px-2 flex gap-1 justify-center items-center bg-(--primary)/20 rounded-lg'>
                     <div className="w-5 h-5">
                        <img src={skill.icon} className="w-full h-full" />
                     </div>
                     <div className="name">{skill.name}</div>
                  </div>
               ))}</div>
            </div>
            <div className="row">
               <div className="text-lg mb-2 font-bold underline">Status</div>
               <div className="cell">{status || 'delayed'}</div>
            </div>
            <div className="row">
               <div className="text-lg mb-2 font-bold underline">repo</div>
               <a href="https://github.com/user/repo" target="_blank" rel="noopener noreferrer" className="cell text-(--primary) hover:text-(--primary-hover) underline">
                  {repo || 'unfortunately, there is no link available'}
               </a>
            </div>
            <div className="row">
               <div className="text-lg mb-2 font-bold underline">demo</div>
               <a href={demo} target="_blank" rel="noopener noreferrer" className="cell text-(--primary) hover:text-(--primary-hover) underline">
                  {demo || 'unfortunately, there is no link available'}
               </a>
            </div>
            <div className="row">
               <div className="text-lg mb-2 font-bold underline">for</div>
               <div className="cell">{client || 'unknown'}</div>
            </div>
         </div>
      </section>
   )
}

export default Details