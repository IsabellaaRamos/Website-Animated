const text = "Este é um exemplo de texto digitando e apagando sozinho!";
    let index = 0;
    let isDeleting = false;
    const typingSpeed = 150;      // Velocidade da digitação
    const deletingSpeed = 100;    // Velocidade da deleção
    const pauseBeforeDeleting = 2000; // Pausa após concluir a digitação
    const pauseBeforeTyping = 500;    // Pausa antes de iniciar a digitação novamente

    function typeWriter() {
      const textSpan = document.getElementById("text");

      if (!isDeleting) {
        // Digita letra por letra
        textSpan.textContent = text.substring(0, index);
        index++;
        if (index > text.length) {
          // Concluiu a digitação, aguarda e inicia a deleção
          isDeleting = true;
          setTimeout(typeWriter, pauseBeforeDeleting);
          return;
        }
        setTimeout(typeWriter, typingSpeed);
      } else {
        // Apaga letra por letra
        textSpan.textContent = text.substring(0, index);
        index--;
        if (index < 0) {
          // Reinicia o ciclo
          isDeleting = false;
          index = 0;
          setTimeout(typeWriter, pauseBeforeTyping);
          return;
        }
        setTimeout(typeWriter, deletingSpeed);
      }
    }

    // Inicia o efeito
    typeWriter();