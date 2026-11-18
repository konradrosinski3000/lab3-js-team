const questions = [
    { pytanie: 'Ile księżyców ma Ziemia?', odpowiedz: 1 },
    { pytanie: 'Ile księżyców ma Mars?', odpowiedz: 2 },
    { pytanie: 'Ile księżyców ma Wenus?', odpowiedz: 0 }
];

function startQuiz() {
    let score = 0;
    const question = questions[0];
    const answer = prompt(question.pytanie, '');

    if (Number(answer) === question.odpowiedz) {
        alert('Prawidłowa odpowiedź!');
        score++;
    } else {
        alert(`Błąd. Prawidłowa odpowiedź to ${question.odpowiedz}`);
    }
}

document.getElementById('startQuiz').addEventListener('click', startQuiz);
