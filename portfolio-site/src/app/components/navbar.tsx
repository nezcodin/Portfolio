export default function NavBar() {
  return (
    <div className="flex bg-button m-4 p-6 justify-evenly font-dinosaursarealive font-bold text-4xl rounded-3xl">
      <p>Home</p>
      <p>Projects</p>
      <p>Resume</p>
    </div>
  )
}

// for medium screens and below,
// have the hidden nav that must be clicked to open
// for screens above medium size,
// have the nav open 