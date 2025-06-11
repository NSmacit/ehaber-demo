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