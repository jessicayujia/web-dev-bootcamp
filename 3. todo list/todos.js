let input = prompt('what would you like to do?');
const todos = [];
while (input !== 'quit') {
    if (input === 'new') {
        const add = prompt('what do you need to do?');
        todos.push(add);
        console.log(`${add} added to the to-do list`);
    } else if (input === 'list') {
        console.log('*******')
        for (let i = 0; i < todos.length; i++) {
            console.log(todos[i]);
        }
        console.log('*******')
    } else if (input === 'delete') {
        let del = prompt('what would you like to delete?');
        //not gonna finish this hehe
    }
    input = prompt('what else would you like to do?');
}

console.log('bye!')