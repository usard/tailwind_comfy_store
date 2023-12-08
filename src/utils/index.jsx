import axios from 'axios';
import { Input } from 'postcss';
export const customFetch = axios.create({
    baseURL: 'https://strapi-store-server.onrender.com/api',
});

export const formatPrice = (price) => {
    const amount = new Intl.NumberFormat('en-US', {
        style:'currency',
        currency:'USD'
    }).format((price/100).toFixed(2))
    return amount
}

export const generatePaginationNumbers = (val) => {
    return (Array.from({length: val}, (_,index)=> {
        return index+1;
    }))
}

export const generateQuantityOptions = (val) => {
   return Array.from({length: val}, (_,index)=> {
       const  quantity = index+1
        return <option key={index} value={quantity}>{(quantity)}</option>
    })
}