function modal() {
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
  const modalTimerId = setTimeout(openModal, 50000);

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

  fetch('http://localhost:3000/menu')
    .then((data) => data.json())
    .then((res) => console.log(res));
}
module.exports = modal;
