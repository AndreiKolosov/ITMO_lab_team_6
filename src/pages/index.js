import '../pages/index.css';
import aspirantImage from '../images/study/Aspirant.png';
import magistrImage from '../images/study/Magistr.png';

const aspiranturaBtn = document.querySelector('#aspirantura');
const magistraturaBtn = document.querySelector('#magistratura');
const educationImage = document.querySelector('.education__image');
magistraturaBtn.classList.toggle('education__button_active');

function activateEducationButton(e) {
    if (e.target === aspiranturaBtn) {
        aspiranturaBtn.setAttribute("disabled", "");
        magistraturaBtn.removeAttribute("disabled", "");
        educationImage.src = aspirantImage;
    }
    else {
        magistraturaBtn.setAttribute("disabled", "");
        aspiranturaBtn.removeAttribute("disabled", "");
        educationImage.src = magistrImage;
    }
    aspiranturaBtn.classList.toggle('education__button_active');
    magistraturaBtn.classList.toggle('education__button_active');
}

aspiranturaBtn.addEventListener('click', activateEducationButton);
magistraturaBtn.addEventListener('click', activateEducationButton);
