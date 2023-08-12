import { useState } from "react"

export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target}) => {
        setInputValue(target.value)
    }

    const onSubmit = () => {
        setCategories(inputValue)
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
