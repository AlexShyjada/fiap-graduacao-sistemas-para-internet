const offers = [
  {
    id: 1,
    title: "Salvador",
    price: 1438.36,
    date: "15/03/2023",
    imgURL:
      "https://images.unsplash.com/photo-1557936620-79e486d19a84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2094&q=80",
    slug: "https://www.salvadordabahia.com",
  },
  {
    id: 2,
    title: "Fortaleza",
    price: 1438.36,
    date: "15/03/2023",
    imgURL:
      "https://images.unsplash.com/photo-1600887876365-f7dcf0e5e985?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    slug: "https://www.visitbrasil.com/pt/destino-fortaleza-ce-2/",
  },
  {
    id: 3,
    title: "Recife",
    price: 1438.36,
    date: "15/03/2023",
    imgURL:
      "https://images.unsplash.com/photo-1577039544182-bd5d31f99d30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    slug: "https://visit.recife.br",
  },
  {
    id: 4,
    title: "Aracaju",
    price: 1438.36,
    date: "15/03/2023",
    imgURL:
      "https://images.unsplash.com/photo-1623068481023-7059d8acdb22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80",
    slug: "https://www.visitbrasil.com/pt/aracaju/",
  },
  {
    id: 5,
    title: "São Luís",
    price: 1438.36,
    date: "15/03/2023",
    imgURL:
      "https://images.unsplash.com/photo-1604178087336-4d9e4104ef23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    slug: "http://turismosaoluis.com.br",
  },
  {
    id: 6,
    title: "Maceió",
    price: 1438.36,
    date: "15/03/2023",
    imgURL:
      "https://images.unsplash.com/photo-1587571594954-272f8cc473d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    slug: "https://visitealagoas.com",
  },
  {
    id: 7,
    title: "João Pessoa",
    price: 1438.36,
    date: "15/03/2023",
    imgURL:
      "https://images.unsplash.com/photo-1582741099331-e0918de0565f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    slug: "https://turismo.joaopessoa.pb.gov.br",
  },
  {
    id: 8,
    title: "Natal",
    price: 1438.36,
    date: "15/03/2023",
    imgURL:
      "https://images.unsplash.com/photo-1643850271872-29eead934f68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    slug: "https://visit.natal.br",
  },
];

function renderOffers(offers) {
  const gridOffersPositionOnDom = document.querySelector("#GridOffers");

  const offersHtml = offers
    .map((offer) => `
      <a href="${offer.slug}" target="_blank" class="card">
        <img src="${offer.imgURL}" alt="Foto de ${offer.title}" />

        <div class="textContainer">
          <span class="subtitle">${offer.date}</span>
          <h3 class="tertiaryTitle">${offer.title}</h3>
        </div>

        <div class="priceInfo">
          <span class="small">Preço final a partir de</span>
          <span class="price">BRL ${offer.price}</span>
          <span class="small">Hospedagem inclusa · Voo direto</span>
        </div>
      </a>
    `)
    .join("");

  gridOffersPositionOnDom.innerHTML = offersHtml;
}

renderOffers(offers);