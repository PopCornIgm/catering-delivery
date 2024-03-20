'use strict';

window.addEventListener('DOMContentLoaded', () => {
  let tabs = document.querySelectorAll('.tabheader__item'),
    tabsContent = document.querySelectorAll('.tabcontent'),
    tabsParent = document.querySelector('.tabheader__items');

  function hideTabContent() {
    tabsContent.forEach((item) => {
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
    });

    tabs.forEach((item) => {
      item.classList.remove('tabheader__item_active');
    });
  }

  function showTabContent(i = 0) {
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active');
  }
  hideTabContent();
  showTabContent();

  tabsParent.addEventListener('click', function (event) {
    const target = event.target;

    if (target && target.classList.contains('tabheader__item')) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });

  // Timer

  const deadline = ' 2025-02-02';

  function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
      days = Math.floor(t / (1000 * 60 * 60 * 24)),
      hours = Math.floor(((t / 1000) * 60 * 60) % 24),
      minutes = Math.floor((t / 1000 / 60) % 60),
      seconds = Math.floor((t / 1000) % 60);

    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0 ${num}`;
    } else {
      return num;
    }
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector('#days'),
      hours = timer.querySelector('#hours'),
      minutes = timer.querySelector('#minutes'),
      seconds = timer.querySelector('#seconds'),
      timeInterval = setInterval(updateClock, 1000);
    updateClock();

    function updateClock() {
      const t = getTimeRemaining(endtime);

      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }
  setClock('.timer', deadline);

  // Modal
  const modalTriger = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector('.modal');

  function openModal() {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    clearInterval(modalTimerId);
  }

  modalTriger.forEach((btn) => {
    btn.addEventListener('click', openModal);
    // изначально функцию вы записываем сюда,  в последствии вынесем ее в отдельную функцию openModal
    // modal.classList.add('show');
    // modal.classList.remove('hide');
    // document.body.style.overflow = 'hidden';
    // });
  });

  function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.getAttribute('data-close') == '') {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && modal.classList.contains('show')) {
      closeModal();
    }
  });
  // закоментируем тайм аут на время работы
<<<<<<< HEAD
  const modalTimerId = setTimeout(openModal, 50000);
=======
  const modalTimerId = setTimeout(openModal, 3000);
>>>>>>> 4813a8386df0cad2e0b6c72769b2ba608d02edab

  function showModalByScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
      openModal();
      window.removeEventListener('scroll', showModalByScroll);
    }
  }

  window.addEventListener('scroll', showModalByScroll);
  // использование классов для карточек

  //   class MenuCard {
  //     constructor(src, alt, title, descr, price, parentSelector) {
  //       this.src = src;
  //       this.alt = alt;
  //       this.title = title;
  //       this.descr = descr;
  //       this.price = price;
  //       this.parent = document.querySelector(parentSelector);
  //       this.transfer = 75;
  //       this.changeToRub();
  //     }

  //     changeToRub() {
  //       this.price = this.price * this.transfer;
  //     }

  //     render() {
  //       const element = document.createElement('div');
  //       element.innerHTML = `
  //             <div class="menu__item">
  //                 <img src=${this.src} alt=${this.alt}>
  //                 <h3 class="menu__item-subtitle">${this.title}</h3>
  //                 <div class="menu__item-descr">${this.descr}</div>
  //                 <div class="menu__item-divider"></div>
  //                 <div class="menu__item-price">
  //                     <div class="menu__item-cost">Цена:</div>
  //                     <div class="menu__item-total"><span>${this.price}</span> Руб/день</div>
  //                 </div>
  //             </div>
  //         `;
  //       this.parent.append(element);
  //     }
  //   }

  //   new MenuCard(
  //     'img/tabs/vegy.jpg',
  //     'vegy',
  //     'Меню "Фитнес"',
  //     'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
  //     9,
  //     '.menu .container'
  //   ).render();
  //

  // Стандартная запись
  // const div = new MenyCard(
  //   'img/tabs/vegy.jpg',
  //   'vegy',
  //   'Меню "Фитнес"',
  //   'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
  //   50,
  //   '.menu.container'
  // );
  // div.render();

  // Создаем обект вот таким способом и сразу же вызываем на нем метод рендер?Мы его создали, на нем использовался метод и все, после этого он исчезает так как на него нет ссылок больше

  // new MenyCard(
  //   'img/tabs/vegy.jpg',
  //   'vegy',
  //   'Меню "Фитнес"',
  //   'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
  //   50,
  //   '.menu.container'
  // ).render();

  class MenuCard {
    constructor(src, alt, title, descr, price, parentSelector, ...classes) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.transfer = 75;
      this.classes = classes;
      this.parent = document.querySelector(parentSelector);
      this.changeToRub();
    }
    changeToRub() {
      this.price = this.price * this.transfer;
    }

    render() {
      const element = document.createElement('div');
      if (this.classes.length === 0) {
        this.element = 'menu__item';
        element.classList.add(this.element);
      } else {
        this.classes.forEach((className) => element.classList.add(className));
      }
      element.innerHTML = `
        <img src=${this.src} alt=${this.alt} />
        <h3 class="menu__item-subtitle">${this.title}</h3>
        <div class="menu__item-descr">${this.descr}</div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
          <div class="menu__item-cost">Цена:</div>
          <div class="menu__item-total"><span>${this.price}</span>Руб/день</div>
        </div>
      `;
      this.parent.append(element);
    }
  }

  const div = new MenuCard(
    'img/tabs/vegy.jpg',
    'vegy',
    "Меню 'Фитнес'",
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов продуктов активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    10,
    ' .menu .container',
    'menu__item'
  );

  div.render();

  new MenuCard(
    'img/tabs/post.jpg',
    'post',
    'Меню "Постное"',
    'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
    20,
    '.menu .container',
    'menu__item'
  ).render();

  new MenuCard(
    'img/tabs/elite.jpg',
    'elite',
    'Меню “Премиум”',
    'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
    30,
    '.menu .container',
    'menu__item'
  ).render();

  // Forms

  // const forms = document.querySelectorAll('form');

  // const message = {
  //   loading: 'Загрузка',
  //   success: 'Cпасибо, скоро  с вами свяжутся',
  //   failure: 'Произошла ошибка',
  // };

  // forms.forEach((item) => {
  //   postData(item);
  // });

  // function postData(form) {
  //   form.addEventListener('sabmit', (e) => {
  //     // убираем стандартное поведение при сабмите
  //     e.preventDefault();

  //     let statusMessage = document.createElement('div');
  //     statusMessage.classList.add('status');
  //     statusMessage.textContent = message.loading;
  //     form.append(statusMessage);

  //     const request = new XMLHttpRequest();
  //     request.open('POST', 'server.php');
  //     request.setRequestHeader('Content-type', 'aplication/json');

  //     const formData = new FormData(form);

  //     const object = {};

  //     formData.forEach(function (value, key) {
  //       object[key] = value;
  //     });
  //     const json = JSON.stringify(object);
  //     request.send(json);

  //     request.addEventListener('load', () => {
  //       if (request.status === 200) {
  //         console.log(request.response);
  //         statusMessage.textContent = message.success;
  //         form.reset();
  //         setTimeout(() => {
  //           statusMessage.remove();
  //         }, 2000);
  //       } else {
  //         console.log('request.response');
  //         statusMessage.textContent = message.failure;
  //       }
  //     });
  //   });
  // }

  const forms = document.querySelectorAll('form');
  const message = {
<<<<<<< HEAD
    loading: 'img/form/spinner.svg',
=======
    loading: 'Загрузка...',
>>>>>>> 4813a8386df0cad2e0b6c72769b2ba608d02edab
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так...',
  };

  forms.forEach((item) => {
    postData(item);
  });

  function postData(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

<<<<<<< HEAD
      let statusMessage = document.createElement('img');
      statusMessage.src = message.loading;
      statusMessage.style.cssText = `
      display:block;
      margin: 0 auto;
      `;

      form.insertAdjacentElement('afterend', statusMessage);
=======
      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      statusMessage.textContent = message.loading;
      form.appendChild(statusMessage);
>>>>>>> 4813a8386df0cad2e0b6c72769b2ba608d02edab

      const request = new XMLHttpRequest();
      request.open('POST', 'server.php');
      request.setRequestHeader(
        'Content-type',
        'application/json; charset=utf-8'
      );
      const formData = new FormData(form);

      const object = {};
      formData.forEach(function (value, key) {
        object[key] = value;
      });
      const json = JSON.stringify(object);

      request.send(json);

      request.addEventListener('load', () => {
        if (request.status === 200) {
          console.log(request.response);
<<<<<<< HEAD
          showThanksModal(message.success);
          form.reset();

          statusMessage.remove();
        } else {
          showThanksModal(message.failure);
=======
          statusMessage.textContent = message.success;
          form.reset();
          setTimeout(() => {
            statusMessage.remove();
          }, 2000);
        } else {
          statusMessage.textContent = message.failure;
>>>>>>> 4813a8386df0cad2e0b6c72769b2ba608d02edab
        }
      });
    });
  }
<<<<<<< HEAD

  function showThanksModal(message) {
    const prevModalDialog = document.querySelector('.modal__dialog');

    prevModalDialog.classList.add('hide');
    openModal();

    const thanksModal = document.createElement('div');
    thanksModal.classList.add('.modal__dialog');
    thanksModal.innerHTML = `
        <div class= "modal__content">
        <div class = "modal__close" data close>×</div>
        <div class =" modal__title"> </div> ${message}
        </div>
      `;

    document.querySelector('.modal').append(thanksModal);
    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.add('show');
      prevModalDialog.classList.remove('hide');
      closeModal();
    }, 10000);
  }
=======
>>>>>>> 4813a8386df0cad2e0b6c72769b2ba608d02edab
});
