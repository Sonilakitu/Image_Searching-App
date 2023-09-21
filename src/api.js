import axios from 'axios';

const searchImage = async(term) =>{
   const response=await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
         Authorization: 'Client-ID l_sW6FRKxyUP_A8-g_WsOrkQSTcZYBgbmDn0DrW4glU'   
        },
        params: {
            query: term ,
        }
    });
    // console.log(response);
    return response.data.results;
};

export default searchImage;

