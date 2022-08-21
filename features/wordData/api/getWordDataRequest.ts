import axios from "axios";

const getWordDataRequest = async (word: string) => {
    const options = {
        method: "GET",
        url: `https://wordsapiv1.p.rapidapi.com/words/${word}/typeOf`,
        headers: {
            "X-RapidAPI-Key": process.env.RAPIDAPI_KEY!,
            "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
        },
    };

    const response = await axios.request(options);
    const data = await response.data;

    return data;
};

export default getWordDataRequest;
