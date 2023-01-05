// MILENSTONE 0

let members = [
    {
        nome: "Wayne Barnet",
        ruolo: "Founder & CEO",
        foto: "wayne-barnett-founder-ceo.jpg",
    },
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg",
    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "walter-gordon-office-manager.jpg",
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg",
    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "scott-estrada-developer.jpg",
    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "barbara-ramos-graphic-designer.jpg",
    },

]

console.log(members);

// MILESTONE 1

// let container = document.getElementById('card-container')


// for(let i=0; i<members.length; i++){
//     let membri = members[i];

//     // BONUS 1

//     container.innerHTML += `
//             <img src="./img/${membri.foto}" width="200px"/>
//             <p>${membri.nome}</p>
//             <p>${membri.ruolo}</p>
//             `
// }

// MILESTONE 2

// let container = document.querySelector('.list')

// let member;

// for(let i=0; i<members.length; i++){
//     member = document.createElement('li');
//     member.innerText = `${members[i].nome} - ${members[i].ruolo} - ${members[i].foto}`;
//     container.append(member);
// };


// BONUS 2

function drawTeamMember(person){
    const card_list = document.getElementById('card-container');

    let member_card = `
        <div class="team-card">
            <div class="card-image">
                <img class="img-fluid" src="./img/${person.foto}" alt="${person.nome}"/>
            </div>
            <div class="card-text">
                <h4>${person.nome}</h4>
                <p>${person.ruolo}</p>

            </div>
        </div>
    `
    card_list.innerHTML += member_card
}

for(let i=0; i<members.length; i++){
    let member = members [i];
    drawTeamMember(member);
}
