import { useState } from "react"
import { AddCategory } from "./Components/AddCategory";
import { doesCategoryExist, sanitizeInput } from "../utils/inputSanitization";
import { GiffGrid } from "./Components/GiffGrid";
import { v4 as uuidv4 } from 'uuid';

export const GifExpert = () => {
    const [categories, setCategories] = useState([])

    const onNewCategory = (newCategory) => {
        const sanitaziedCategory = sanitizeInput(newCategory)
        if (sanitaziedCategory === null | doesCategoryExist(categories, sanitaziedCategory)) return;
        setCategories([...categories, sanitaziedCategory]);
    }
    return (
        <>
            <h1>Gif Expert App</h1>       
            <AddCategory 
                onNewCategory={onNewCategory}
            />
            {
                categories.map((category) => (
                        <GiffGrid
                            key={uuidv4()}
                            category={category}
                        />
                    )
                )
            }
        </>
    )
}
