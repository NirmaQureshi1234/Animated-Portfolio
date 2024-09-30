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
          {/* <h1 className="text-[20px] text-white font-semibold text-center">
          "Unlock Infinite Possibilities with the Power of"
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}
              Web Development
            </span>
          </h1> */}
           
           <h1 className="text-[16px] sm:text-[10px] lg:text-[24px] text-white font-semibold w-full">
  Unlock Infinite Possibilities with the Power of
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
    {" "}Web Development
  </span>
</h1>
 <p className="text-gray-200 hidden md:block">
 &quot; I am &quot; :

         &quot; Nirma Qureshi, a Web Development graduate from Tech Force Pakistan and currently advancing AI studies at GIAIC. With the successful completion of the TypeScript course and Quarter 1 exam, now focused on mastering Next.js. Bringing a unique pre-medical background, poised to apply expertise in web development and AI to innovative and impactful projects.&quot;

This keeps it professional and concise. Let me know if you&apos;d like any changes! &quot;
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

  
 
 








 
 




 
