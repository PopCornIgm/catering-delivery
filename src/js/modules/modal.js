function closeModal(modalSelector) {
  const modal = document.querySelector(modalSelector);

  modal.classList.add('hide');
  modal.classList.remove('show');
  document.body.style.overflow = '';
}
function openModal(modalSelector, modalTimerId) {
  const modal = document.querySelector(modalSelector);

  modal.classList.add('show');
  modal.classList.remove('hide');
  document.body.style.overflow = 'hidden';
  console.log(modalTimerId);
  if (modalTimerId) {
    clearInterval(modalTimerId);
  }
}

function modal(triggerSelector, modalSelector, modalTimerId) {
  const modalTriger = document.querySelectorAll(triggerSelector),
    modal = document.querySelector(modalSelector);

  modalTriger.forEach((btn) => {
    btn.addEventListener('click', () => openModal(modalSelector, modalTimerId));
    // изначально функцию вы записываем сюда,  в последствии вынесем ее в отдельную функцию openModal
    // modal.classList.add('show');
    // modal.classList.remove('hide');
    // document.body.style.overflow = 'hidden';
    // });
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.getAttribute('data-close') == '') {
      closeModal(modalSelector);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && modal.classList.contains('show')) {
      closeModal(modalSelector);
    }
  });
  // закоментируем тайм аут на время работы

  function showModalByScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
      openModal(modalSelector, modalTimerId);
      window.removeEventListener('scroll', showModalByScroll);
    }
  }

  window.addEventListener('scroll', showModalByScroll);

  fetch('http://localhost:3000/menu')
    .then((data) => data.json())
    .then((res) => console.log(res));
}
// module.exports = modal;
export default modal;
export { closeModal };
export { openModal };
