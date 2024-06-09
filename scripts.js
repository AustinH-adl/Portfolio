function colorNav() {
    var x = window.location.href;
    const list = document.getElementsByClassName("navButton");
    for (let item of list) {
        if(item.href==x) {
            console.log(item)
            item.classList.add("active");
        }
    }
}

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);