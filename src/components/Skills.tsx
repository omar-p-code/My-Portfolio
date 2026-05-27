import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { Card } from '.';
import { skills } from '../constants';

gsap.registerPlugin(ScrollTrigger);

function Skills({ className }: { className?: string }) {
   const sectionRef = useRef<HTMLElement>(null);
   const row1Ref = useRef<HTMLDivElement>(null); // Frontend
   const row2Ref = useRef<HTMLDivElement>(null); // Backend
   const row3Ref = useRef<HTMLDivElement>(null); // Tools

   useGSAP(
      () => {
         if (!sectionRef.current || !row1Ref.current || !row2Ref.current || !row3Ref.current) return;

         const section = sectionRef.current;
         const row1 = row1Ref.current;
         const row2 = row2Ref.current;
         const row3 = row3Ref.current;

         const distance1 = row1.scrollWidth - section.offsetWidth + 50;
         const distance2 = row2.scrollWidth - section.offsetWidth + 50;
         const distance3 = row3.scrollWidth - section.offsetWidth + 50;

         const tl = gsap.timeline({
            scrollTrigger: {
               trigger: section,
               start: "top top",
               end: () => `+=${Math.max(distance1, distance2, distance3)}`,
               scrub: true,
               pin: true,
               pinSpacing: true,
               invalidateOnRefresh: true,
               anticipatePin: 1,
               fastScrollEnd: true,
            },
         });

         gsap.set([row1, row2, row3], { willChange: "transform" });


         tl.to(row1, {
            x: () => -distance1,
            ease: "none",
         }, 0);


         tl.fromTo(row2,
            { x: () => -distance2 },
            { x: 0, ease: "none", }, 0);


         tl.to(row3, {
            x: () => -distance3,
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
         className={`scroll-container ${className || ''} flex flex-col items-center justify-center w-full gap-6 py-20 border-t border-(--border) p-10`}
      >
         <h2 className="text-3xl font-bold text-(--secondary) mb-6">My Skills</h2>

         <div className="skills min-w-screen p-4 w-full overflow-hidden flex flex-col gap-6">

            <div ref={row1Ref} className="min-w-screen flex flex-nowrap gap-4 transform-gpu">
               {skills.frontend.map(skill => (
                  <Card key={skill.name + Math.random() * 100} name={skill.name} img={skill.icon} />
               ))}
            </div>


            <div ref={row2Ref} className="min-w-screen flex flex-nowrap gap-4 transform-gpu">
               {skills.backend.map(skill => (
                  <Card key={skill.name + Math.random() * 100} name={skill.name} img={skill.icon} />
               ))}
            </div>


            <div ref={row3Ref} className="min-w-screen flex flex-nowrap gap-4 transform-gpu">
               {skills.tools.map(skill => (
                  <Card key={skill.name + Math.random() * 100} name={skill.name} img={skill.icon} />
               ))}
            </div>
         </div>
      </section>
   );
}

export default Skills;