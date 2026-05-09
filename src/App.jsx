import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import Blogs from "./Pages/Blogs";
import BlogPost from "./Pages/BlogPost";
import Contact from "./Pages/Contact";
import Quote from "./Pages/Quote";
import NotFound from "./Pages/NotFound";
import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro";
import Cursor from "./Components/Cursor/Cursor";
import ScrollToTop from "./Components/ScrollToTop";
import PageTransition from "./Components/PageTransition";

const App = () => {
  const [isLoading, setIsloading] = useState(true);
  const [introComplete, setIntroComplete] = useState(false);
  const MenuRef = useRef()

  const handleOpen = () => {
    MenuRef.current.openMenu();
    MenuRef.current.openMenu();
  };


  useEffect(() => {
    const loadAssets = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setIsloading(false);
    };

    loadAssets();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => setIntroComplete(true), 3000);
    }
  }, [isLoading]);



  return (
    <BrowserRouter>
      <div id="main" >
        {!introComplete && <Intro isLoading={isLoading} />}

        {introComplete && (
          <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', transition: 'background-color 0.4s ease' }}>
            <Cursor />
            <Navbar handleOpen={handleOpen} />
            <ScrollToTop />

            <Routes>
              <Route path="/" element={
                <PageTransition>
                  <Home />
                  <Footer />
                </PageTransition>
              } />

              <Route path="/about" element={
                <PageTransition>
                  <About />
                  <Footer />
                </PageTransition>
              } />

              <Route path="/products" element={
                <PageTransition>
                  <Products />
                  <Footer />
                </PageTransition>
              } />

              <Route path="/blogs" element={
                <PageTransition>
                  <Blogs />
                  <Footer />
                </PageTransition>
              } />

              <Route path="/blogs/:slug" element={
                <PageTransition>
                  <BlogPost />
                  <Footer />
                </PageTransition>
              } />

              <Route path="/contact" element={
                <PageTransition>
                  <Contact />
                  <Footer />
                </PageTransition>
              } />

              <Route path="/quote" element={
                <PageTransition>
                  <Quote />
                  <Footer />
                </PageTransition>
              } />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        )}
      </div>
    </BrowserRouter>
  );
};

export default App;
