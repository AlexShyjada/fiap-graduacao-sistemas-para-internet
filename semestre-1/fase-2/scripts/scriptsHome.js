const cityListArray = [
  {
    id: 1,
    cityName: "São Paulo",
    cityRegion: "Sudeste",
    minimumCost: "R$ 10.000,00",
    availability: "Disponível",
    url: "./sao-paulo.html",
    imageURL: "./assets/cidades/sao-paulo.png",
  },
  {
    id: 2,
    cityName: "São Paulo",
    cityRegion: "Sudeste",
    minimumCost: "R$ 10.000,00",
    availability: "Disponível",
    url: "./sao-paulo.html",
    imageURL: "./assets/cidades/sao-paulo.png",
  },
  {
    id: 3,
    cityName: "São Paulo",
    cityRegion: "Sudeste",
    minimumCost: "R$ 10.000,00",
    availability: "Disponível",
    url: "./sao-paulo.html",
    imageURL: "./assets/cidades/sao-paulo.png",
  },
  {
    id: 4,
    cityName: "São Paulo",
    cityRegion: "Sudeste",
    minimumCost: "R$ 10.000,00",
    availability: "Disponível",
    url: "./sao-paulo.html",
    imageURL: "./assets/cidades/sao-paulo.png",
  },
  {
    id: 5,
    cityName: "São Paulo",
    cityRegion: "Sudeste",
    minimumCost: "R$ 10.000,00",
    availability: "Disponível",
    url: "./sao-paulo.html",
    imageURL: "./assets/cidades/sao-paulo.png",
  },
  {
    id: 6,
    cityName: "São Paulo",
    cityRegion: "Sudeste",
    minimumCost: "R$ 10.000,00",
    availability: "Disponível",
    url: "./sao-paulo.html",
    imageURL: "./assets/cidades/sao-paulo.png",
  },
  {
    id: 7,
    cityName: "São Paulo",
    cityRegion: "Sudeste",
    minimumCost: "R$ 10.000,00",
    availability: "Disponível",
    url: "./sao-paulo.html",
    imageURL: "./assets/cidades/sao-paulo.png",
  },
  {
    id: 8,
    cityName: "São Paulo",
    cityRegion: "Sudeste",
    minimumCost: "R$ 10.000,00",
    availability: "Disponível",
    url: "./sao-paulo.html",
    imageURL: "./assets/cidades/sao-paulo.png",
  },
];

function renderOffers(cityList) {
  const gridCitysPositionOnDom = document.querySelector(
    "#MainDestinationsList"
  );

  const citysHtml = cityList
    .map(
      (city) => `
        <a href="${city.url}" class="card" style="background-image: url(${city.imageURL});">
            <div class="localeHeader">
                <span class="cityRegion">${city.availability}</span>
            </div>
            <div class="informationContainer">
              <div class="leftCollum">
                <span class="leftCollumTopic">${city.cityRegion}</span>
                <h3 class="name">${city.cityName}</h3>
              </div>

              <div class="rightCollum">
                <span class="rightCollumTopic">Custo mínimo</span>
                <span class="costAmount">${city.minimumCost}</span>
              </div>
            </div>
        </a>
      `
    )
    .join("");

  gridCitysPositionOnDom.innerHTML = citysHtml;
}

renderOffers(cityListArray);