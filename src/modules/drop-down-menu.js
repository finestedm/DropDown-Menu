export default function dropDownMenu(itemsArray) {
    const entireMenuHolder = document.createElement('div');
    entireMenuHolder.classList.add('drop-down-menu', 'holder')
    const menuClosed = document.createElement('div');
    menuClosed.classList.add('drop-down-menu', 'closed');
    menuClosed.addEventListener('click', () => { openMenuWindowList(itemsArray, entireMenuHolder, menuClosed) })
    menuClosed.innerText = itemsArray[0];
    entireMenuHolder.append(menuClosed)
    return entireMenuHolder;
}

function openMenuWindowList(itemsArray, entireMenuHolder, menuClosed) {
    const listOfItemsInMenu = document.createElement('ul');
    listOfItemsInMenu.classList.add('drop-down-menu', 'list');
    itemsArray.forEach(item => {
        const itemInMenu = document.createElement('li');
        itemInMenu.classList.add('drop-down-menu', 'item');
        itemInMenu.innerText = item;
        itemInMenu.addEventListener('click', () => {
            menuClosed.innerText = item;
            listOfItemsInMenu.remove()
        })
        listOfItemsInMenu.append(itemInMenu);
    })
    entireMenuHolder.appendChild(listOfItemsInMenu)
}