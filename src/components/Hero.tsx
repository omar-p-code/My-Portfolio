import { CTABtn } from "."
import { hero } from "../constants"



function Hero() {
   return (
      <section className="hero text-center py-20 px-5 flex flex-col items-center justify-center gap-4 h-[85vh] relative">
         <h1 className="text-4xl font-bold text-(--secondary)">{hero.title}</h1>
         <p className="text-xl text-(--text) mt-2">{hero.subtitle}</p>
         <CTABtn />
         <video autoPlay muted loop className="object-cover object-center w-full h-full absolute -z-10 top-0 left-0 opacity-25" src={hero.bgVideo || '/videos/bg-1.mp4'} />
      </section>
   )
}

export default Hero