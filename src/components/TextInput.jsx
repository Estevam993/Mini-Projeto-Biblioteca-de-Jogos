

export default function TextInput({id,value,setValue,label}){
    return (
        <div>
                <label htmlFor={id}>{label}</label>
                <input 
                type="text"
                name={id} 
                id={id} 
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            </div>

    )
}