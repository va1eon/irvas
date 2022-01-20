const forms = () => {
  const forms = document.querySelectorAll('form');
  const inputs = document.querySelectorAll('input');
  const phoneInputs = document.querySelectorAll('input[name="user_phone"]');
  const message = {
    loading: 'Загрузка...',
    success: 'Спсибо! Скоро мы с вами свяжемя',
    failure: 'Что-то пошло не так...'
  }

  phoneInputs.forEach(input => {
    input.addEventListener('input', event => {
      const target = event.currentTarget;
      target.value = target.value.replace(/\D/, '');
    });
  });

  const postData = async options => {
    const {url, data, message} = options;
    document.querySelector('.status').textContent = message;

    let result = await fetch(url, {
      method: 'POST',
      body: data
    });

    return await result.text();
  }

  const clearInput = () => {
    inputs.forEach(input => {
      input.value = '';
    });
  }

  forms.forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault();

      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status');

      form.appendChild(statusMessage);

      const formData = new FormData(form);

      postData({
        url: 'assets/server.php',
        data: formData,
        message: message.loading
      }).then(result => {
        console.log(result);
        statusMessage.textContent = message.success;
      }).catch(() => {
        statusMessage.textContent = message.failure;
      }).finally(() => {
        clearInput();
        setTimeout(() => {
          statusMessage.remove();
        }, 5000);
      })
    });
  });
}

export default forms;