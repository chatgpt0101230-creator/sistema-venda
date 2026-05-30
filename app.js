let servicos =
JSON.parse(localStorage.getItem('servicos')) || [];

let tarefas =
JSON.parse(localStorage.getItem('tarefas')) || [];

let clientes =
JSON.parse(localStorage.getItem('clientes')) || [];

/* TABS */

function showTab(id){ ... }

/* MENU */

function toggleMenu(){ ... }

/* DARK MODE */

function toggleDarkMode(){ ... }

/* SAVE */

function saveData(){ ... }

/* CLIENTES */

function renderClientes(){ ... }

/* SERVIÇOS */

function addServico(){ ... }

function limparCadastro(){ ... }

function renderServicos(){ ... }

function editarServico(id){ ... }

function alterarStatus(id){ ... }

function removerServico(id){ ... }

/* TAREFAS */

function addTarefa(){ ... }

function renderTarefas(){ ... }

function toggleTarefa(id){ ... }

function removerTarefa(id){ ... }

/* BACKUP */

function backupData(){ ... }

/* RESTAURAR */

document.getElementById('restoreFile')
.addEventListener('change', function(e){
...
});

/* EXPORTA FUNÇÕES */

window.showTab = showTab;
window.toggleMenu = toggleMenu;
window.toggleDarkMode = toggleDarkMode;

window.addServico = addServico;
window.editarServico = editarServico;
window.alterarStatus = alterarStatus;
window.removerServico = removerServico;

window.addTarefa = addTarefa;
window.toggleTarefa = toggleTarefa;
window.removerTarefa = removerTarefa;

window.backupData = backupData;

renderClientes();
renderServicos();
renderTarefas();