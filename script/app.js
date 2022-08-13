//tirage au sort

var participants = ["Marion", "Timeo", "Theo", "Alix","Carole","Eric","David","Rudy","Ylann",
 "Marie","Benoit","Nicolas","Laetitia","Coralie","Christelle","Thomas","Amandine", "Tristan","Aaron","Elina","Laura","Melanie"
];

const button = document.querySelector('button');
const gagnants = document.querySelector('#test');


button.addEventListener('click', createGroup);
setTimeout(createGroup, 2000)

function draw () 
{
	let index = Math.floor(Math.random() * participants.length);
	let participant = participants[index];
	participants = participants.slice(0, index).concat(participants.slice(index + 1, participants.length));
	participantList = document.createElement("li");
	participantList.innerHTML = participant;

	gagnants.appendChild(participantList);
	participantList.style.opacity = '1';
}

let i = 1;
function check ()
{
	if (i === 10) {
		clearInterval(drawInterval);
	}
}

function createGroup ()
{
	draw()
	drawInterval = setInterval(() => {
		draw();
		i++;
		check();
	}, 3000);
}