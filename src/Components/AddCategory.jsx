import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target}) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        onNewCategory(inputValue)
        setInputValue('')
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