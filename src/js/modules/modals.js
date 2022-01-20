const modals = () => {

  const openModal = element => {
    element.style.display = 'block';
    document.body.style.overflow = 'hidden';
    // document.body.classList.add('modal-open');
  }

  const closeModal = element => {
    element.style.display = 'none';
    document.body.style.overflow = '';
    // document.body.classList.remove('modal-open');
  }

  const bindModal = (triggerSelector, modalSelector, closeSelector) => {
    const triggers = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);
    const close = modal.querySelector(closeSelector);

    triggers.forEach(trigger => {
      trigger.addEventListener('click', event => {
        event.target ? event.preventDefault() : null;
        openModal(modal);
      });
    });

    close.addEventListener('click', () => closeModal(modal));

    modal.addEventListener('click', event => {
      if(event.target === modal) {
        closeModal(modal);
      }
    });
  }

  const showModalByTime = (selector, time) => {
    const timerId = setTimeout(() => {
      openModal(document.querySelector(selector));
      clearTimeout(timerId);
    }, time);
  }

  bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_close');
  bindModal('.phone_link', '.popup', '.popup_close');
  // showModalByTime('.popup', 60000);
}

export default modals;