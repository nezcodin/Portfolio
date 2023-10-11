import Contact from "./components/contact"

export default function Home() {
  return (
    <div className="flex flex-col justify-center p-8 w-full h-full font-nanummyeongjo text-lg">
      <div className="mb-4 p-4 bg-pink-50">
        <p>have my profile photo here</p>
        <h1
          className="font-dinosaursarealive text-5xl font-bold max-w-full flex justify-center items-center m-4"
        >About Me</h1>

        <p>stuff about me here!</p>
      </div>
      <div className="mb-4 p-4 bg-pink-50">
        <h1
          className="font-dinosaursarealive text-5xl font-bold max-w-full flex justify-center items-center"
        >Skills</h1>
        <div className="m-4 p-2 bg-pink-100 flex flex-col justify-center items-center">
          <h2
            className="font-dinosaursarealive text-3xl font-bold max-w-full flex justify-center items-center p-2"
          >Languages and Frameworks</h2>
          <p>have icons for each skill</p>
          <p>maybe have animations when hover on icon? or can also show a project that uses that skill</p>
          <ul>
            <li>JS</li>
            <li>TS</li>
            <li>React</li>
            <li>NextJS</li>
            <li>PostgreSQL</li>
            <li>Python</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>TailwindCSS</li>
            <li>SQL</li>
            <li>NodeJS</li>
            <li>Express</li>
          </ul>
        </div>
        <div className="m-4 p-2 bg-pink-100  flex flex-col justify-center items-center">
          <h2
            className="font-dinosaursarealive text-4xl font-bold max-w-full p-2"
          >Technologies</h2>
          <p>same idea as languages + frameworks</p>
        </div>
      </div>
      <div className="p-4 bg-pink-50">
        <Contact />
      </div>
    </div>
  )
}
