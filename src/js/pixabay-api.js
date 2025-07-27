import axios from "axios";
async function getImagesByQuery(query, page = 1) {    

    const params = new URLSearchParams({
        key: "51330331-9209d844650666afb5a4e1e7c",
        q: `${query}`,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        per_page: 15,
        page
});
    const { data } = await axios.get(`https://pixabay.com/api/?${params}`)
    console.log(data);    
return data;    
}

export default getImagesByQuery 

// Ця функція повинна приймати один параметр query (пошукове слово, яке є рядком),
// здійснювати HTTP-запит і повертати значення властивості data з отриманої відповіді.
 
