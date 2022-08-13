//tirage au sort

var participants = ["Marion", "Timeo", "Theo", "Alix","Carole","Eric","David","Rudy","Ylann",
 "Marie","Benoît","Nicolas","Laetitia","Coralie","Christelle","Thomas","Amandine", "Tristan","Aaron","Elina","Laura","Melanie"
];

const button = document.querySelector('button');

button.addEventListener('click', createGroup);


function createGroup () {

	for (var i = 0; i < 10; i++) {
		gagnants = document.querySelector("#test");
		var index = Math.floor(Math.random() * participants.length);
		var participant = participants[index];
		participants = participants.slice(0, index).concat(participants.slice(index+1, participants.length))
		console.log(participant)
		participantList = document.createElement("li")
		participantList.innerHTML = participant

		gagnants.appendChild(participantList);
		
	}

}
