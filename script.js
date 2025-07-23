
const API_KEY = "SUA_CHAVE_API"; // Substitua com sua chave da API-Football
const placaresDiv = document.getElementById("placares");

document.getElementById("darkModeToggle").onclick = () => {
  document.body.classList.toggle("dark");
};

async function carregarJogos() {
  placaresDiv.innerHTML = "Carregando placares...";
  try {
    const response = await fetch("https://v3.football.api-sports.io/fixtures?league=71&season=2024&live=all", {
      headers: { "x-apisports-key": API_KEY }
    });
    const data = await response.json();
    placaresDiv.innerHTML = data.response.map(jogo => {
      const home = jogo.teams.home.name;
      const away = jogo.teams.away.name;
      const gols = `${jogo.goals.home} x ${jogo.goals.away}`;
      return `<p>${home} ${gols} ${away}</p>`;
    }).join("");
  } catch (e) {
    placaresDiv.innerHTML = "Erro ao carregar dados.";
  }
}

carregarJogos();
