import axios from "axios";

const baseURL = "http://localhost:1111/librarySoftware/api/v1/member"

export const GetAllMembers = async() => {
    try{
       const response = await axios.get(`${baseURL}`);
       return response.data;
    }catch(arr){
        console.log(arr);
    }
} 

export const DeleteMember = async(memberId :string)=> {
    try {
        await axios.delete(`${baseURL}/${memberId}`);
    } catch (err) {
        console.log(err);
    }
}