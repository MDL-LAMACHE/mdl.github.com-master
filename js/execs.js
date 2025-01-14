var executives = [
  {
    name: "justine",
    role: "Presidente",
    imageURL: "/img/execs/justine.jpg",
  },
  {
    name: "ADWAIT MANE",
    role: "Vice President",
    imageURL: "/img/execs/adwait.jpg",
  },
  {
    name: "Morgane Michel",
    role: "Treasurer",
    imageURL: "/img/execs/morgane.png",
  },
  {
    name: "Anonymous",
    role: "Secretaire",
    imageURL: "/img/execs/secret.jpeg",
  },
  {
    name: "ALEX LIANG",
    role: "Industry Event Lead",
    imageURL: "/img/execs/alexl.jpeg",
  },
  {
    name: "Lux_",
    role: "membre du C.A & devloppeur",
    imageURL: "/img/execs/lux.gif",
  },
  {
    name: "Thibaut Soares",
    role: "Membre du C.A",
    imageURL: "/img/execs/thibaut.jpg",
  },
  {
    name: "Maseko",
    role: "Membre du C.A",
    imageURL: "/img/execs/maseko.jpg",
  },
  {
    name: "Bastien",
    role: "Membre du C.A",
    imageURL: "/img/execs/salut.jpg",
  },
  {
    name: "Matt",
    role: "Membre du C.A",
    imageURL: "/img/execs/matt.jpg",
  },
  {
    name: "Daniélou",
    role: "Membre du C.A",
    imageURL: "/img/execs/dan.jpg",
  },
];

function mapExecutivesToHTML() {
  var pageContentDiv = document.querySelector(".page-content");
  pageContentDiv.className = "parent-container";

  var executivesContainer = document.createElement("div");
  executivesContainer.className = "executives-container";

  var activeInfoDiv = null;

  executives.forEach(function (executive) {
    var executiveDiv = document.createElement("div");
    executiveDiv.className = "executive";

    var img = document.createElement("img");
    img.src = executive.imageURL;

    var infoDiv = document.createElement("div");
    infoDiv.className = "info";

    var nameP = document.createElement("b");
    nameP.textContent = executive.name;
    infoDiv.appendChild(nameP);

    var roleP = document.createElement("p");
    roleP.textContent = executive.role;
    infoDiv.appendChild(roleP);

    executiveDiv.appendChild(img);
    executiveDiv.appendChild(infoDiv);

    // Add event listeners for touch devices
    executiveDiv.addEventListener("click", function () {
      toggleInfoVisibility(infoDiv);
    });

    executivesContainer.appendChild(executiveDiv);
  });

  pageContentDiv.appendChild(executivesContainer);
}

function toggleInfoVisibility(infoDiv) {
  if (activeInfoDiv) {
    activeInfoDiv.classList.remove("show-info");
  }
  infoDiv.classList.toggle("show-info");
  activeInfoDiv = infoDiv;
}

mapExecutivesToHTML();
