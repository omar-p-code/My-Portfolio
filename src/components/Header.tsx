import { Link } from 'react-router'
import { images, links } from '../constants';
import { generateKey } from '../utils';
import { useMediaQuery } from 'react-responsive'
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useLayoutEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { clsx } from 'clsx'


function Header() {
   const [open, setOpen] = useState(false);
   const [showHeader, setShowHeader] = useState(true);
   const isMobile = useMediaQuery({ maxWidth: 768 });


   useEffect(() => {
      ScrollTrigger.create({
         trigger: 'body',
         start: 'top top',
         end: 'bottom bottom',
         onUpdate: (self) => {
            if (self.direction === 1) {
               setShowHeader(false)
            } else if (self.direction === -1) {
               setShowHeader(true);
            }
         }
      })
   }, [])



   useLayoutEffect(() => {
      const ctx = gsap.context(() => {
         const linksAnimationsFrom = {
            width: open ? 0 : '100%',
            opacity: 1,
         }

         const linksAnimationsTo = {
            width: open ? '100%' : 0,
            opacity: 1,
            ease: 'power2.inOut',
            delay: .2,
            duration: .3,
         }

         const linksMobileAnimationsFrom = {
            clipPath: open ? 'inset(0% 0% 100% 0%)' : 'inset(0% 0% 0% 0%)',
            opacity: 1,
         }

         const linksMobileAnimationsTo = {
            clipPath: open ? 'inset(0% 0% 0% 0%)' : 'inset(0% 0% 100% 0%)',
            opacity: 1,
            ease: 'power2.inOut',
            delay: .1,
            duration: .3,
         }

         gsap.fromTo('.links>.nav',
            isMobile ? linksMobileAnimationsFrom : linksAnimationsFrom,
            isMobile ? linksMobileAnimationsTo : linksAnimationsTo
         )


         const menuAnimationsFrom = {
            x: 5,
            borderColor: `transparent`,
         }

         const menuAnimationsTo = {
            x: 0,
            borderColor: `${open ? 'var(--secondary)' : 'transparent'}`,
            duration: .3,
            delay: .1,
         }

         const menuMobileAnimationsFrom = {
            y: -5,
            borderColor: `transparent`,
         }

         const menuMobileAnimationsTo = {
            y: 0,
            // borderColor: `${open ? 'var(--border)' : 'transparent'}`,
            duration: .3,
            delay: .2,
         }

         gsap.fromTo('.menu-icon',
            isMobile ? menuMobileAnimationsFrom : menuAnimationsFrom,
            isMobile ? menuMobileAnimationsTo : menuAnimationsTo,

         )
      })

      return () => ctx.revert();
   }, [open, isMobile])

   useEffect(() => {
      console.log('isMobile', isMobile)
   }, [isMobile])

   function handleMenu() {
      setOpen(!open);
   }

   return (
      <header className={`fixed w-screen top-0 z-50 bg-(--card) border-b border-(--border) flex items-center justify-between py-5 px-10 max-md:px-5 ${showHeader ? 'h-[15vh] opacity-100' : 'h-0 opacity-0 overflow-hidden'}`}>
         <div className="icon">
            <img src={images.icon.src} alt={images.icon.name} className='image-cover' />
         </div>

         <div className='flex '>
            <div className={`links`}>
               <div className={clsx(`nav overflow-hidden flex justify-center gap-2 items-center max-md:flex-col max-md:gap-1 max-md:w-full`, isMobile && `absolute top-[15vh] bg-(--card) left-0 rounded-none w-full border-y border-(--border) py-1`)}>
                  {
                     links.map((link) => (
                        <Link className={`link ${isMobile && `hover:bg-(--border) w-full rounded-none text-center font-semibold`}`} to={link.path} key={generateKey(link.name)} onClick={() => setOpen(false)} >
                           {link.name}
                        </Link>
                     ))
                  }
               </div>

               <div onClick={() => handleMenu()} className={`menu-icon text-2xl ${isMobile ? 'border-b' : 'border-s'}`}>
                  <MenuIcon />
               </div>
            </div>
         </div>
      </header>
   )
}

export default Header