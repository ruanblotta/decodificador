document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.querySelector('.textBox');
    const btnCript = document.querySelector('.btn-cript');
    const btnDecript = document.querySelector('.btn-decript');
    const msgDisplay = document.querySelector('.right-container h3');
    const errorMsg = 'Nenhuma mensagem encontrada';
    const btnCopy = document.querySelector('.btn-copy');

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

    function  copiarAreaDeTransferencia(texto) {
        navigator.clipboard.writeText(texto).then(() => {
            alert('Sua mensagem foi copiada.');
        }).catch(err => {
            alert('Não foi possível copiar a mensagem. Tente novamente');
            console.error('Erro ao copiar', err);
        });
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

    btnCopy.addEventListener('click', () => {
        const texto = msgDisplay.textContent;
        if (texto && texto !== errorMsg) {
            copiarAreaDeTransferencia(texto);
        } else {
            alert('Não há mensagem para copiar.');
        }
 
    });

    msgAtualizada(errorMsg);
});
