function disable(button) {
  button.disabled = true;
  button.classList.add("disabled-btn");
  return;
}
function enable(button) {
  button.disabled = false;
  button.classList.remove("disabled-btn");
  return;
}
function loading(button) {
  disable(button);
  button.textContent = "Loading";
}
function stopLoading(button, btnText) {
  enable(button);
  button.textContent = btnText;
}

export { disable, enable, loading, stopLoading };
