const liczbaFormularzy = document.forms.length;
const liczbaObrazkow = document.images.length;
const liczbaLinkow = document.links.length;
const akapityProjekt1 = document.querySelectorAll('#projekt1 p').length;

console.log('Formularze:', liczbaFormularzy);
console.log('Obrazki:', liczbaObrazkow);
console.log('Odnośniki:', liczbaLinkow);
console.log('Akapity w #projekt1:', akapityProjekt1);

const licznikEl = document.getElementById('licznik');
licznikEl.innerHTML = `
    <strong>Podsumowanie elementów strony:</strong><br>
    Formularze na całej stronie: ${liczbaFormularzy}<br>
    Obrazki na całej stronie: ${liczbaObrazkow}<br>
    Odnośniki na całej stronie: ${liczbaLinkow}<br>
    Akapity &lt;p&gt; w sekcji #projekt1: ${akapityProjekt1}
`;

const listaEl = document.getElementById('lista');
const elementyListy = [
    `Liczba formularzy: ${liczbaFormularzy}`,
    `Liczba obrazków: ${liczbaObrazkow}`,
    `Liczba odnośników: ${liczbaLinkow}`
];

for (const tekst of elementyListy) {
    const li = document.createElement('li');
    li.textContent = tekst;
    listaEl.append(li);
}
