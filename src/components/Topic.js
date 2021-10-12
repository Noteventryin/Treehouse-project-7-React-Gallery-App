import axios from "axios";
import apiKey from "./config";

let cats = {}
let dogs= {}
let birds= {}

const Topic = (query) => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${query}&size=z&per_page=24&format=json&nojsoncallback=1`)
    .then(res => {
        if(query === 'cats'){
            cats = res.data.photos.photo
        } 
        if(query === 'dogs'){
            dogs = res.data.photos.photo
        } 
        if(query === 'birds'){
            birds = res.data.photos.photo
        }
    })

 }

Topic('cats');
Topic('dogs');
Topic('birds');

export {cats, dogs, birds};