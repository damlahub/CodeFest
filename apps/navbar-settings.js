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
const footerContainer = document.querySelector('#footer-navbar'); 

const navList = document.createElement('ul');
const footerNavList = document.createElement('ul');

menuItems.forEach(item => {
    const listItem = document.createElement('li');
    const footerlistItem = document.createElement('li');

    const link = document.createElement('a');
    const footerlink = document.createElement('a');

    link.href = item.href;
    link.textContent = item.name;
    footerlink.href = item.href;
    footerlink.textContent = item.name;

    navList.appendChild(listItem);
    listItem.appendChild(link);

    footerlistItem.appendChild(footerlink);
    footerNavList.appendChild(footerlistItem);
    footerContainer.appendChild(footerNavList);
});

// Kayıt Ol Butonu
const registerButton = document.createElement('li');
const button = document.createElement('button');
button.type = 'button';
button.className = 'standart-btn';
button.textContent = 'Kayıt Ol!';
button.onclick= () => registerPage()
registerButton.appendChild(button);
navList.appendChild(registerButton);

navContainer.appendChild(navList);
