import './sass/main.scss';
import menu from './menu.json';
import menuCards from './templates/menu-cards.hbs';

const menuList = document.querySelector('.js-menu');
const cardsMarkup = menuCards(menu);

menuList.insertAdjacentHTML('beforeend', cardsMarkup);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const USER_TOGGLE_THEME = 'user-theme';

const themeSwitch = document.querySelector('#theme-switch-toggle');

function userCheckStorage() {
  const userTheme = localStorage.getItem(USER_TOGGLE_THEME);
  if (userTheme) {
    document.body.classList.add(userTheme);
  } else {
    document.body.classList.add(Theme.LIGHT);
  }
  if (userTheme === Theme.DARK) {
    themeSwitch.checked = true;
  }
}
userCheckStorage();

themeSwitch.addEventListener('change', onChangeTheme);

function onChangeTheme(e) {
  if (e.target.checked) {
    toggleTheme();
    localStorage.setItem(USER_TOGGLE_THEME, Theme.DARK);
  } else {
    toggleTheme();
    localStorage.setItem(USER_TOGGLE_THEME, Theme.LIGHT);
  }
}

function toggleTheme() {
  document.body.classList.toggle(Theme.DARK);
  document.body.classList.toggle(Theme.LIGHT);
}
