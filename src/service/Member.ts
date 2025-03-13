import axios from "axios";

const baseURL = "http://localhost:1111/librarySoftware/api/v1/member"

export const GetAllMembers = async()=> {
    try{
        await axios.get(`${baseURL}`);
    }catch(arr){
        console.log(arr);
    }
} 