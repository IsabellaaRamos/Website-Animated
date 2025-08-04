const text = "Welcome to the Library!";
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

// //  resoolvo isso amanha
// const end_panel = document.querySelector("#panel");
// const end_cv = document.getElementById("magic-dust");
// const end_ctx = end_cv.getContext("2d");
// const resolution = window.devicePixelRatio || 1;
// const sprites = [];
// const toRad = Math.PI / 180;

// gsap.registerPlugin(Physics2DPlugin);

// resizeCv();
// start_fx();

// function start_fx() {
//   // Partículas iniciais
//   init_fx("circle", 300, 10, 20, 10, 20, 0, end_cv.width, 0, end_cv.height, 4, 10, 0, 360, 
//           0.2, 0.8, 0.1, 0.4, 360, 0, 360, 2, 4, 0.1, 0.3, 0.1, 10, -1, 0);
// }

// // Segue o mouse
// document.addEventListener("mousemove", (e) => {
//   const x = e.clientX;
//   const y = e.clientY;
//   createMagicDust(x, y, 5);
// });

// function init_fx(textureSpr, totalSpr, minWidth, maxWidth, minHeight, maxHeight, xMin, xMax, yMin, yMax, veloMin, veloMax, angleMin, angleMax, startScaleMin, startScaleMax, endScaleMin, endScaleMax, rotStart, rotEndMin, rotEndMax, minDur, maxDur, fadeInDur, fadeOutDur, gravitySpr, delaySpr, repeatSpr, delayTl) {
//   for (let i = 0; i < totalSpr; i++) {
//     const texture = createShape(textureSpr, i);
//     sprites.push(createSprite(texture));
//   }
  
//   gsap.ticker.add(renderCv);
// }

// function createMagicDust(x, y, n) {
//   for (let i = 0; i < n; i++) {
//     const texture = createShape("circle", Math.floor(Math.random() * 10));
//     sprites.push(createSprite(texture, x, y, 2));
//   }
// }

// function createSprite(texture, x = null, y = null, t = null) {
//   const width = texture.width / resolution;
//   const height = texture.height / resolution;
//   const duration = t || randomNr(1, 3);
//   const angleNr = randomNr(0, 360);
  
//   const fx_tl = gsap.timeline({
//     delay: t ? 0 : randomNr(0, 1),
//     repeat: t ? 0 : -1,
//     repeatDelay: randomNr(0, 1)
//   });
  
//   const sprite = {
//     animation: fx_tl,
//     texture: texture,
//     width: width,
//     height: height,
//     alpha: 0,
//     rotation: randomNr(0, 360),
//     scale: randomNr(0.2, 0.8),
//     originX: 0.5,
//     originY: 0.5,
//     x: x || randomNr(0, end_cv.width),
//     y: y || randomNr(0, end_cv.height),
//   };

//   fx_tl.add("start", 0)
//     .to(sprite, t ? 0.3 : 0.5, { alpha: 1, ease: "power0.easeIn" }, "start")
//     .to(sprite, duration, {
//       rotation: 180 * randomNr(0, 1),
//       scale: randomNr(0.1, 0.4),
//       physics2D: {
//         velocity: randomNr(4, 12),
//         angle: angleNr,
//         gravity: 0.1,
//       }
//     }, "start")
//     .to(sprite, t ? 1.5 : 0.3, {
//       alpha: 0,
//       delay: t ? 1.5 : duration - 0.3
//     }, 0);

//   return sprite;
// }

// function createShape(textureSpr, i) {
//   const canvas = document.createElement("canvas");
//   const context = canvas.getContext("2d");
//   const widthSpr = randomInt(10, 20);
//   const heightSpr = randomInt(10, 20);
//   canvas.width = widthSpr * resolution;
//   canvas.height = heightSpr * resolution;
//   const radius = widthSpr / 2;
//   const gradient = context.createRadialGradient(radius, radius, 0, radius, radius, radius);

//   // Cores de brilho mágico
//   if (i % 2 === 0) {
//     gradient.addColorStop(0, "rgba(255, 255, 255, 0.9)");
//     gradient.addColorStop(0.2, "rgba(255, 255, 255, 0.2)");
//   } else {
//     gradient.addColorStop(0, "rgba(173, 216, 230, 0.9)");
//     gradient.addColorStop(0.2, "rgba(173, 216, 230, 0.1)");
//   }

//   gradient.addColorStop(0.65, "rgba(0,0,0,0)");
//   context.fillStyle = gradient;
//   context.fillRect(0, 0, widthSpr, heightSpr);

//   return canvas;
// }

// function renderCv() {
//   end_ctx.clearRect(0, 0, end_cv.width, end_cv.height);
//   sprites.forEach(sprite => {
//     if (!sprite.alpha) return;
//     end_ctx.save();
//     const offsetX = sprite.originX * sprite.width;
//     const offsetY = sprite.originY * sprite.height;
//     end_ctx.translate(sprite.x + offsetX, sprite.y + offsetY);
//     end_ctx.rotate(sprite.rotation * toRad);
//     end_ctx.scale(sprite.scale, sprite.scale);
//     end_ctx.globalAlpha = sprite.alpha;
//     end_ctx.drawImage(sprite.texture, -offsetX, -offsetY);
//     end_ctx.restore();
//   });
// }

// function resizeCv() {
//   end_cv.width = window.innerWidth * resolution;
//   end_cv.height = window.innerHeight * resolution;
//   end_ctx.scale(resolution, resolution);
// }

// window.addEventListener("resize", resizeCv);
