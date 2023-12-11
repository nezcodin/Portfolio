export default function Contact() {
  return (
    <div
      className="bg-container flex flex-col items-center justify-center"
    >
      <h1
        className="font-dinosaursarealive text-5xl font-bold max-w-full flex justify-center items-center text-text"
      >Contact</h1>
      <input
        className="bg-childcontainer rounded-3xl p-2 m-6 w-11/12
        placeholder-style
        "
        style={{ paddingLeft: "1em" }}
        placeholder="Subject"
      ></input>
      <input
        className="bg-childcontainer rounded-3xl p-2 m-6 w-11/12
        placeholder-style
        "
        style={{ paddingLeft: "1em" }}
        placeholder="Your Email"
      ></input>
      <input
        className="bg-childcontainer rounded-3xl p-2 m-6 h-72 w-11/12
        placeholder-style
        "
        style={{ paddingLeft: "1em"}}
        placeholder="Write your message here..."
      ></input>
      <button
        className="bg-button text-text p-3 rounded-3xl font-dinosaursarealive font-bold"
      >
        Send Email
      </button>
    </div>
  )
}