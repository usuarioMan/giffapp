import { useEffect, useState } from "react"
import { getGifs } from "../../utils/api/giphy"

export const GiffGrid = ({category, key}) => {
    const [images, setImages] = useState([])
    useEffect(() => {
        const gifs = getGifs(category)
        gifs.then(
            (gifs) => {
                setImages(gifs); 
            }
        )
    }, [])
    console.log(images);
    return(
        <div key={key}>
            <h2>{category}</h2>
            {
                images.map(
                    (img) => {
                        return(
                            <div key={img.id}>
                                <img src={img.image} alt={img.title}/>
                            </div>
                        )                          
                    }
                )
            } 
        </div> 
    )  
}