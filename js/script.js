// MILENSTONE 0

let members = [
    {
        nome: "Wayne Barnet",
        ruolo: "Founder & CEO",
        foto: "waynet-barnett-founder-ceo.jpg",
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


for(let i=0; i<members.length; i++){
    let membri = members[i];
    console.log(membri.nome);
    console.log(membri.ruolo);
    console.log(membri.foto);
}

// MILESTONE 2

let container = document.querySelector('.container')

let member;

for(let i=0; i<members.length; i++){
    member = document.createElement('div');
    member.innerText = `Nome: ${members[i].nome}, Ruolo: ${members[i].ruolo}, Immagine: ${members[i].foto}`;
    container.append(member);
    member.style.font = 'bold 15px arial,serif'; 
};