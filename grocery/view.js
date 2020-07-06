import {editItemEvent, deleteItemEvent, addOne, minusOne}  from './main.js';

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
        item.style.backgroundColor = localStorage.color;
        item.setAttribute('data-name', itemInfo.name);


        const itemDiv = document.createElement('div');
        itemDiv.className = 'item';

        item.appendChild(itemDiv);
        
        const name = document.createElement('div');
        name.className = 'itemName';
        name.id = `name${itemInfo.id}`;
        name.innerHTML = itemInfo.name;

        const quantityAdd = document.createElement('div');
        quantityAdd.className = 'quantityAdd';
        const addSymbol = document.createElement('p');
        addSymbol.className = 'addSymbol';
        addSymbol.innerHTML = '+';
        addSymbol.addEventListener('touchend', () => {
            addOne(itemInfo.id);
            let num = document.getElementById('quantity' + String(itemInfo.id)).innerHTML;
            document.getElementById('quantity' + String(itemInfo.id)).innerHTML = Number(num) + 1;
        });
        quantityAdd.appendChild(addSymbol);

        const quantity = document.createElement('div');
        quantity.className = 'quantity';
        quantity.id = 'quantity' + String(itemInfo.id);
        quantity.innerHTML = itemInfo.quantity;


        const quantityMinus = document.createElement('div');
        quantityMinus.className = 'quantityMinus';
        const minusSymbol = document.createElement('p');
        minusSymbol.className = 'minusSymbol';
        minusSymbol.innerHTML = '-';
        minusSymbol.addEventListener('touchend', () => {
            let num = document.getElementById('quantity' + String(itemInfo.id)).innerHTML;
            if (Number(num) > 0) {
                document.getElementById('quantity' + String(itemInfo.id)).innerHTML = Number(num) - 1;
                minusOne(itemInfo.id);
            }
        });
        quantityMinus.appendChild(minusSymbol);

        const space = document.createElement('div');
        space.className = 'space';

        const editItem = document.createElement('img');
        editItem.src = './img/pencil.png';
        editItem.className = 'edit';
        editItem.id = `edit${itemInfo.id}`;
        editItem.addEventListener('touchend', () => {
            editItemEvent(itemInfo.id, itemInfo.name, itemInfo.quantity, itemInfo.category);
        });

        const deleteItem = document.createElement('img');
        deleteItem.src = './img/trash-can.png';
        deleteItem.className = 'delete';
        deleteItem.id = `delete${itemInfo.id}`;
        deleteItem.addEventListener('touchend', () => {
            deleteItemEvent(itemInfo.id);
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

        return item;
    }
}

export default View;