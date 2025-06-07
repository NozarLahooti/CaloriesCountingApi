import { apiKey } from "./config";

async function myTest (q , page =  1, limit = 3 ) {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const response = await fetch(url);
    if(!response.ok) {
        throw new Error ('Network is no ok!');
    }
    const data = await response.json()
    return data
}

myTest('food', 2, 3)
    .then(data => {
        console.log('users on page 2:', data.users)
        console.log('total pages', data.totalPages)
    })
    .catch (error => console.error('fetch error:', error));