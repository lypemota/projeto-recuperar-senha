document.querySelector('.recover-button').addEventListener('click', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const cpf = document.getElementById('cpf').value;

    if (email === '' || cpf === '') {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um e-mail válido!');
        return;
    }

    const cpfRegex = /^\d{11}$/;
    if (!cpfRegex.test(cpf)) {
        alert('Por favor, insira um CPF válido (apenas números, 11 dígitos).');
        return;
    }

    alert('Recuperação de senha solicitada com sucesso!');
    document.getElementById('email').value = '';
    document.getElementById('cpf').value = '';
});
