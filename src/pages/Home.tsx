import { About, Contact, Hero, Skills } from "../components"
import ServicesList from "../components/ServicesList"

function Home() {
   return (
      <section className="min-h-screen">
         <Hero />
         <div className="mt-20 flex max-md:flex-col items-start justify-start w-full gap-3 relative border-b border-(--border) py-10">
            <About className=" w-[35vw] sticky top-1/6 left-0" />
            <Skills className=" max-w-[60vw]" />
         </div>
         <div className="mt-20 flex max-md:flex-col items-start justify-start w-full gap-3 relative border-b border-(--border) py-10">
            <ServicesList className='max-w-[30vw] w-[30vw] max-h-full ' />
            <Contact className="w-[70vw] sticky right-0 top-0" />
         </div>
      </section>
   )
}

export default Home