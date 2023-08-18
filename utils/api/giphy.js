const GIPHY_KEY = import.meta.env.VITE_GIPHY_API_KEY;

export async function getGifs(search) {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_KEY}&q=${search}&limit=10&offset=0&rating=g&lang=es&bundle=messaging_non_clips`
    const response = await fetch(url);
    const { data } = await response.json();

    const gifs = data.map(
        (gif)=>{
            return {
                id: gif.id,
                title: gif.title,
                image: gif.images.original.url,
            }
        }
    )
    return gifs;
}