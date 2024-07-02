const ALBUMS_URL = "https://spotify-web2.p.rapidapi.com/albums/?ids=5lJqux7orBlA1QzyiBGti1%2C5r8T7S23cVDSd7a045h4N5%2C0qJkFmVwwNXP6fvSemDZqn%2C1yjQhgZzBmfdS0CTj6xQ2h%2C2JwUsV3QP7FMWx1Fzt6dHQ";

const options = {
    method: "GET",
    headers: {
    "X-RapidAPI-Key": "fcb59cec39mshd91b3db488e7f7cp15ac38jsn0b990822cf45",
    "X-RapidAPI-Host": "spotify-web2.p.rapidapi.com",
    },
};

const content = null || document.getElementById('content');

const fetchData = async (apiURL, options = null) => {
    try {
        const response = await fetch(apiURL, options);
        const data = await response.json();
        console.log(data)
        return data;
    } catch {
        throw new Error('Error fetching')
    }
}

(async () => {
    try {
        const { albums } = await fetchData(ALBUMS_URL, options);
        console.log(albums[0].images[0]);
        let view = `
        ${albums.map( (album) => 
            `<div class="group relative">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${album.images[0].url}" alt="${album.name}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${album.name}
                    </h3>
                </div>
            </div>`
        )}`;

        content.innerHTML = view;
    } catch(error) {
        console.log('Error: ', error)
    }
})()