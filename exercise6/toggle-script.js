document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.getElementById('toggleButton');
  const toggleText = document.getElementById('toggle-text');

  toggle.addEventListener('change', function() {
    if (this.checked) {
      console.log('Toggle is ON');
      toggleText.textContent = 'Try again!';
    } else {
      console.log('Toggle is OFF');
      toggleText.textContent = 'Yay! Nothing happened!'
    }
  });
});
    