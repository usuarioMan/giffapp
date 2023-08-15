import { useState } from "react"

export const AddCategory = ({setCategories, categories}) => {
    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target}) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        setCategories([...categories, inputValue]);
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
