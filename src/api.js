import React from 'react'
import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
        headers: {
            Authorization: "Client-ID Yj7R-Nji3gtxWS2TwWouFtU2JMHOKPd5TAG_s4L_E_c"
        },
        params: {
            query: term,
        },
    });

console.log(response);

    return response.data.results;
};

export default searchImages;