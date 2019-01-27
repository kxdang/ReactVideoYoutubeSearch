import axios from 'axios';

const KEY = 'AIzaSyBiz2X6a7r3oY7JpkIxjgMnJ-6Gfnzh57g';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }

});

