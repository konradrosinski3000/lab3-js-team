const questions = [
    { pytanie: 'Ile księżyców ma Ziemia?', odpowiedz: 1 },
    { pytanie: 'Ile księżyców ma Mars?', odpowiedz: 2 },
    { pytanie: 'Ile księżyców ma Wenus?', odpowiedz: 0 }
];

function startQuiz() {
    let score = 0;

    for (const question of questions) {
        const answer = prompt(question.pytanie, '');

        if (answer !== null && answer.trim() !== '' && Number(answer) === question.odpowiedz) {
            alert('Prawidłowa odpowiedź!');
            score++;
        } else {
            alert(`Błąd. Prawidłowa odpowiedź to ${question.odpowiedz}`);
        }
    }

    document.getElementById('wynik').textContent = `Wynik: ${score}/${questions.length}`;
}

document.getElementById('startQuiz').addEventListener('click', startQuiz);
