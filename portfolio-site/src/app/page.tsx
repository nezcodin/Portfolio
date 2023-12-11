import Contact from "./components/contact"
import profilePicture from "./photos/profilePicture.jpeg"
import Image from "next/image"
import { RiJavascriptFill } from 'react-icons/ri'
import { TbBrandTypescript, TbBrandNextjs, TbFileTypeSql, TbBrandDjango, TbApi } from 'react-icons/tb'
import { FaReact, FaPython, FaNodeJs, FaGithub, FaLinux, FaFigma } from 'react-icons/fa'
import { BiLogoPostgresql, BiSolidFileHtml, BiSolidFileCss, BiLogoTailwindCss, BiLogoGit } from 'react-icons/bi'
import { SiMacos, SiAdobeaftereffects, SiQuickbooks, SiMicrosoftexcel } from 'react-icons/si'

export default function Home() {
  return (
    <div className="flex flex-col justify-center p-8 w-full h-full font-nanummyeongjo text-lg">
      <div className="mb-6 p-4 bg-container rounded-3xl">
        <div
          className="flex justify-center items-center"
        >
          <Image
            src={profilePicture}
            width={300}
            height={300}
            alt="Picture of me"
            className="rounded-full p-2"
          />
        </div>
        <h1
          className="font-dinosaursarealive text-5xl font-bold max-w-full flex justify-center items-center m-4 text-text"
        >Hi, I&apos;m Charlotte Fusco!</h1>
        <p
          className="p-2 text-text"
        >I am a creative and customer-focused software developer with a passion for problem-solving and a commitment to staying on the cutting edge of technology. My diverse background in customer service and the beauty industry has honed my problem-solving abilities, allowing me to connect with customers on a personal level and provide innovative solutions to complex issues.</p>
        <p
          className="p-2 text-text"
        >I&apos;m well-versed in a range of programming languages and frameworks, including JavaScript, TypeScript, Python, React, Next.js, Node.js, and PostgreSQL. I&apos;m proficient with Git/version control and GitHub, experienced in building and utilizing RESTful APIs, and comfortable working in various operating systems.</p>
      </div>
      <div className="mb-6 p-4 bg-container rounded-3xl">
        <h1
          className="font-dinosaursarealive text-5xl font-bold max-w-full flex justify-center items-center text-text"
        >Skills</h1>
        <div className="m-4 p-2 flex-col justify-center items-center rounded-3xl bg-childcontainer flex">
          <h2
            className="font-dinosaursarealive text-3xl font-bold max-w-fit flex justify-center items-center p-2 text-text text-center"
          >Languages and Frameworks</h2>
          {/* <p>maybe have animations when hover on icon? or can also show a project that uses that skill</p> */}
          <div
            className='p-4 rounded-xl flex flex-wrap items-center m-2 w-3/4 justify-evenly bg-container'
          >
            <RiJavascriptFill size="3em" color="#F5EBE0" alt="JavaScript" />
            <TbBrandTypescript size="3em" color="#F5EBE0" />
            <FaReact size="3em" color="#F5EBE0" />
            <FaNodeJs size="3em" color="#F5EBE0" />
          </div>
          <div
            className='p-4 rounded-xl flex flex-wrap items-center m-2 w-3/4 justify-evenly'
          >
            <TbBrandNextjs size="3em" color="#F5EBE0" />
            <FaPython size="3em" color="#F5EBE0" />
            <TbBrandDjango size="3em" color="#F5EBE0" />
            <BiLogoPostgresql size="3em" color="#F5EBE0" />
          </div>
          <div
            className='p-4 rounded-xl flex flex-wrap justify-evenly items-center m-2 w-3/4'
          >
            <BiSolidFileHtml size="3em" color="#F5EBE0" />
            <BiSolidFileCss size="3em" color="#F5EBE0" />
            <BiLogoTailwindCss size="3em" color="#F5EBE0" />
            <TbFileTypeSql size="3em" color="#F5EBE0" />
          </div>
        </div>
        <div className="m-4 p-2 bg-childcontainer  flex flex-col justify-center items-center rounded-3xl">
          <h2
            className="font-dinosaursarealive text-4xl font-bold p-2 text-text max-w-fit"
          >Technologies</h2>
          <div
            className="p-4 rounded-xl flex flex-wrap justify-evenly items-center m-2 w-3/4"
          >
            <BiLogoGit size="3em" color="#F5EBE0" />
            <FaGithub size="3em" color="#F5EBE0" />
            <TbApi size="3em" color="#F5EBE0" />
            <FaFigma size="3em" color="#F5EBE0" />
          </div>
          <div
            className="p-4 rounded-xl flex flex-wrap justify-evenly items-center m-2 w-3/4"
          >
            <SiMacos size="3em" color="#F5EBE0" />
            <FaLinux size="3em" color="#F5EBE0" />
            <SiAdobeaftereffects size="3em" color="#F5EBE0" />
            <SiQuickbooks size="3em" color="#F5EBE0" />
          </div>
          <div
            className="p-4 rounded-xl flex flex-wrap justify-evenly items-center m-2 w-3/4"
          >
            <SiMicrosoftexcel size="3em" color="#F5EBE0" />
          </div>
        </div>
      </div>
      <div className="p-4 bg-container rounded-3xl">
        <Contact />
      </div>
    </div>
  )
}
