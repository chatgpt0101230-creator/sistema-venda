import { initializeApp }
from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";

import {
    getFirestore,
    doc,
    setDoc,
    onSnapshot
}
from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js";

const firebaseConfig = {

    apiKey:
    "AIzaSyBzpZz666Vsuuxx_FvBTIITCxyHJwRx4K0",

    authDomain:
    "organizador-web-58a32.firebaseapp.com",

    projectId:
    "organizador-web-58a32",

    storageBucket:
    "organizador-web-58a32.firebasestorage.app",

    messagingSenderId:
    "868666016791",

    appId:
    "1:868666016791:web:ad99b7ca5f55fac9dd4852"

};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/* ========================================= */
/* AUTO SALVAR NA NUVEM */
/* ========================================= */

window.autoSalvarNuvem = async function () {

    try {

        await setDoc(
            doc(db, "backup", "dados"),
            {
                servicos,
                tarefas,
                clientes,
                data: new Date().toLocaleString()
            }
        );

        console.log("Sincronizado");

    } catch (e) {

        console.log(e);

    }

};

/* ========================================= */
/* SALVAR MANUAL */
/* ========================================= */

window.salvarNuvem = async function () {

    await autoSalvarNuvem();

    alert("Salvo na nuvem!");

};

/* ========================================= */
/* RESTAURAR MANUAL */
/* ========================================= */

window.restaurarNuvem = async function () {

    alert("Sincronização automática ativada.");

};

/* ========================================= */
/* TEMPO REAL */
/* ========================================= */

onSnapshot(
    doc(db, "backup", "dados"),
    (documento) => {

        if (!documento.exists()) return;

        const dados = documento.data();

        const novosServicos =
            JSON.stringify(dados.servicos || []);

        const servicosAtuais =
            JSON.stringify(servicos);

        if (novosServicos !== servicosAtuais) {

            servicos =
                dados.servicos || [];

            tarefas =
                dados.tarefas || [];

            clientes =
                dados.clientes || [];

            localStorage.setItem(
                "servicos",
                JSON.stringify(servicos)
            );

            localStorage.setItem(
                "tarefas",
                JSON.stringify(tarefas)
            );

            localStorage.setItem(
                "clientes",
                JSON.stringify(clientes)
            );

            renderClientes();
            renderServicos();
            renderTarefas();
            updateDashboard();
            renderGrafico();

            console.log(
                "Atualizado em tempo real"
            );

        }

    }
);