export default function Main() {
  return (
    <main>
      <div className="form">
        <label>
          Top text
          <input name="topText" />
        </label>
        <label>
          Bottom text
          <input name="bottomText" />
        </label>
      </div>
      <div>
        <button>Get a new meme image 🖼</button>
        <h2>TOP TEXT</h2>
        <img src="troll-face.png" alt="meme image" />
        <h2>BOTTOM TEXT</h2>
      </div>
    </main>
  )
}
