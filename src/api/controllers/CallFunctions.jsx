import UrlBase from "./UrlBase"



export const getBooks=async ()=>{
    try {
        const res= await UrlBase.get(`subjects/fantasy.json?limit=20&offset=0`)
        return res.data.works

    } catch (error) {
        console.error('error al traer libros',error)
        throw new error('error')

    }
}



