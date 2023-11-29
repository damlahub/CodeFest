const menuItems = [
    {
        name: "Ana Sayfa",
        href: "#"
    },
    {
        name: "Program",
        href: "#accommodation"
    },
    {
        name: "Sponsorlar",
        href: "#activity"
    },
    {
        name: "Konaklama",
        href: "#gallery"
    },
    {
        name: "Yemek ve İçecek",
        href: "#faq"
    },
    {
        name: "Ulaşım",
        href: "#location"
    },
    {
        name: "İletişim",
        href: "#faq"
    },
    {
        name: "Sık Sorulan Sorular",
        href: "#faq"
    }
];

const navContainer = document.querySelector('.menu');
const navList = document.createElement('ul');

menuItems.forEach(item => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = item.href;
    link.textContent = item.name;
    listItem.appendChild(link);
    navList.appendChild(listItem);
});

// Kayıt Ol Butonu
const registerButton = document.createElement('li');
const button = document.createElement('button');
button.type = 'button';
button.className = 'standart-btn';
button.textContent = 'Kayıt Ol!';
registerButton.appendChild(button);
navList.appendChild(registerButton);

navContainer.appendChild(navList);
