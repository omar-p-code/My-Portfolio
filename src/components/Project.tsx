import type { Project } from "../constants"


function project(project: Project) {
   const { title, cover, techs, status } = project

   return (
      <div className="
      project flex flex-col justify-between items-center gap-5 flex-1
      relative overflow-hidden 
      rounded-md min-h-80 min-w-70 max-sm:min-w-40 border
      transition-all duration-300  
      hover:-translate-y-2 hover:border-(--secondary) hover:scale-95
      active:-translate-y-2 active:border-(--secondary) active:scale-95 uppercase">
         <div className="status absolute font-bold top-0 left-1 z-20 text-(--secondary)/70">
            {status.toUpperCase()}
         </div>

         <img src={cover} alt={title} className="w-full h-full absolute object-cover opacity-15 object-center -z-30" />
         <div className="overlay hover-show z-30 bg-(--card)/30 absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 text-lg font-bold text-(--secondary) transition-opacity duration-400 cursor-pointer flex-col gap-6 p-5">
            <div className="details p-5 rounded-md border hover:border-(--primary) hover:text-(--primary) active:border-(--primary) active:text-(--primary) transition-colors duration-300 w-full text-center">
               details
            </div>
            <div className="demo p-5 rounded-md border hover:border-(--primary) hover:text-(--primary) active:border-(--primary) active:text-(--primary) transition-colors duration-300 w-full text-center">
               demo
            </div>
            <div className="title font-bold text-2xl max-md:text-md text-center">{title}</div>
         </div>

         <div className="techs absolute top-1 right-1 h-full flex justify-center">
            <div className="techs-container flex-col flex flex-wrap h-full justify-start items-center gap-1 p-2" dir="rtl">
               {techs?.map(tech => (
                  <div className="tech flex text-center justify-center items-center gap-1 flex-col">
                     <div className="w-8 h-8 rounded-full bg-(--card) flex justify-center items-center">
                        <img src={tech.icon} alt={tech.name} className="object-contain w-full" />
                     </div>
                     {/* <h3 className="text-xs">{tech.name}</h3> */}
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default project