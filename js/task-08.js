const formRef = document.querySelector('.login-form');
formRef.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === '' || password.value === '') {
    alert('Заполніть всі поля');
  } else {
    const value = {
      email: email.value,
      password: password.value,
    };
    console.log(value);
    event.currentTarget.reset();
  }
}
