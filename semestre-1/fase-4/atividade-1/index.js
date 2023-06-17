const roteiros = [
  {
    id: 1,
    city: "São Paulo",
    description: "A Terra da Garoa!",
    moreInfo:
      "Fundada em 25 de janeiro de 1554, a cidade tem hoje cerca de 12 milhões de habitantes e é considerada o centro financeiro do Brasil. Aqui vão três dicas de roteiros obrigatórios para aqueles que passam pela capital paulista",
    roteiroList: [
      {
        id: 1,
        name: "#Roteiro A | Região: Avenida Paulista",
        roteiroDescription: "MASP; Parque Trianon; Rua Augusta",
      },
      {
        id: 2,
        name: "#Roteiro B | Região: Centro",
        roteiroDescription: "Catedral da Sé; Pátio do Colégio; Rua Augusta",
      },
      {
        id: 3,
        name: "#Roteiro C | Região: Vila Madalena",
        roteiroDescription:
          "Beco do Batman; Feirinha da Benedito Calixto; Livraria da Vila",
      },
    ],
  },

  {
    id: 2,
    city: "Las Vegas",
    description: "Viva Las Vegas!",
    moreInfo:
      "A cidade mais populosa e mais densamente povoada do estado de Nevada, Las Vegas foi fundada em 1905. É considerada oficialmente como uma cidade desde 1911 e conta com mais de meio milhão de habitantes. Venha conhecer a capital dos jogos de azar!",
    roteiroList: [
      {
        id: 1,
        name: "#Roteiro A | Região: Las Vegas Boulevard South",
        roteiroDescription: "Fonte do Bellagio; Principais Cassinos; Madame Tussauds",
      },
      {
        id: 2,
        name: "#Roteiro B | Região: Downtown",
        roteiroDescription: "Fremont; Las Vegas Art Museum; Museu Nacional do Crime Organizado;",
      },
      {
        id: 3,
        name: "#Roteiro C | Região: Las Vegas Boulevard North",
        roteiroDescription:
          "Outlet Premium North; Stratosphere; Apple Fashion Show",
      },
    ],
  },

  {
    id: 3,
    city: "Moscou",
    description: "Privet!",
    moreInfo:
      "A capital russa fica situada às margens do Rio Moscou e, apesar de ser a cidade mais cosmopolita da Rússia, grande parte de sua história está preservada",
    roteiroList: [
      {
        id: 1,
        name: "#Roteiro A | Região: Praça Vermelha",
        roteiroDescription: "Museu Histórico do Estado; Catedral de São Basílico; Mausoléu de Lênin",
      },
      {
        id: 2,
        name: "#Roteiro B | Região: Centro",
        roteiroDescription: "Teatro Bolshoi; Monumento a Karl Marx; Rio Moscou",
      },
      {
        id: 3,
        name: "#Roteiro C | Região: Las Vegas Boulevard North",
        roteiroDescription:
          "Metrô de Moscou; As Sete Irmãs; Moscow Leningradsky Railway Station",
      },
    ],
  },
];


function renderRoteiros(roteiros) {
  const roteirosPositionOnDom = document.querySelector(".roteirosList");

  const roteirosHtml = roteiros
    .map((roteiro) => `
      <b>->1 - Roteiros para *${roteiro.city}*</b>
      <br />
      ${roteiro.description}
      <br />
      ${roteiro.moreInfo}
      <br />
      ${roteiro.roteiroList.map((item) => `
        ${item.name}
        <br />
        ${item.roteiroDescription}
        <br />
      `).join("")}
    `)
    .join("");

    roteirosPositionOnDom.innerHTML = roteirosHtml;
}

renderRoteiros(roteiros);