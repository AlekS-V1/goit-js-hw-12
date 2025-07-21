import axios from "axios";

function getImagesByQuery(query) {

    const params = new URLSearchParams({
        key: "51330331!-9209d844650666afb5a4e1e7c",
        q: `${query}`,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
});

return axios.get(`https://pixabay.com/api/?${params}`)

    .then((response) => {
        return response.data.hits;
    })
	.catch(error => console.log(error.messege));
}

export default getImagesByQuery 

// Ця функція повинна приймати один параметр query (пошукове слово, яке є рядком),
// здійснювати HTTP-запит і повертати значення властивості data з отриманої відповіді.
                            
// https://pixabay.com/api/?key=51330331-9209d844650666afb5a4e1e7c&q=yellow+flowers&image_type=photo
