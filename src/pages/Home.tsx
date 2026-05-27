import { About, Contact, Hero, Skills } from "../components"

function Home() {
   return (
      <section className="min-h-screen">
         <Hero />
         <div className="mt-20 flex max-md:flex-col items-start justify-start w-full gap-3">
            <About className="flex-1 max-md:flex-1 w-full" />
            <Contact className="flex-2 max-md:flex-1 w-full" />
         </div>
         <Skills className="w-full" />
      </section>
   )
}

export default Home