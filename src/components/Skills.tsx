import { skills } from '../constants'

function Skills({ className }: { className?: string }) {
   return (
      <section className={`${className || ''} flex flex-col items-center justify-center w-full gap-6 py-20 border-t border-(--border) px-10`}>
         <h2 className="text-3xl font-bold text-(--secondary) mb-6">My Skills</h2>
         <div className="flex flex-row flex-wrap gap-6 max-md:gap-5 w-full">
            <div className='flex gap-3 h-full max-md:pb-15 border-(--border) flex-1 justify-between'>
               <h3 className='font-bold flex-1'>Frontend:</h3>
               <ul className="list-disc list-inside flex-1 flex flex-col gap-3">
                  {skills.frontend.map((skill) => (
                     <li key={skill.name} className="flex items-center gap-2 relative group hover:text-(--primary)/70 transition-all">
                        <div className="w-11 h-11 rounded-full bg-(--secondary)/50 flex items-center justify-center group-hover:bg-(--primary)/30 transition-transform">
                           <img src={skill.icon} alt={`${skill.name}`} className="w-10 h-10 group-hover:scale-110 transition-transform" />
                        </div>
                        {skill.name}
                     </li>
                  ))}
               </ul>
            </div>
            <div className='flex gap-3 h-fullmax-md:pb-15 border-(--border) flex-1 justify-between'>
               <h3 className='font-bold flex-1'>Backend:</h3>
               <ul className="list-disc list-inside flex-1 flex flex-col gap-3">
                  {skills.backend.map((skill) => (
                     <li key={skill.name} className="flex items-center gap-2 relative group hover:text-(--primary)/70 transition-all">
                        <div className="w-11 h-11 rounded-full bg-(--secondary)/50 flex items-center justify-center group-hover:bg-(--primary)/30">
                           <img src={skill.icon} alt={`${skill.name}`} className="w-10 h-10 group-hover:scale-110 transition-transform" />
                        </div>
                        {skill.name}
                     </li>
                  ))}
               </ul>
            </div>

            <div className='flex gap-3 h-full border-(--border) flex-1 justify-between'>
               <h3 className='font-bold flex-1'>Tools & Platforms:</h3>
               <ul className="list-disc list-inside flex-1 flex flex-col gap-3">
                  {skills.tools.map((skill) => (
                     <li key={skill.name} className="flex items-center gap-2 relative group hover:text-(--primary)/70 transition-all">
                        <div className="w-11 h-11 rounded-full bg-(--secondary)/50 flex items-center justify-center group-hover:bg-(--primary)/30">
                           <img src={skill.icon} alt={`${skill.name}`} className="w-10 h-10 group-hover:scale-110 transition-transform" />
                        </div>
                        {skill.name}
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </section>
   )
}

export default Skills