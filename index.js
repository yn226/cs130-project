const menu = [
    'MenuItems/Americano',
    'MenuItems/Cappuccino',
    'MenuItems/Cortado',
    'MenuItems/Flat_white',
    'MenuItems/Latte',
    'MenuItems/Macchiato.jpeg',
    'MenuItems/Mocha.jpeg',
    'MenuItems/Tea.jpeg'
];

const initScreen = () => {
    menu.forEach((drink, idx) => {
        document.querySelector('.cards').innerHTML += `
            <li class="card">
                <div class="image" 
                    style="background-image:url('${drink}')"
                    data-index="${idx}"></div>
            </li>`;
    });
};

initScreen();