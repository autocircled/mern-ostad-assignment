"use strict";
async function getData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const body = await response.json();
    console.log(body);
}
getData();