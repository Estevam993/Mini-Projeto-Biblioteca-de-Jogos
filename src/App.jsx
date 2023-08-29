import { useState } from "react"



export default function App(){
  
  const [games,setGames] = useState(() => {
    const storedGames = localStorage.getItem("jogos")
    if(!storedGames) return []
    const gameArray = JSON.parse(storedGames)
    return gameArray
  })
  const [title,setTitle] = useState("")
  const [cover,setCover] = useState("")

  const addGame = ({title, cover}) => {
    const id = Math.floor(Math.random() * 1000000)
    const game = {id, title, cover }
    setGames(state => {
      const newState = [...state, game]
      localStorage.setItem("jogos", JSON.stringify(newState))
      return newState
    })
  }
  const removeGame = (id) => {
    setGames(state => {
      const newState = state.filter(game => game.id !== id)
      localStorage.setItem("jogos", JSON.stringify(newState))
      return newState
    })
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    addGame({title,cover})
    setTitle("")
    setCover("")
  }

  return(
    <div>
      <h1>Biblioteca de jogos</h1>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Titulo:</label>
          <input 
            type="text" 
            name="title" 
            id="title" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="cover">Capa:</label>
          <input 
            type="text" 
            name="cover" 
            id="cover" 
            value={cover}
            onChange={(e) => setCover(e.target.value)}
          />
        </div>
        <button type="submit">Adicionar a biblioteca</button>
      </form>
      
      <div className="games">
        {games.map((game) => (
          <div key={game.id}>
            <img src={game.cover}/>
            <div>
              <h2>{game.title}</h2>
              <button onClick={() => removeGame(game.id)}>Remover</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}