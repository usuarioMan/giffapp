import { useState } from "react"

export const AddCategory = () => {
    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target}) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        console.log(event);
    }

  return (
    <form onSubmit={onSubmit}>
        <input 
            type="text"
            placeholder="Search Gifs"
            value={inputValue}
            onChange={onInputChange}
        />
    </form>
  )
}
