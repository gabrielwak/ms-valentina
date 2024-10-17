const btnAgendar = document.getElementById('btn-agendar');
const sectionAgendamento = document.getElementById('agendamento');
const formAgendamento = document.getElementById('form-agendamento');

btnAgendar.addEventListener('click', () => {
    sectionAgendamento.style.display = 'block';
});

formAgendamento.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const data = document.getElementById('data').value;
    const hora = document.getElementById('hora').value;
    const servico = document.getElementById('servico').value;

    // Aqui você pode enviar os dados para um servidor ou banco de dados
    console.log(`Agendamento realizado com sucesso!`);
    console.log(`Nome: ${nome}`);
    console.log(`Data: ${data}`);
    console.log(`Hora: ${hora}`);
    console.log(`Serviço: ${servico}`);
});

