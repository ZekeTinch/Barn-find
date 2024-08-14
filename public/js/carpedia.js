const companyObj = {
    ford: {
        history: "This is ford history",
        location: 'ford location',
        top3: ['Ford Mustang', 'Ford Thunderbird', 'Ford escape'],
        worst3: ['Ford Edsel division', 'Ford Pinto', 'Ford bronco 2']
    },
    cadillac: {
        history: "",
        location: '',
        top3: ['Cadillac CTS-V Gen 1', 'Cadillac series 62 convertable', 'Cadillac ATS-V'],
        worst3: ['Cadillac Cimarron', 'Cadillac Catera', 'Cadillac Allanté']
    }, 
    jeep: {
        history:"",
        location: "",
        top3: ['Jeep Wrangler YJ','Jeep Wagoneer','Jeep CJ-8 Scrambler'],
        worst3: ['Jeep Grand Cherokee','Jeep Liberty','Jeep Renegade']
    },
    gmc: {
        history:"",
        location: "",
        top3: ['Chevy Suburban','GMC Yukon XL','GMC Acadia'],
        worst3: ['GMC Jimmy','GMC Savanna','GMC Sonoma']
    },
    chevy: {
        history:"",
        location: "",
        top3: ['Corvette ZR1','Nova L78','Camaro'],
        worst3: ['GMC EV1','Lumina APV','Cavalier']
    },
    toyota: {
        history:"",
        location: "",
        top3: ['Lexus LS400','Toyota MR2','Lexus LFA'],
        worst3: ['Toyota 86','Scion XD','Toyota Venza']
    },

};

const historyDiv = document.querySelector('#history');
const locationsDiv = document.querySelector('#locations');
const topDiv = document.querySelector('#top');
const worstDiv = document.querySelector('#worst');

const fordCard = document.querySelector("#ford");
const cadillacCard = document.querySelector("#cadillac");
const jeepCard = document.querySelector("#jeep");
const gmcCard = document.querySelector("#gmc");
const chevyCard = document.querySelector("#chevy");
const toyotaCard = document.querySelector("#toyota");

let selectedCompany = 'ford';

const showInfo = () => {
    historyDiv.textContent = companyObj[selectedCompany].history;
    locationsDiv.textContent = companyObj[selectedCompany].location;

    topDiv.innerHTML = '';
    companyObj[selectedCompany].top3.forEach((car) => {
        const content = `
        <p>${car}</p>
        `
        const div = document.createElement('div');
        div.innerHTML = content;

        topDiv.appendChild(div);
    });

    worstDiv.innerHTML = '';
    companyObj[selectedCompany].worst3.forEach((car) => {
        const content = `
        <p>${car}</p>
        `
        const div = document.createElement('div');
        div.innerHTML = content;

        worstDiv.appendChild(div);
    });


};

const handleCardClick = (event) => {
    event.stopPropagation();
    let id;
    if (event.target.tagName === 'IMG') {
        id = event.target.parentElement.id;
    } else {
        id = event.target.id
    }

    selectedCompany = id;
    showInfo();

};

fordCard.addEventListener('click', handleCardClick);
cadillacCard.addEventListener('click', handleCardClick);
jeepCard.addEventListener('click', handleCardClick);
gmcCard.addEventListener('click', handleCardClick);
chevyCard.addEventListener('click', handleCardClick);
toyotaCard.addEventListener('click', handleCardClick);

showInfo();