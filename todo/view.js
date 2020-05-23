// Teacher solution helped me to know how to set up the view
class View {
    renderTodoList(todoElement, todos) {
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
                    <img id=${todoInfo.id} class='check' src="./img/checked.png" alt="Check mark" value=${todoInfo.complete}>
                </td>
                <td class='CheckInfo'>${todoInfo.description}</td>
                <td class='checkTrash'>
                    <img class='trashImg' src="./img/trash.png" alt="Check mark">
                </td>
            </table>`;
        }
        else {
            item.innerHTML = ` 
            <table>
                <td class='checkImg'>
                    <img id=${todoInfo.id} class='check' src="./img/unchecked.png" alt="Check mark" value=${todoInfo.complete}>
                </td>
                <td class='CheckInfo'>${todoInfo.description}</td>
                <td class='checkTrash'>
                    <img class='trashImg' src="./img/trash.png" alt="Check mark">
                </td>
            </table>`; 
        }

        return item;
    }
}

export default View;