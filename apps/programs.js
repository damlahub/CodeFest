const programs = [
    {
        day: "Gün 1",
        programHours: "09:00 - 10:00",
        details: "Kamp alanında buluşma ve kayıt işlemleri."
    },
    {
        day: "Gün 1",
        programHours: "10:00 - 12:00",
        details: "Tanışma aktivitesi ve grup oluşturma."
    },
    {
        day: "Gün 1",
        programHours: "12:00 - 13:30",
        details: "Öğle yemeği."
    },
    {
        day: "Gün 1",
        programHours: "13:30 - 15:30",
        details: "Temel kamp becerileri eğitimi."
    },
    {
        day: "Gün 1",
        programHours: "15:30 - 17:30",
        details: "Serbest zaman / kamp alanında keşif."
    },
    {
        day: "Gün 1",
        programHours: "17:30 - 19:00",
        details: " Akşam yemeği."
    },
    {
        day: "Gün 1",
        programHours: "19:00 - 21:00",
        details: "Açık hava sineması ve ateş başında müzik."
    },
    {
        day: "Gün 2",
        programHours: "09:00 - 10:00",
        details: "Kamp alanında buluşma ve kayıt işlemleri."
    },
    {
        day: "Gün 2",
        programHours: "10:00 - 12:00",
        details: "Tanışma aktivitesi ve grup oluşturma."
    },
    {
        day: "Gün 2",
        programHours: "12:00 - 13:30",
        details: "Öğle yemeği."
    },
    {
        day: "Gün 2",
        programHours: "13:30 - 15:30",
        details: "Temel kamp becerileri eğitimi."
    },
    {
        day: "Gün 2",
        programHours: "15:30 - 17:30",
        details: "Serbest zaman / kamp alanında keşif."
    },
    {
        day: "Gün 2",
        programHours: "17:30 - 19:00",
        details: " Akşam yemeği."
    },
    {
        day: "Gün 2",
        programHours: "19:00 - 21:00",
        details: "Açık hava sineması ve ateş başında müzik."
    },
    {
        day: "Gün 3",
        programHours: "09:00 - 10:00",
        details: "Kamp alanında buluşma ve kayıt işlemleri."
    },
    {
        day: "Gün 3",
        programHours: "10:00 - 12:00",
        details: "Tanışma aktivitesi ve grup oluşturma."
    },
    {
        day: "Gün 3",
        programHours: "12:00 - 13:30",
        details: "Öğle yemeği."
    },
    {
        day: "Gün 3",
        programHours: "13:30 - 15:30",
        details: "Temel kamp becerileri eğitimi."
    },
    {
        day: "Gün 3",
        programHours: "15:30 - 17:30",
        details: "Serbest zaman / kamp alanında keşif."
    },
    {
        day: "Gün 3",
        programHours: "17:30 - 19:00",
        details: " Akşam yemeği."
    },
    {
        day: "Gün 3",
        programHours: "19:00 - 21:00",
        details: "Açık hava sineması ve ateş başında müzik."
    }
]

const programSection = document.getElementById("program");
const programCards = document.createElement("div");
programCards.classList.add("program-cards");

function createProgramCard(day) {
    const dayPrograms = programs.filter((program) => program.day === day);

    const dayProgramsCard = dayPrograms.map((program) => {
        return `<li><span class="green">${program.programHours}</span> ${program.details}</li>`;
    }).join("");

    const programCard = document.createElement("div");
    programCard.classList.add("program-card");
    programCard.innerHTML = `<h1>${day}</h1><ul>${dayProgramsCard}</ul>`;

    return programCard;
}

["Gün 1", "Gün 2", "Gün 3"].forEach((day) => {
    const programCard = createProgramCard(day);
    programCards.appendChild(programCard);
});

programSection.appendChild(programCards);