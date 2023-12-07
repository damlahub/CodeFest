const faq = [
    {
        question: "Etkinliğe katılım ücretsiz mi, yoksa bir kayıt ücreti var mı?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur iure laborum enim ratione vel, cumque deserunt est, nihil consectetur, exercitationem recusandae? Iste illum non ratione dolorem earum? Totam, beatae magni."
    },
    {
        question: "Kampa Evcil Hayvan Kabul Ediyor Musunuz?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur iure laborum enim ratione vel, cumque deserunt est, nihil consectetur, exercitationem recusandae? Iste illum non ratione dolorem earum? Totam, beatae magni."
    },
    {
        question: "Kampta Yeme İçme İhtiyaçlarımızı Nasıl Gideririz?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur iure laborum enim ratione vel, cumque deserunt est, nihil consectetur, exercitationem recusandae? Iste illum non ratione dolorem earum? Totam, beatae magni."
    },
    {
        question: "Katılımcılar kendi dizüstü bilgisayarlarını getirmeli mi?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur iure laborum enim ratione vel, cumque deserunt est, nihil consectetur, exercitationem recusandae? Iste illum non ratione dolorem earum? Totam, beatae magni."
    },
    {
        question: "Etkinlik boyunca doğal yaşamı nasıl koruyabileceğimizi öğrenmek için hangi konuşmacılar/uzmanlar katılacak?",
        answer: "Elon Musk"
    },
    {
        question: "Etkinliğe katılmak için önceden kayıt yapmak gerekiyor mu, yoksa kapıda kayıt olanağı var mı?",
        answer: "Elon Musk"
    },
    {
        question: "Etkinlik sırasında doğa ile ilgili yazılım projeleri üzerinde mentorluk veya rehberlik almak mümkün mü?",
        answer: "Elon Musk"
    },
    {
        question: "#CodeFest'e Ulaşım Nasıl Sağlanır?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur iure laborum enim ratione vel, cumque deserunt est, nihil consectetur, exercitationem recusandae? Iste illum non ratione dolorem earum? Totam, beatae magni."
    }
];
let faqContent = document.querySelector(".faq-content");
let showAll = false;

const createFaqElements = () => {
    faq.forEach((faqItem, index) => {
        if (index < 4) {
            let faqItemArticle = document.createElement("div");
            faqItemArticle.classList.add("faq-item");
            faqItemArticle.innerHTML = `
        <button class=" faq-question">
            ${faqItem.question}
            <span class="faq-char">+</span>
        </button>
        <div class=" faq-answer">
            <p>${faqItem.answer}</p>
        </div> 
        `;
            faqContent.appendChild(faqItemArticle);
        }
    });
}
document.getElementById("faq-more").addEventListener("click", () => {
    if (showAll) {
        faqContent.innerHTML = "";
        createFaqElements();
        showAll = false;
    } else {
        faq.forEach((faqItem, index) => {
            if (index >= 4) {
                let faqItemArticle = document.createElement("div");
                faqItemArticle.classList.add("faq-item");
                faqItemArticle.innerHTML = `
                    <button class="faq-question">
                        ${faqItem.question}
                        <span class="faq-char">+</span>
                    </button>
                    <div class="faq-answer">
                        <p>${faqItem.answer}</p>
                    </div> 
                `;
                faqContent.appendChild(faqItemArticle);
            }
        });
        showAll = true;
    }
    document.querySelector("#faq-more").textContent = showAll ? "Daha Az" : "Daha Fazla";

});
const faqController = () => {
    faqContent.addEventListener("click", (event) => {
        let faqItem = event.target.closest(".faq-item");
        if (faqItem) {
            let faqChar = faqItem.querySelector('.faq-char');
            faqItem.classList.toggle("active");
            faqChar.innerHTML = faqItem.classList.contains("active") ? "-" : "+";
        }
    });
}

createFaqElements();
faqController();
