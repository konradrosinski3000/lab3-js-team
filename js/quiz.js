const questions = [
    { pytanie: 'Ile księżyców ma Ziemia?', odpowiedz: 1 },
    { pytanie: 'Ile księżyców ma Mars?', odpowiedz: 2 },
    { pytanie: 'Ile księżyców ma Wenus?', odpowiedz: 0 }
];

let nrPytania = 0;
let punkty = 0;

function pokazPytanie() {
    document.getElementById('pytanie').textContent = questions[nrPytania].pytanie;
}

document.getElementById('quizForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const pole = document.getElementById('odpowiedz');
    const wpisanaWartosc = pole.value.trim();

    if (wpisanaWartosc !== '' && Number(wpisanaWartosc) === questions[nrPytania].odpowiedz) {
        punkty++;
    }

    pole.value = '';
    nrPytania++;

    if (nrPytania < questions.length) {
        pokazPytanie();
    } else {
        document.getElementById('quizForm').style.display = 'none';
        document.getElementById('wynik').textContent = `Wynik: ${punkty}/${questions.length}`;
    }
});

pokazPytanie();
