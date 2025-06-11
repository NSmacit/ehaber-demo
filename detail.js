const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');


const haberVerisi = localStorage.getItem(`haber_${id}`);
const haber = JSON.parse(haberVerisi);

const detayDiv = document.getElementById("haber-detay");

if(haber) {
    detayDiv.innerHTML = `
    <h2>${haber.title}</h2>
    <img src="${haber.urlToImage}" alt="Haber Gorseli" style="max-width:100%; height:auto;">
    <p><strong>${haber.author || 'bilinmeyen yazar'}</strong></p>
    <p>${haber.content || 'icerik bulunamadi.'}</p>
    <a href = "${haber.url}" target="_blank">orijinal haberi oku</a>
    `;
} else {
  detayDiv.innerHTML = `<p>haber bulunamadi.</p>`;
}