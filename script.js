document.addEventListener("DOMContentLoaded", () => {
  // Инициализация карты
  ymaps.ready(() => {
    const map = new ymaps.Map("map", {
      center: [51.169392, 71.449074], // Координаты Астаны
      zoom: 12,
    });

    // Добавление меток
    data.forEach((item) => {
      const placemark = new ymaps.Placemark(item.coordinates, {
        balloonContent: `<strong>${item.name}</strong><br>${item.address}`,
      });
      map.geoObjects.add(placemark);
    });
  });

  // Генерация карточек
  const cardsContainer = document.querySelector(".cards");
  data.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${item.name}</h3>
      <p>${item.address}</p>
      <p>Цена: ${item.price} тг/мес</p>
      <button>Подробнее</button>
    `;
    cardsContainer.appendChild(card);
  });
});
