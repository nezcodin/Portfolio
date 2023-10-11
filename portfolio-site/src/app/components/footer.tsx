export default function Footer() {
  return (
    <div className="flex p-6 m-4 bg-button flex-col justify-center items-center max-w-screen font-nanummyeongjo rounded-3xl text-text">
      <div className="flex m-2 justify-around w-full">
        <p>LinkedIn</p>
        <p>GitHub</p>
      </div>
      <p
        className="m-2"
      >Email: ch.fusco104@gmail.com</p>
      <p
        className="m-2"
      >Phone: (319) 804-9186</p>
      <p
        className="m-2"
      >Built using NextJS, TypeScript, and TailwindCSS. Deployed via Vercel.</p>
    </div>
  )
}