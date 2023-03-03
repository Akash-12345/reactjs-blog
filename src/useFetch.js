import { useEffect,useState } from "react"

const useFetch = (url) => {
    const abortCont = new AbortController
    const [data,setData]=useState(null)
    const [isLoading,setIsLoading]=useState(true)
    const [error,setError]=useState(null)
    useEffect(()=>{
        fetch(url,{signal:abortCont.signal})
        .then(res=>{
            console.log(res)
            if(!res.ok){
                throw Error('Could not fetch the data for that resource')
            }
            return res.json();
        })
        .then(data=>{
            setData(data)
            setIsLoading(false)
            setError(null)
        })
        .catch((err)=>{
            if (err.name ==='AbortError'){
                console.log('fetch aborted')
            }else{
                setIsLoading(false)
                setError(err.message)
            }
           
        })
        return ()=>abortCont.abort
    },[url])
    return {data,isLoading,error}

}
 
export default useFetch;