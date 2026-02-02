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


// FAQ
const btns = document.querySelectorAll('.p-faq__listBtn');
const answers = document.querySelectorAll('.p-faq__listA');

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const currentBtn = e.target;
        const parent = currentBtn.closest('.p-faq__listItem');
        const currentAnswer = parent.querySelector('.p-faq__listA');
        console.log(currentAnswer);

        const isCurrentOpen = currentBtn.classList.contains('is-open');
        console.log(isCurrentOpen);

        // 全ボタン・アンサーからis-openクラスを削除
        btns.forEach((btn) => {
            btn.classList.remove('is-open');
        });
        answers.forEach((answer) => {
            answer.classList.remove('is-open');
        });

        if (isCurrentOpen) {
            // 開いた状態スタート
            currentBtn.classList.remove('is-open');
            currentAnswer.classList.remove('is-open');
        } else {
            // 閉じた状態スタート
            currentBtn.classList.add('is-open');
            currentAnswer.classList.add('is-open');
        }
    });
});