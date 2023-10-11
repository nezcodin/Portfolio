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
      <div className="mb-4 p-4 bg-pink-50 rounded-3xl">
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
          className="font-dinosaursarealive text-5xl font-bold max-w-full flex justify-center items-center m-4"
        >Hi, I&apos;m Charlotte Fusco!</h1>
        <p>stuff about me here!</p>
      </div>
      <div className="mb-4 p-4 bg-pink-50 rounded-3xl">
        <h1
          className="font-dinosaursarealive text-5xl font-bold max-w-full flex justify-center items-center"
        >Skills</h1>
        <div className="m-4 p-2 bg-pink-100 flex flex-col justify-center items-center rounded-3xl">
          <h2
            className="font-dinosaursarealive text-3xl font-bold max-w-full flex justify-center items-center p-2"
          >Languages and Frameworks</h2>
          <p>maybe have animations when hover on icon? or can also show a project that uses that skill</p>
          <div
            className="p-4 rounded-xl flex flex-wrap items-center m-2 w-3/4 justify-evenly"
          >
            <RiJavascriptFill size="3em" alt="JavaScript" />
            <TbBrandTypescript size="3em" />
            <FaReact size="3em" />
            <FaNodeJs size="3em" />
          </div>
          <div
            className="p-4 rounded-xl flex flex-wrap items-center m-2 w-3/4 justify-evenly"
          >
            <TbBrandNextjs size="3em" />
            <FaPython size="3em" />
            <TbBrandDjango size="3em" />
            <BiLogoPostgresql size="3em" />
          </div>
          <div
            className="p-4 rounded-xl flex flex-wrap justify-evenly items-center m-2 w-3/4"
          >
            <BiSolidFileHtml size="3em" />
            <BiSolidFileCss size="3em" />
            <BiLogoTailwindCss size="3em" />
            <TbFileTypeSql size="3em" />
          </div>
        </div>
        <div className="m-4 p-2 bg-pink-100  flex flex-col justify-center items-center rounded-3xl">
          <h2
            className="font-dinosaursarealive text-4xl font-bold max-w-full p-2"
          >Technologies</h2>
          <div
            className="p-4 rounded-xl flex flex-wrap justify-evenly items-center m-2 w-3/4"
          >
            <BiLogoGit size="3em" />
            <FaGithub size="3em" />
            <TbApi size="3em" />
            <FaFigma size="3em" />
          </div>
          <div
            className="p-4 rounded-xl flex flex-wrap justify-evenly items-center m-2 w-3/4"
          >
            <SiMacos size="3em" />
            <FaLinux size="3em" />
            <SiAdobeaftereffects size="3em" />
            <SiQuickbooks size="3em" />
          </div>
          <div
            className="p-4 rounded-xl flex flex-wrap justify-evenly items-center m-2 w-3/4"
          >
            <SiMicrosoftexcel size="3em" />
          </div>
        </div>
      </div>
      <div className="p-4 bg-pink-50 rounded-3xl">
        <Contact />
      </div>
    </div>
  )
}
