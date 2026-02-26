import { lazy } from "react";



export const Home = lazy(() => import('./Home'))
export const Blog = lazy(() => import('./Blog'))
export const Projects = lazy(() => import('./Projects'))
export const Settings = lazy(() => import('./Settings'))