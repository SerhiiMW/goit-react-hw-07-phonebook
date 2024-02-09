import axios from "axios";

const booksInstance = axios.create({
    baseURL: "https://65c3882639055e7482c11a66.mockapi.io/api/contacts"
});

export const requestFetchContacts= async ()=> {
    const {data} = await booksInstance.get("/");
    return data;
}

export const requestAddContacts = async (body) =>{
    const {data} = await booksInstance.post("/", body);
    return data;
}
export const requestDeleteContacts = async (id) => {
    const {data} = await booksInstance.delete(`/${id}`);
    return data;
}