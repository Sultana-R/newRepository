
function showAlert() {
  var ageInput = document.getElementById('ageInput').value;


  if (ageInput >= 18) {
    window.alert('You are adult!');
  } else {
    window.alert('You are child!');
  }
}
