(function() {
    document.querySelector('.dropdownone').addEventListener('click', function() {
      this.parentNode.parentNode.classList.toggle('open')
    }, false);
    document.querySelector('.dropdowntwo').addEventListener('click', function() {
        this.parentNode.parentNode.classList.toggle('open')
      }, false);
})();