const toggleButton = document.getElementById('toggleButton');
const myDiv = document.getElementById('myDiv');
const tooltip = document.getElementById('tooltip');

toggleButton.addEventListener('click', () => {
    if (myDiv.style.display === 'none') {
         myDiv.style.display = 'block'; // Показать div
    } else {
        myDiv.style.display = 'none';  // Скрыть div
    }
});

/* // Добавление события наведения мыши на кнопку
toggleButton.addEventListener('mouseover', () => {
    tooltip.style.display = 'block'; // Показать подсказку
});

// Добавление события когда мышь покидает кнопку
toggleButton.addEventListener('mouseout', () => {
    tooltip.style.display = 'none'; // Скрыть подсказку
}); */

document.addEventListener('DOMContentLoaded', () => {
    const textBlocks = document.querySelectorAll('.text');
  
    textBlocks.forEach((block) => {
      const paragraph = block.querySelector('.text_p_hover');
      if (paragraph) {
        block.addEventListener('mouseenter', () => {
          paragraph.classList.add('text-hover');
        });
  
        block.addEventListener('mouseleave', () => {
          paragraph.classList.remove('text-hover');
        });
      }
    });
  });


/* document.getElementById("mapLink").openMap = function () {
  window.open("https://yandex.ru/maps/-/CDxKzPLb", "_blank");
  };
 */
/* document.getElementById("mapLink").onclick = function() {
  window.open("https://yandex.ru/maps/-/CDxKzPLb", "_blank");
  }; */

function openMap() {
  window.open("https://yandex.ru/maps/-/CDxKzPLb", "_blank");
  }

function openMap2() {
  window.open("https://yandex.ru/maps/-/CDxK7H5s", "_blank");
    }

function openMap3() {
  window.open("https://yandex.ru/maps/-/CDxK7LnW", "_blank");
    }

function openMap4() {
  window.open("https://yandex.ru/maps/-/CDxK7P2y", "_blank");
    }

function openMap5() {
  window.open("https://yandex.ru/maps/-/CDxoIEz0", "_blank");
    }