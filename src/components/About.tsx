import { about, images } from "../constants"

function About({ className }: { className?: string }) {
   return (
      <section className={`info text-(--text) p-5 flex flex-col items-center justify-center md:border-e border-(--border) hover:border-(--secondary) md:rounded-e-md ${className || ''}`}>
         <div className="icon-large relative">
            <img src={images.icon.src} alt={images.icon.name} className='image-cover z-0 absolute' />
            <img src={images.me2.src} alt={images.me2.name} className='image-cover absolute z-1 bottom-0 left-0' />
         </div>

         <div className="details flex flex-col justify-center items-center">
            <h2 className="text-lg font-semibold mt-3 capitalize">{about.name} - {about.role}</h2>
            <p className="mt-3 text-sm opacity-70 max-w-md mx-auto">{about.subtitle}</p>
         </div>

         <div className="bio mt-8 text-sm max-w-md mx-auto border-y-3 rounded-md border-(--border) hover:border-(--secondary) transition-colors p-4">
            <h3 className="font-semibold text-lg mb-3">Bio</h3>
            <p className="wrap-break-word opacity-70">{about.bio}</p>
         </div>
      </section>
   )
}

export default About