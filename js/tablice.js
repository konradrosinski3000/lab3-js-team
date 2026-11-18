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
