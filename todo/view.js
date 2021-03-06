// Teacher solution helped me to know how to set up the view
class View {
    renderTodoList(todoElement, todos) {
        document.getElementById('todoList').innerHTML = '';
        todos.forEach(todo => {
            // Teacher solution helped
            todoElement.appendChild(this.renderOneTodo(todo));
        });
    }
    renderOneTodo(todoInfo) {
        const item = document.createElement('section');
        item.classList.add('todo');
        item.setAttribute('data-name', todoInfo.name);
        if(todoInfo.complete) {
            item.innerHTML = ` 
            <table>
                <td class='checkImg'>
                    <img id=${todoInfo.id} class='check' src="./img/checked.png" alt="${todoInfo.complete}">
                </td>
                <td class='CheckInfo'>
                    <p id='desc${todoInfo.id}' class='strike'>${todoInfo.description}</p>
                </td>
                <td class='checkTrash'>
                    <img id='trash${todoInfo.id}' class='trashImg' src="./img/trash.png" alt="Check mark">
                </td>
            </table>`;
        }
        else {
            item.innerHTML = ` 
            <table>
                <td class='checkImg'>
                    <img id=${todoInfo.id} class='check' src="./img/unchecked.png" alt="${todoInfo.complete}">
                </td>
                <td class='CheckInfo'>
                    <p id='desc${todoInfo.id}'>${todoInfo.description}</p>
                </td>
                <td class='checkTrash'>
                    <img id='trash${todoInfo.id}' class='trashImg' src="./img/trash.png" alt="Check mark">
                </td>
            </table>`; 
        }

        return item;
    }
}

export default View;