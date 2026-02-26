import { About, Contact, Hero } from "../components"

function Home() {
   return (
      <section className="min-h-screen">

         <div className=" object-contain fixed -z-10 bottom-0 right-0 max-md:left-6/12 max-md:-translate-x-6/12 opacity-30 overflow-hidden">
            <img src="/images/me-removedbg.png" className="image-cover w-full h-full" />
         </div>

         <Hero />
         <div className="mt-20 flex max-md:flex-col items-start justify-start w-full gap-3">
            <About className="flex-1 max-md:flex-1 w-full" />
            <Contact className="flex-2 max-md:flex-1 w-full" />
         </div>

      </section>
   )
}

export default Home