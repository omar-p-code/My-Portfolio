import { useEffect, useState } from "react";
import { images } from "../constants";

export default function Preloader() {
   const [progress, setProgress] = useState(0);

   useEffect(() => {
      let interval;

      // Progress animation
      interval = setInterval(() => {
         setProgress((prev) => {
            if (prev >= 95) return prev;
            return prev + Math.random() * 5;
         });
      }, 100);

      // Auto complete after 2 seconds
      const timeout = setTimeout(() => {
         setProgress(100);
         setTimeout(() => clearInterval(interval), 300);
      }, 2000);

      return () => {
         clearInterval(interval);
         clearTimeout(timeout);
      };
   }, []);

   return (
      <div className="preloader">
         {/* Background overlay */}
         <div className="preloader__overlay" />

         {/* Main container */}
         <div className="preloader__container overflow-hidden">
            <img src='/images/me2-removedbg.png' className="image-cover absolute left-0 top-0 opacity-20" />
            <div className="preloader__logo">
               <svg viewBox="0 0 100 100" className="preloader__icon">
                  <circle
                     cx="50"
                     cy="50"
                     r="40"
                     fill="none"
                     strokeWidth="6"
                     className="preloader__circle"
                     strokeDasharray="251.2"
                     strokeDashoffset="251.2"
                  >
                     <animate
                        attributeName="stroke-dashoffset"
                        dur="1.4s"
                        values="251.2;50.26548;251.2"
                        repeatCount="indefinite"
                     />
                  </circle>
               </svg>
            </div>

            {/* Progress Bar */}
            <div className="preloader__progress">
               <div
                  className="preloader__progress-fill"
                  style={{ width: `${progress}%` }}
               />
            </div>

            {/* Percentage */}
            <div className="preloader__percentage">
               {Math.round(progress)}%
            </div>

            {/* Text */}
            <p className="preloader__text">
               Loading...
            </p>
         </div>
      </div>
   );
}