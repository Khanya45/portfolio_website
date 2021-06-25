let projects = [
  {
    imgURL: "/images/convertor.png",
    imgALT: "My Project 1",
    title: "Temp Converter",
    techStack: "Python",
    description:
      "I have maintained, developed and launched multiple projects from scratch, carrying the development of it's back-end and front-end codebases.",
    githubURL: "https://github.com/Khanya45/python-temp-convertor",
    liveProjectURL: "https://replit.com/join/qphjpcja-khanya45",
  },
  {
    imgURL: "/images/contactform.png",
    imgALT: "My Project 1",
    title: "Contact Form",
    techStack: "HTML/CSS",
    description:
      "I have maintained, developed and launched multiple projects from scratch, carrying the development of it's back-end and front-end codebases.",
    githubURL: "https://github.com/Khanya45/contact-form",
    liveProjectURL: "https://dazzling-thompson-3f7fef.netlify.app",
  },
  {
    imgURL: "/images/login.png",
    imgALT: "My Project 1",
    title: "Log In",
    techStack: "HTML/CSS",
    description:
      "I have maintained, developed and launched multiple projects from scratch, carrying the development of it's back-end and front-end codebases.",
    githubURL: "https://codepen.io/KhanyaG/pen/KKwwBwL",
    liveProjectURL: "https://codepen.io/KhanyaG/details/KKwwBwL",
  },
  {
    imgURL: "/images/sumofnums.png",
    imgALT: "My Project 1",
    title: "Sum Of Numbers",
    techStack: "Python",
    description:
      "I have maintained, developed and launched multiple projects from scratch, carrying the development of it's back-end and front-end codebases.",
    githubURL: "https://github.com/Khanya45/python-sum",
    liveProjectURL: "https://replit.com/join/kofcaemt-khanya45",
  },
  {
    imgURL: "/images/slides.png",
    imgALT: "My Project 1",
    title: "Slides",
    techStack: "HTML/CSS",
    description:
      "I have maintained, developed and launched multiple projects from scratch, carrying the development of it's back-end and front-end codebases.",
    githubURL: "https://github.com/Khanya45/python-sum",
    liveProjectURL: "https://replit.com/join/kofcaemt-khanya45",
  },
  {
    imgURL: "/images/timeline.png",
    imgALT: "My Project 1",
    title: "Timeline",
    techStack: "HTML/CSS",
    description:
      "I have maintained, developed and launched multiple projects from scratch, carrying the development of it's back-end and front-end codebases.",
    githubURL: "https://github.com/Khanya45/timeline",
    liveProjectURL: "https://quirky-easley-d9dfc6.netlify.app/",
  },
  {
    imgURL: "/images/graphs.png",
    imgALT: "My Project 1",
    title: "Graphs",
    techStack: "Python",
    description:
      "I have maintained, developed and launched multiple projects from scratch, carrying the development of it's back-end and front-end codebases.",
    githubURL: "https://github.com/Khanya45/python-sum",
    liveProjectURL: "https://replit.com/join/kofcaemt-khanya45",
  },
];

function createCard(card) {
  let createdCard = `<div class="card" techStack=${card.techStack}>
    <img src="${card.imgURL}" alt="${card.imgALT}" />
    <div class="overlay">
      <h1>${card.title}</h1>
      <h2>${card.techStack}</h2>
      <p>
        ${card.description}
      </p>
      <a href="${card.liveProjectURL}" target="_blank"
        ><button>LIVE</button></a
      >
      <a href="${card.githubURL}" target="_blank"
        ><button>CODE</button></a
      >
    </div>
  </div>
    `;
  return createdCard;
}

function renderCards() {
  let projectContainer = document.querySelector(".container");
  for (project of projects) {
    let card = createCard(project);
    projectContainer.innerHTML += card;
  }
}

renderCards();

function filterCards(category) {
  let cards = document.getElementsByClassName("card");
  if (category == "All") {
    for (card of cards) {
      card.style.display = "block";
    }
    return;
  }
  for (card of cards) {
    card.style.display = "none";
  }

  let selectedCards = document.querySelectorAll(`[techStack='${category}']`);

  for (card of selectedCards) {
    card.style.display = "block";
  }
}
