const haberler = [
    {
        baslik:"Yapay zeka dünyayi degistiriyor",
        ozet: "2025 yilinda yapay zeka daha etkili",
        gorsel: "https://i.ytimg.com/vi/wxk1w_2lCMY/maxresdefault.jpg"
    },
    {
        baslik:"Yapay zeka dünyayi degistiriyor",
        ozet: "2025 yilinda yapay zeka daha etkili",
        gorsel:"https://sason.meb.gov.tr/meb_iys_dosyalar/2024_01/03224330_yapayzeka.jpg"
    },
    {
        baslik:"Yapay zeka dünyayi degistiriyor",
        ozet: "2025 yilinda yapay zeka daha etkili",
        gorsel:"https://www.coinkolik.com/wp-content/uploads/2024/11/yapay-zeka-boga.webp"
    }
     

];

const container = document.getElementById("haberler");

haberler.forEach(haber => {
    const kart = document.createElement("div");
    kart.className = "haber-karti";

    kart.innerHTML = `
    <img src="${haber.gorsel}" alt="${haber.baslik}">
    <h3>${haber.baslik}</h3>
    <p>${haber.ozet}</p>`;
    container.appendChild(kart);
})

const apiKey = "b90cadeacf444833bf9bc5f72344c18a";
const url = `https://newsapi.org/v2/top-headlines?country=tr&pageSize=6&apiKey=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const apiHaberler = data.articles;
    const container = document.getElementById("haberler");

    apiHaberler.forEach((haber, index) => {
      const kart = document.createElement("div");
      kart.className = "haber-karti";

      kart.innerHTML = `
        <img src="${haber.urlToImage}" alt="Haber Görseli">
        <h3>${haber.title}</h3>
        <p><a href="detail.html?id=${index}">Devamını oku</a></p>
      `;

      localStorage.setItem(`haber_${index}`, JSON.stringify(haber));
      container.appendChild(kart);
    });
  })
  .catch(error => console.error("Haber verisi alınamadı:", error));
