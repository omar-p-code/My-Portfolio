import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { Card } from '.';
import { services } from '../constants';

gsap.registerPlugin(ScrollTrigger);

export default function Services({ className }: { className?: string }) {
   const sectionRef = useRef<HTMLElement>(null);
   const columnRef = useRef<HTMLDivElement>(null); // Frontend

   useGSAP(
      () => {
         if (!sectionRef.current || !columnRef.current) return;
         const section = sectionRef.current;
         const column = columnRef.current;

         const distance = column.scrollHeight - section.clientHeight + 50;

         const tl = gsap.timeline({
            scrollTrigger: {
               trigger: section,
               start: "top top",
               end: () => `+=${-distance}`,
               scrub: true,
               pin: true,
               pinSpacing: true,
               invalidateOnRefresh: true,
               anticipatePin: 1,
               fastScrollEnd: true,
            },
         });

         gsap.set([column], { willChange: "transform" });


         tl.to(column, {
            y: () => distance,
            ease: "none",
         }, 0);


         return () => {
            tl.kill();
         };
      },
      []
   );

   return (
      <section
         ref={sectionRef}
         className={`scroll-container ${className || ''} h-full flex flex-col gap-6 m-auto items-center justify-center py-20`}
      >
         <h2 className="text-3xl font-bold text-(--secondary) mb-6">My Services</h2>
         <p className='text-sm text-(--text)/50 text-center'>
            I offer a range of services to help you achieve your goals.
         </p>


         <div className="services min-w-full min-h-full p-4 w-full overflow-hidden">
            <div ref={columnRef} className="flex gap-6 flex-col">
               {services.map((service) => (
                  <Card name={service.title} img={service.icon} />
               ))}
            </div>
         </div>
      </section>
   );
}
