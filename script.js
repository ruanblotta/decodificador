document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.querySelector('.textBox');
    const btnCript = document.querySelector('.btn-cript');
    const btnDecript = document.querySelector('.btn-decript');
    const msgDisplay = document.querySelector('.right-container h3');
    const errorMsg = 'Nenhuma mensagem encontrada';

    const chave = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat',
    };

    function criptMsg(mensagem) {
        return mensagem.split('').map(char => chave[char] || char).join('');
    }

    function decriptMsg(mensagem) {
        let decriptedMsg = mensagem;
        for (let key in chave) {
            decriptedMsg = decriptedMsg.split(chave[key]).join(key);
        }
        return decriptedMsg;
    }

    function msgAtualizada(mensagem) {
        msgDisplay.textContent = mensagem;
    }

    btnCript.addEventListener('click', () => {
        const texto = textInput.value;
        if (texto) {
            const msgEncriptada = criptMsg(texto);
            msgAtualizada(msgEncriptada);
        }
    });

    btnDecript.addEventListener('click', () => {
        const texto = textInput.value;
        if (texto) {
            const msgDecriptada = decriptMsg(texto);
            msgAtualizada(msgDecriptada);
        }
    });

    msgAtualizada(errorMsg);
});
