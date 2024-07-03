import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { items } from '../data';
import Product from './Product';

const SearchItem= ()=>{
const {id} =useParams();
const [filteredData,setFilteredData] = useState([]);

useEffect(()=>{
    const filteredDataFun =()=>{
        const data1 = items.filter((p)=>p.Title.toLocaleLowerCase().includes(id.toLocaleLowerCase()));
        setFilteredData(data1)
    }
    
    filteredDataFun()
},[id])

return(
 <Product items={filteredData}/>
);
}
export default SearchItem;