const zespol = [
    { nazwisko: 'Rosiński', imie: 'Konrad', grupa: '1', email: 'mailA@student.ans-elblag.pl', indeks: '11111' },
    { nazwisko: 'Markowski', imie: 'Dawid', grupa: '1', email: '21489@student.ans-elblag.pl', indeks: '21489' }
];

const pola = ['nazwisko', 'imie', 'grupa', 'email', 'indeks'];
for (const pole of pola) {
    document.getElementById(pole).textContent = `${zespol[0][pole]}, ${zespol[1][pole]}`;
}

function pokazDane() {
    const tekst = pola.map(pole => `${pole}: ${document.getElementById(pole).textContent}`).join('\n');
    alert(tekst);
}
document.getElementById('pokazDane').addEventListener('click', pokazDane);

let licznikKlikniec = 0;
document.getElementById('dodajWpis').addEventListener('click', () => {
    licznikKlikniec++;
    const li = document.createElement('li');
    li.textContent = `Kliknięcie nr ${licznikKlikniec}`;
    document.getElementById('lista').append(li);
});
