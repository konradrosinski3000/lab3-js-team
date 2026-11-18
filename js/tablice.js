function wypisz(tekst) {
    const akapit = document.createElement('p');
    akapit.textContent = tekst;
    document.getElementById('tablice').append(akapit);
}

const tablica = ['Wiedźmin', 'Incepcja', 'Matrix', 'Interstellar', 'Gladiator'];
console.log(tablica);
console.table(tablica);
wypisz(`Wybrany element: ${tablica[2]}`);

tablica[tablica.length - 1] = 'Avatar';
console.log('Zmodyfikowany ostatni element:', tablica[tablica.length - 1]);

tablica[5] = 'nowy6';
console.log('Długość po dodaniu przez indeks:', tablica.length);

tablica[tablica.length] = 'nowy7';
console.log('Długość po dodaniu przez length:', tablica.length);

tablica.push('nowy8', 'nowy9', 'nowy10', 'nowy11');
console.log('Długość po push:', tablica.length);

const nowaDlugosc = tablica.unshift('nowy12', 'nowy13');
console.log('Nowa długość po unshift:', nowaDlugosc);

wypisz(`Tablica: ${tablica.join(', ')} (elementów: ${tablica.length})`);

const szukanyElement = 'Matrix';
const czyZawiera = tablica.includes(szukanyElement);
const pozycja = tablica.indexOf(szukanyElement);

wypisz(`Czy tablica zawiera "${szukanyElement}"? ${czyZawiera ? 'Tak' : 'Nie'}, indeks: ${pozycja}`);





const oceny = [
    { przedmiot: 'JavaScript', ocena: 5 },
    { przedmiot: 'Git', ocena: 4 },
    { przedmiot: 'HTML', ocena: 5 },
    { przedmiot: 'CSS', ocena: 3 }
];
wypisz(`Drugi przedmiot: ${oceny[1].przedmiot}: ${oceny[1].ocena}`);

oceny.forEach(item => {
    wypisz(`Przedmiot: ${item.przedmiot}, ocena: ${item.ocena}`);
});
