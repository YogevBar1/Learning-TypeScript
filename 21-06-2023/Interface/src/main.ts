import Todo from "./todo.js";
main();

async function main() {
    const todos: Todo[] = await getJson("https://jsonplaceholder.typicode.com/todos");
    for (const todo of todos) {
        console.log(todo.id, todo.title);

    }
}



async function getJson(url: string) {
    const response = await fetch(url);
    const json = await response.json();
    return json;
}

