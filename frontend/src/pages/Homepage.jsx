import React from 'react';

import Hero from '../components/Home/Hero';
import Upload from '../components/Home//Upload';
import Features from '../components/Home//Features';
import Footer from '../components/layout//Footer';
import Navbar from '../components/layout/Navbar';


function Homepage() {
    return ( 
    
          <div className="   bg-gradient-to-br from-purple-900 via-black to-blue-900
      relative overflow-hidden bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.8)_0%,_rgba(30,58,138,0.9)_50%,_#000_100%)]">
   
    <Hero/>
     <Upload/>
     <Features/>
     <Footer/>

     </div>
    
    
     );
}

export default Homepage;