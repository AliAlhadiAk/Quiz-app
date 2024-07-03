import { useState } from "react"
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_APi_URL } from "../../api";
import { options } from "../../api";
const Search = ({onSearchChange})=>{
    const [search,setSearch] = useState(null);
    const loadOptions=async (inputValue)=>{
        try {
            const response = await fetch(`${GEO_APi_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, options);
            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }

    const handleonChange= (searchData)=>{
        setSearch(searchData)
        onSearchChange(searchData)
    }
    return(
        <AsyncPaginate
        placeholder="search for city"
        debounceTimeout={600}
        value={search}
        onChange={handleonChange}
        loadOptions={loadOptions}
        />
    )
}
export default Search