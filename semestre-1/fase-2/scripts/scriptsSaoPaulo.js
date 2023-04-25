const holtelListArray = [
  {
    id: 1,
    name: "IBIS Styles São Paulo Anhembi",
    availability: "Disponível",
    url: "./sao-paulo.html",
    imageURL: "./assets/hoteis/ibis.png",
  },
  {
    id: 2,
    name: "Confort Ibirapuera",
    availability: "Indisponível",
    url: "#",
    imageURL: "./assets/hoteis/confort.png",
  },
  {
    id: 3,
    name: "Blue Tree Premium Morumbi",
    availability: "Indisponível",
    url: "#",
    imageURL: "./assets/hoteis/blue_tree.png",
  },
  {
    id: 4,
    name: "Mercure São Paulo Pamplona",
    availability: "Indisponível",
    url: "#",
    imageURL: "./assets/hoteis/pamplona.png",
  },
  {
    id: 5,
    name: "Sheraton São Paulo WTC Hotel",
    availability: "Indisponível",
    url: "#",
    imageURL: "./assets/hoteis/sheraton.png",
  },
  {
    id: 6,
    name: "Bourbon Convention Ibirapuera",
    availability: "Indisponível",
    url: "#",
    imageURL: "./assets/hoteis/bourbon.png",
  },
  {
    id: 7,
    name: "Golden Tulip Paulista Plaza",
    availability: "Indisponível",
    url: "#",
    imageURL: "./assets/hoteis/golden_tulip.png",
  },
  {
    id: 8,
    name: "Renaissance São Paulo Hotel",
    availability: "Indisponível",
    url: "#",
    imageURL: "./assets/hoteis/renaissance.png",
  },
];

function renderHoltel(hotelList) {
  const gridHoltelsPositionOnDom = document.querySelector(
    ".cardsList"
  );

  const citysHtml = hotelList
    .map(
      (hotel) => `
        <a href="${hotel.url}" class="card ${
          hotel.availability === "Disponível" ? "disponivel" : "indisponivel"
      }" style="background-image: url(${hotel.imageURL});">
            <div class="localeHeader">
              <span class="tag ${
                hotel.availability === "Disponível" ? "green" : "red"
              }">
                ${hotel.availability}
              </span>
            </div>
            <div class="informationContainer">
              <div class="leftCollum">
                <span class="leftCollumTopic">Hotel</span>
                <h3 class="name">${hotel.name}</h3>
              </div>
            </div>
        </a>
      `
    )
    .join("");

  gridHoltelsPositionOnDom.innerHTML = citysHtml;
}

renderHoltel(holtelListArray);
