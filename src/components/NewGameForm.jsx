import { useState } from "react"
import TextInput from "./TextInput"

export default function NewGameForm({ addGame }){
    const [title,setTitle] = useState("")
    const [cover,setCover] = useState("")
    
    const handleSubmit = (ev) => {
        ev.preventDefault()
        addGame({title,cover})
        setTitle("")
        setCover("")
    }

    return(
        <form action="" onSubmit={handleSubmit}>
            <TextInput
                id={title}
                label="Titulo:"
                value={title} setValue={setTitle}
            />
            <TextInput
                id={cover}
                label="Capa:"
                value={cover} setValue={setCover}
            />
            <button type="submit">Adicionar a biblioteca</button>
        </form>
    )
}