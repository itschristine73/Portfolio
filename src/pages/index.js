import About from "@/components/about";
import Education from "@/components/education";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import dynamic from 'next/dynamic'
 
const GrungeBinaryBackground = dynamic(() => import('@/components/backgroundSvg'), { ssr: false })

export default function Home() {
  return (
    <div className="lg:scroll-container">
      <GrungeBinaryBackground/>
      <Navbar/>
      <div className="p-8">
        <Hero/>
        <About/>
        <Education/>
        <Projects/>
      </div>
     
    </div>
  );
}
