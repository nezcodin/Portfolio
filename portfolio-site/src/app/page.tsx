import Contact from "./components/contact"

export default function Home() {
  return (
    <div className="flex flex-col justify-center p-8 w-full h-full">
      <div className="mb-4 p-4 bg-pink-50">
        <h1>About Me</h1>
        <p>have my profile photo here</p>
        <p>stuff about me here!</p>
      </div>
      <div className="mb-4 p-4 bg-pink-50">
        <h1>Skills</h1>
        <div className="m-2 p-2 bg-pink-100">
          <h2>Languages and Frameworks</h2>
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
        <div className="m-2 p-2 bg-pink-100">
          <h2>Technologies</h2>
          <p>same idea as languages + frameworks</p>
        </div>
      </div>
      <div className="p-4 bg-pink-50">
        <Contact />
      </div>
    </div>
  )
}
