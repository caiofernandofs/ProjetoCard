// Dados (simulando um backend)
const user = {
  name: "Caio Fernando",
  location: "Campinas, São Paulo",
  bio: "Desenvolvedor front-end ",
  avatar: "Imagem.jfif",
  links: [
    { name: "GitHub", url: "https://github.com/caiofernandofs" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/caiosantos-dev/" },
    { name: "Instagram", url: "https://www.instagram.com/caio.ffsantos/" }
  ]
};

// Seleciona o container
const app = document.getElementById("app");

// Cria o card
const card = document.createElement("div");
card.classList.add("card");

// Conteúdo do topo
card.innerHTML = `
  <img src="${user.avatar}" class="avatar">
  <h1>${user.name}</h1>
  <p class="location">${user.location}</p>
  <p class="bio">"${user.bio}"</p>
`;

// Container de links
const linksContainer = document.createElement("div");
linksContainer.classList.add("links");

// Criando os botões dinamicamente
user.links.forEach(link => {
  const a = document.createElement("a");

  a.textContent = link.name; // Exibe o nome do link
    a.href = link.url; // Define o URL do link
    a.target = "_blank"; // Abre o link em uma nova aba

    linksContainer.appendChild(a);
});

// Junta tudo
card.appendChild(linksContainer);
app.appendChild(card);
