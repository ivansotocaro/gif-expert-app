

const getGif = async (category) => {

  const endpoint = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=g5KCJa3zZn1kfkDzlSNPvdRb9VBIPD6W`;
  const response = await fetch(endpoint);
  const { data } = await response.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  return gifs;
 
};


export default getGif;