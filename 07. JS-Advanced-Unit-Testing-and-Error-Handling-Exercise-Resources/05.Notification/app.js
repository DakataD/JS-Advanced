function notify(message) {
  let div = document.getElementById('notification');
  div.textContent = message;
  div.style.display = 'block';
  div.addEventListener('click',divclick);
  function divclick(){
    div.style.display = 'none';
  }
}