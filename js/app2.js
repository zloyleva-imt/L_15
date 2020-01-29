console.log('App was loaded...');
const users = [
    { email: 'olevchenko@gmail.com', password: '123456789' },
    { email: 'test@test.com', password: '123456789' },
];
const exampleInputEmail1 = document.getElementById('exampleInputEmail1');
const exampleInputPassword1 = document.getElementById('exampleInputPassword1');
const isPasswordValid = password => password.length < 6;
const isEmailValid = email => !email.split('').filter(el => el === '@').length;

const showContent = () => {
    // hide login form
    loginForm.classList.add('hide');
    //Todo: clear login form
    //show content
    content.classList.remove('hide')
}

const hideContent = () => {
    // hide login form
    loginForm.classList.remove('hide');
    //Todo: clear login form
    //show content
    content.classList.add('hide');
}

const attemptUserLogin = ({ email, password }) => {
    return users.filter(userInDB => (userInDB.email === email && userInDB.password === password) ? true : false).length > 0
}

exampleInputEmail1.addEventListener('input', e => {

    // resEmail.innerHTML = e.target.value;

    if (isEmailValid(e.target.value)) {
        // Error
        e.target.classList.add('is-invalid')
        e.target.classList.remove('is-valid')
    } else {
        e.target.classList.remove('is-invalid')
        e.target.classList.add('is-valid')
    }
})

exampleInputPassword1.addEventListener('input', e => {
    if (isPasswordValid(e.target.value)) {
        // Error
        // console.log(e)
        e.target.classList.add('is-invalid')
        e.target.classList.remove('is-valid')
    } else {
        e.target.classList.remove('is-invalid')
        e.target.classList.add('is-valid')
    }
})

loginForm.addEventListener('submit', e => {
    e.preventDefault();

    if (attemptUserLogin({ email: e.target[0].value, password: e.target[1].value })) {
        showContent();
        //set login status in localStorage
        localStorage.setItem('auth', true);
        e.target[0].value = '';
        e.target[0].classList.remove('is-valid')
        e.target[1].value = '';
        e.target[1].classList.remove('is-valid')
    } else {

    }
});

logout.addEventListener('click', () => {
    localStorage.setItem('auth', '');
    hideContent();
})

if(localStorage.getItem('auth')){
    showContent();
}

// eye.addEventListener('click', () => {
//     exampleInputPassword1.setAttribute('type', 'text')
// })