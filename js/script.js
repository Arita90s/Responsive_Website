// グローバルナビゲーション
// const globalNav = document.querySelector('.l-header__nav');
const globalNavBtn = document.querySelector('.l-header__navBtn');
const globalNavCloseBtn = document.querySelector('.l-header__navClose');

globalNavBtn.addEventListener('click', () => {
    document.body.classList.add('is-open');
});

globalNavCloseBtn.addEventListener('click', () => {
    document.body.classList.remove('is-open');
});