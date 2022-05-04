let switches = document.querySelectorAll('.switch');

for (let i = 0; i < switches.length; i++) {
    switches[i].addEventListener('click', function(event) {
        if (this.classList.contains('switch-active')) {
            this.classList.remove('switch-active');
            this.querySelector('input[type=checkbox]').checked = false
        } else {
            this.classList.add('switch-active');
            this.querySelector('input[type=checkbox]').checked = true
        }
    })
}