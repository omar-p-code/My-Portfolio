// src/router/index.tsx
import { createBrowserRouter, Outlet, useNavigation } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";

import Preloader from "../components/Preloader";

const Home = lazy(() => import("../pages/Home"));
const Blog = lazy(() => import("../pages/Blog"));
const Projects = lazy(() => import("../pages/Projects"));
const Settings = lazy(() => import("../pages/Settings"));

const Header = lazy(() => import("../components/Header"));
const Footer = lazy(() => import("../components/Footer"));

const RootLayout = () => {
   const navigation = useNavigation();
   const [showPreloader, setShowPreloader] = useState(true);

   useEffect(() => {
      if (navigation.state === "loading") {
         setShowPreloader(true);
      } else {
         const timer = setTimeout(() => setShowPreloader(false), 700);
         return () => clearTimeout(timer);
      }
   }, [navigation.state]);

   return (
      <>
         {showPreloader && <Preloader />}
         <Header />
         <main>
            <Suspense fallback={<Preloader />}>
               <Outlet />
            </Suspense>
         </main>
         <Footer />
      </>
   );
};

export const router = createBrowserRouter([
   {
      path: "/",
      element: <RootLayout />,
      children: [
         { index: true, element: <Home /> },
         { path: "blog", element: <Blog /> },
         { path: "projects", element: <Projects /> },
         { path: "settings", element: <Settings /> },
      ],
   },
]);