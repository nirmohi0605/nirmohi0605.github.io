const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const sun = document.getElementById('sun');
const moon = document.getElementById('moon');


function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        moon.style.background = "url('switch/moon-white.svg') no-repeat center";
        sun.style.background = "url('switch/sun-white.svg') no-repeat center";
        moon.style.backgroundSize = "100%";
        sun.style.backgroundSize = "100%";

    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        sun.style.background = "url('switch/sun.svg') no-repeat center";
        moon.style.background = "url('switch/moon.svg') no-repeat center";
        moon.style.backgroundSize = "100%";
        sun.style.backgroundSize = "100%";
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);