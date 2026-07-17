import { About, Contact, Hero, Skills } from "../components"
import ServicesList from "../components/ServicesList"

function Home() {
   return (
      <main className="min-h-screen">
         <Hero />
         <div className="mt-20 flex max-md:flex-col items-start justify-start w-full gap-3 relative border-b border-(--border) py-10">
            <About className=" w-[35vw] scale-90 max-md:w-dvw md:sticky top-0 left-0" />
            <Skills className=" max-w-[60vw] max-md:max-w-dvw" />
         </div>
         <div className="mt-20 flex max-md:flex-col items-start justify-start w-full gap-3 relative border-b border-(--border) py-10">
            <ServicesList className='max-w-[30vw] max-md:max-w-dvw max-md:w-dvw w-[30vw]' />
            <Contact className="w-[70vw] max-md:w-dvw sticky right-0 top-0" />
         </div>
      </main>
   )
}

export default Home