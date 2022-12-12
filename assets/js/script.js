var $closebutton = document.querySelector(".btn-close");
$closebutton.addEventListener('click', function () {
  document.getElementById("navbarSupportedContent").classList.add("d-none"); 
});

var $openbutton = document.querySelector(".navbar-toggler");
    $openbutton.addEventListener('click', function () {	    
    document.getElementById("navbarSupportedContent").classList.remove("d-none");
});

(function() {
    document.querySelector('.dropdownone').addEventListener('click', function() {
      this.parentNode.parentNode.classList.toggle('open')
    }, false);
    document.querySelector('.dropdowntwo').addEventListener('click', function() {
        this.parentNode.parentNode.classList.toggle('open')
      }, false);
})();