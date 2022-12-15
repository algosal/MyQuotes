import axios from 'axios';

export default async function MyQuote() {
    let url = "https://salmansaeed.us/quotes/quotes.php";
    return await axios.get(url).then(Response => {
        let quoteArray = Response.data;
        console.log(quoteArray);
        return quoteArray;
    }).catch(error => {
        console.log("Error");
    });
}