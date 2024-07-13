function likeToy(toyId) {
    // Increment the likes on the frontend
    const likeButton = document.querySelector(`.like-button[data-id="${toyId}"]`);
    let likesCount = parseInt(likeButton.innerText.split(': ')[1]) + 1;
    likeButton.innerText = `Likes: ${likesCount}`;
    
    // Optionally send the updated like count to the server
    fetch(`YOUR_API_URL_HERE/${toyId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ likes: likesCount })
    });
}

document.addEventListener('DOMContentLoaded', () => {
    fetchToys();

})