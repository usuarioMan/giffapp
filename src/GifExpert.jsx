import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import { AddCategory } from "./Components/AddCategory";

export const GifExpert = () => {
    const [categories, setCategories] = useState([ 'One Punch' , 'POTE'])

    const onAddCategory = () => {
        setCategories(['potesito', ...categories])
    }

    return (
        <>
            
            <h1>Gif Expert App</h1>
            <AddCategory/>
            <button onClick={onAddCategory}>Add</button>
            <ol>
                {categories.map(category => <li key={uuidv4()}>{category}</li>)}
            </ol>
        </>
    )
}
