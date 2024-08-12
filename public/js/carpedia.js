const companyObj = {
    ford: {
        history: "This is ford history",
        location: 'ford location',
        top3: ['1', '2', '3'],
        worst3: ['1', '2', '3']
    },
    cadillac: {
        history: "",
        location: '',
        top3: ['', '', ''],
        worst3: ['', '', '']
    }, 
};

const historyDiv = document.querySelector('#history');
const locationsDiv = document.querySelector('#locations');
const topDiv = document.querySelector('#top');
const worstDiv = document.querySelector('#worst');

const fordCard = document.querySelector("#ford");
const cadillacCard = document.querySelector("#cadillac");

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



showInfo();