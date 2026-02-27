import { lazy } from "react";


/*=============================
      COMPONENTS
===============================*/
export const Card = lazy(() => import('./Card'));
export const Modal = lazy(() => import('./helpers/Modal'));
export const Header = lazy(() => import('./Header'));
export const Notification = lazy(() => import('./helpers/Notification'));
export const Slider = lazy(() => import('./helpers/Slider'));
export const ThemeChanger = lazy(() => import('./helpers/ThemeChanger'));
export const Footer = lazy(() => import('./Footer'));
export const Hero = lazy(() => import('./Hero'));
export const About = lazy(() => import('./About'));
export const Contact = lazy(() => import('./Contact'));
export const ContactInfo = lazy(() => import('./ContactInfo'));
export const ContactForm = lazy(() => import('./ContactForm'));
export const Skills = lazy(() => import('./Skills'));


/*=============================
      HELPERS
===============================*/
export const CTABtn = lazy(() => import('./helpers/CTABtn'));
export const Input = lazy(() => import('./helpers/Input'));