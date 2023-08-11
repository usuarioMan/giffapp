import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export const GifExpert = () => {
    const [categories, setCategories] = useState([ 'One Punch' , 'POTE'])
    return (
        <>
            <h1>Gif Expert App</h1>
            <ol>
                {categories.map(category => <li key={uuidv4()}>{category}</li>)}
            </ol>
        </>
    )
}
