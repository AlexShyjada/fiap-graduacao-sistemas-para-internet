const cityListArray = [
  {
    id: 1,
    cityName: "São Paulo",
    cityRegion: "Sudeste",
    minimumCost: "R$ 10.000,00",
    availability: "Disponível",
    url: "./sao-paulo",
    imageURL: "./assets/sao-paulo.png",
  },
  {
    id: 2,
    cityName: "São Paulo",
    cityRegion: "Sudeste",
    minimumCost: "R$ 10.000,00",
    availability: "Disponível",
    url: "./sao-paulo",
    imageURL: "./assets/sao-paulo.png",
  },
  {
    id: 3,
    cityName: "São Paulo",
    cityRegion: "Sudeste",
    minimumCost: "R$ 10.000,00",
    availability: "Disponível",
    url: "./sao-paulo",
    imageURL: "./assets/sao-paulo.png",
  },
  {
    id: 4,
    cityName: "São Paulo",
    cityRegion: "Sudeste",
    minimumCost: "R$ 10.000,00",
    availability: "Disponível",
    url: "./sao-paulo",
    imageURL: "./assets/sao-paulo.png",
  },
  {
    id: 5,
    cityName: "São Paulo",
    cityRegion: "Sudeste",
    minimumCost: "R$ 10.000,00",
    availability: "Disponível",
    url: "./sao-paulo",
    imageURL: "./assets/sao-paulo.png",
  },
  {
    id: 6,
    cityName: "São Paulo",
    cityRegion: "Sudeste",
    minimumCost: "R$ 10.000,00",
    availability: "Disponível",
    url: "./sao-paulo",
    imageURL: "./assets/sao-paulo.png",
  },
  {
    id: 7,
    cityName: "São Paulo",
    cityRegion: "Sudeste",
    minimumCost: "R$ 10.000,00",
    availability: "Disponível",
    url: "./sao-paulo",
    imageURL: "./assets/sao-paulo.png",
  },
  {
    id: 8,
    cityName: "São Paulo",
    cityRegion: "Sudeste",
    minimumCost: "R$ 10.000,00",
    availability: "Disponível",
    url: "./sao-paulo",
    imageURL: "./assets/sao-paulo.png",
  },
];

function renderOffers(cityList) {
  const gridCitysPositionOnDom = document.querySelector(
    "#MainDestinationsList"
  );

  const citysHtml = cityList
    .map(
      (city) => `
        <a href="${city.url}" class="mainDestinationCard" style="background-image: url(${city.imageURL});">
            <div class="localeHeader">
                <span class="cityRegion">${city.availability}</span>
            </div>
            <div class="cityInformationContainer">
              <div class="locale">
                <span class="cityRegion">${city.cityRegion}</span>
                <h3 class="cityName">${city.cityName}</h3>
              </div>

              <div class="cost">
                <span class="costLabel">Custo mínimo</span>
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