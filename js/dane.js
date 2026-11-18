const zespol = [
    { nazwisko: 'Rosiński', imie: 'Konrad', grupa: '1', email: 'mailA@student.ans-elblag.pl', indeks: '11111' },
    { nazwisko: 'Markowski', imie: 'Dawid', grupa: '1', email: '21489@student.ans-elblag.pl', indeks: '21489' }
];

const pola = ['nazwisko', 'imie', 'grupa', 'email', 'indeks'];
for (const pole of pola) {
    document.getElementById(pole).textContent = `${zespol[0][pole]}, ${zespol[1][pole]}`;
}
