// Teacher solution helped me to know how to set up the view
class View {
    renderItemList(itemElement, items) {
        document.getElementById('itemList').innerHTML = '';
        items.forEach(item => {
            // Teacher solution helped
            itemElement.appendChild(this.renderOneItem(item));
        });
    }
    renderOneItem(itemInfo) {
        const item = document.createElement('section');
        item.classList.add('content');
        item.setAttribute('data-name', itemInfo.name);


        const itemDiv = document.createElement('div');
        itemDiv.className = 'item';

        item.appendChild(itemDiv);
        
        const name = document.createElement('div');
        name.className = 'itemName';
        name.innerHTML = itemInfo.name;

        const quantityAdd = document.createElement('div');
        quantityAdd.className = 'quantityAdd';
        const addSymbol = document.createElement('p');
        addSymbol.className = 'addSymbol';
        addSymbol.innerHTML = '+';
        quantityAdd.appendChild(addSymbol);

        const quantity = document.createElement('div');
        quantity.className = 'quantity';
        quantity.innerHTML = itemInfo.quantity;


        const quantityMinus = document.createElement('div');
        quantityMinus.className = 'quantityMinus';
        const minusSymbol = document.createElement('p');
        minusSymbol.className = 'minusSymbol';
        minusSymbol.innerHTML = '-';
        quantityMinus.appendChild(minusSymbol);

        const space = document.createElement('div');
        space.className = 'space';

        const editItem = document.createElement('img');
        editItem.src = './img/pencil.png';
        editItem.className = 'edit';
        editItem.id = `edit${itemInfo.id}`;

        const deleteItem = document.createElement('img');
        deleteItem.src = './img/trash-can.png';
        deleteItem.className = 'delete';
        deleteItem.id = `delete${itemInfo.id}`;
        deleteItem.addEventListener('touchend', () => {
            console.log("Delete triggered for item: ", itemInfo.name)
        });

        const space1 = document.createElement('div');
        space1.className = 'space';

        const space2 = document.createElement('div');
        space2.className = 'space';

        itemDiv.appendChild(name);
        itemDiv.appendChild(quantityAdd);
        itemDiv.appendChild(quantity);
        itemDiv.appendChild(quantityMinus);
        itemDiv.appendChild(space);
        itemDiv.appendChild(editItem);
        itemDiv.appendChild(space1);
        itemDiv.appendChild(deleteItem);
        itemDiv.appendChild(space2);


        /*
                    <div class='space'></div>
                    <img class='edit' id='edit${itemInfo.id}' src="./img/pencil.png">
                    <img class='delete' id='delete${itemInfo.id}' src="./img/trash-can.png">
                    <div class='space'></div>
        */

        return item;
    }
}

export default View;