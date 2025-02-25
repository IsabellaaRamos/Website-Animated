 // Texto a ser exibido
 const text = "Este é um exemplo de texto digitando e apagando sozinho!";
    
 // Configurações
 let index = 0;
 let isDeleting = false;
 const typingSpeed = 120;      // Velocidade de digitação
 const deletingSpeed = 100;    // Velocidade de deleção
 const pauseBeforeDeleting = 2000; // Pausa após concluir a digitação
 const pauseBeforeTyping = 500;    // Pausa antes de iniciar a digitação novamente

 function typeWriter () {
   const element = document.getElementById("typewriter-text");
   
   if (!isDeleting) {
     // Digita letra por letra
     element.textContent = text.substring(0, index);
     index++;
     if (index > text.length) {
       // Quando terminar de digitar, aguarda e inicia a deleção
       isDeleting = true;
       setTimeout(typeWriter, pauseBeforeDeleting);
       return;
     }
     setTimeout(typeWriter, typingSpeed);
   } else {
     // Apaga letra por letra
     element.textContent = text.substring(0, index);
     index--;
     if (index < 0) {
       // Quando terminar de apagar, reinicia a digitação
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