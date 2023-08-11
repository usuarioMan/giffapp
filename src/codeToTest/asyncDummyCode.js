// This function fetches comment data from a JSONPlaceholder API.
// It returns an array containing userId, id, title, and body of the comment.
export const fetchComment = async () => {
    try {
        // Use the fetch function to make an asynchronous request to the API.
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        
        // Parse the JSON response body into an object.
        const { userId, id, title, body } = await response.json();

        // Return an array containing the extracted data.
        return [userId, id, title, body];

    } catch (error) {
        // If an error occurs during the fetch or JSON parsing, log the error and return an error message.
        console.log(error);
        return 'Error while fetching comment.';
    }
}
