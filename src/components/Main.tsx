import { ChangeEvent, useEffect, useState } from "react"

type Meme = {
  // Not an exhaustive list of the properties returned by API
  id: number
  url: string
}

export default function Main() {
  const topText = "One does not simply"
  const bottomText = "Walk into Mordor"
  const [meme, setMeme] = useState({
    imgUrl: "https://i.imgflip.com/1bij.jpg",
    topText,
    bottomText,
  })
  const [allMemes, setAllMemes] = useState([] as Array<Meme>)

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => {
        setAllMemes(data.data.memes)
      })
  }, [])

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const currentTarget = event.currentTarget as HTMLInputElement
    const name = currentTarget.name
    const value = currentTarget.value
    setMeme(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  function getMemeImage() {
    const random = Math.floor(Math.random() * allMemes.length)
    setMeme(prevState => ({ ...prevState, imgUrl: allMemes[random].url }))
  }

  return (
    <main>
      <div className="meme-text-inputs">
        <label>
          Top text
          <input
            type="text"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          />
        </label>
        <label>
          Bottom text
          <input
            type="text"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          />
        </label>
      </div>
      <button onClick={getMemeImage}>Get a new meme image</button>
      <div className="meme-image">
        <img src={meme.imgUrl} alt="meme image" />
        <span className="top-text">{meme.topText}</span>
        <span className="bottom-text">{meme.bottomText}</span>
      </div>
    </main>
  )
}
