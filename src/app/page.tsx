 "use client"
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/gif.gif)" }}
      >
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[700px]">
        <h1 className="text-[16px] sm:text-[20px] lg:text-[24px] text-white font-semibold w-full">
  Unlock Infinite Possibilities with the Power of
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
    {" "} 
    Full Stack Developer | AI R&D | Creative Technologist
  </span>
</h1>
 <p className="text-gray-200 hidden md:block">
 I am &quot; Nirma Qureshi  &quot; A Full Stack Developer, Product Architect, R&D Specialist with a strong foundation in Next.js, React.js, FastAPI, Python, and modern web technologies. Skilled in API integration, MongoDB, MySQL, and Sanity CMS, with hands-on experience in Product Research & Development and Team Collaboration. Combining a unique pre-medical background with analytical thinking and technical expertise, I design and develop innovative, high-performing, and user-centric web and AI-powered applications, driving impactful solutions in both web development and AI research domains.

       
          </p>
          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link
              href="/my-skills"
              className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px] " title="View My Skills"
            >
              My skills
            </Link>-
            <Link
              href="/contact-me"
              className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]" title="Contact me"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
              Contact me
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5">
        <Link
          href="/my-skills"
           className="rounded-[20px] group bg-blue-500 bg-trasparent border border-white px-5 py-2 text-lg text-white max-w-[150px]" title="View My Skills"
        >
          My Skills
        </Link>
        <Link
          href="/contact-me"
          className="rounded-[20px] group  bg-blue-500 bg-trasparent border border-white px-5 py-2 text-lg text-white max-w-[150px]" title="Contact me"
        >
          Contact me
        </Link> 
        
      </div> 
      
    </main>

  );
}

  
 
 








 




 
