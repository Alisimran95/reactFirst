export const getData = (setState)=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response=>response.json())
    .then(data=>setState(data));
}