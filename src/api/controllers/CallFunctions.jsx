import UrlBase from "./UrlBase"



export const getBooks=async ()=>{


    try {
        const res= await UrlBase.get('/api/subjects/fantasy.json?limit=20')
        return res.data.works

    } catch (error) {
        console.error('error al traer libros',error)
        throw new error('error')

    }
}


export const getInfo = async(id)=>{
    try {
        const res= await UrlBase.get(`/api/works/${id}`)
        const book=res.data

        const autor=book.authors?.[0]?.author?.key;     

        if (autor){ 
            const autoresq= await UrlBase.get(`/api${autor}.json`)
             book.authorName = autoresq.data.name;
        }


        return book
    } catch (error) {
        console.log('error al encontrar id ingresada',error)
        throw new Error('Error al obtener información del libro')
    }
}


export const relateBooks=async(autor)=>{


    try {
       const res= await UrlBase.get(`/api/authors/${autor}/works.json?limit=20`)
       const works = res.data.entries;
const detailedBooks = await Promise.all(
  works.map(work => getInfo(work.key.split('/').pop()))
);
        return detailedBooks
    } catch (error) {
            console.log('error al encontrar id autor ingresada',error)
        throw new Error('Error al obtener información del libro')
    
    }
}



export const getGender=async(genero)=>{
    try {
        const res=await UrlBase.get(`/api/subjects/${genero}.json?limit=4`)
        const gender= res.data
        return gender
    } catch (error) {
        console.log('error al encontrar id de genero ingresada',error)
        throw new Error('Error al obtener información del libro')
    }
}



export const searchBar=async(titulo)=>{
    if(titulo){
       try {
       const res= await UrlBase.get(`/api/search.json?title=${encodeURIComponent(titulo)}&limit=10`) 
       return res.data.docs
    } catch (error) {
        console.error('error de busqueda')
    }  
    }else{
        console.log('parametro no encontrada')
    }
    
}
