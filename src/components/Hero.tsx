import { CTABtn } from "."
import { hero } from "../constants"



function Hero() {
   return (
      <section className="hero text-center py-20 border-b border-(--border) px-5 flex flex-col items-center justify-center gap-4 h-[85vh] relative">

         <div className=" object-contain absolute -z-10 bottom-0 right-0 max-md:left-6/12 max-md:-translate-x-6/12 opacity-30 overflow-hidden">
            <img src="/images/me-removedbg.png" className="image-cover w-full h-full" />
         </div>

         <h1 className="text-4xl font-bold text-(--secondary)">{hero.title}</h1>
         <p className="text-xl text-(--text) mt-2">{hero.subtitle}</p>
         <CTABtn />
         <video preload="auto" autoPlay muted playsInline loop className="object-cover object-center w-full h-full absolute -z-10 top-0 left-0 opacity-25" src={hero.bgVideo || '/videos/bg-1.mp4'} poster="/images/bg1-poster.png" />
      </section>
   )
}

export default Hero