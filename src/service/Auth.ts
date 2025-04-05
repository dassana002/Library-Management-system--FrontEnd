import axios from "axios";
const baseAuthUrl = "http://localhost:1111/librarySoftware/api/v1/auth";

const SignUpReq = async (signUp: any) => {
    console.log(signUp);
    try {
        const response = await axios.post(
            `${baseAuthUrl}/signUp`,
            signUp
        );
        return response.data.token;    // Backend eken ena new token eka return kranwa
        
    } catch (err) {
        console.log(err);
        throw err;
    }
}
const SignInReq = async (signIn: any) => {
    console.log(signIn)
    try {
        const response = await axios.post(
            `${baseAuthUrl}/signIn`,
            signIn
        );
        return response.data.token;  // Backend eken ena token eka return kranwa

    } catch (err) {
        console.error(err)
        throw err
    }
}

export { SignUpReq, SignInReq }