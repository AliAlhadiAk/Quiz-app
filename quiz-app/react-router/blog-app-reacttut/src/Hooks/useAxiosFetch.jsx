import { useEffect, useState } from "react";
import axios from "axios";
import { FaTruckRampBox } from "react-icons/fa6";


const useAxiosFetch = (dataUrl)=>{
    const [data,setData]=useState([])
    const [fetchError,setFetchError]=useState(null);
    const [loading,setLoading] = useState(null);

    useEffect(()=>{
        let isMounted =true;
        const source = axios.CancelToken.source();

        const fetchData = async(url)=>{
            setLoading(true);
            try{
                const response = await axios.get(url,{
                    cancelToken:source.token
                });
                if(isMounted){
                    setData(response.data);
                    setFetchError(null)
                }
        
            }catch(err){
               setFetchError(err.message);
               setData([])
            }finally{
                isMounted && setTimeout(() => {
                    setLoading(false)
                }, 2000);
            }
            fetchData(dataUrl);
            const cleanUp= ()=>{
                console.log("clean up function")
                isMounted=false;
                source.cancel
            }
            return cleanUp
        }
    },[dataUrl])
    return {data,fetchError,loading}
}
export default useAxiosFetch
