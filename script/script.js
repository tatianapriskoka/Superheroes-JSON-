import { jsonHeroes } from './JSON.js';

const main = document.querySelector('.container');

const superHeroes = JSON.parse(jsonHeroes);

document.addEventListener('DOMContentLoaded', function (event) {
    // заполнение страницы контентом
    let content = '';
    for (let hero of superHeroes) {
        content += `
        <div class="hero">
        <h2 class="hero__name">${hero.name}</h2>
        <div class="hero__universe">Вселенная: ${hero.universe}</div>
        <div class="hero__alter">Альтерэго: ${hero.alterego}</div>
        <div class="hero__work">Род деятельности: ${hero.occupation}</div>
        <div class="hero__friends">Друзья: ${hero.friends}</div>
        <div class="hero__power">Суперсилы: ${hero.superpowers}</div>
        <div class="hero__info">Информация: ${hero.info}</div>
        <div class="hero__image"><image src = '${hero.url}' alt = 'superheroimage' width = 500px; height = 300px;></div>
              
        <div id = "${hero.name}" class="rating-area">
	<input type="radio" id="star-5${hero.name}" name="rating" value="5">
	<label for="star-5${hero.name}" title="Оценка «5»"></label>	
	<input type="radio" id="star-4${hero.name}" name="rating" value="4">
	<label for="star-4${hero.name}" title="Оценка «4»"></label>    
	<input type="radio" id="star-3${hero.name}" name="rating" value="3">
	<label for="star-3${hero.name}" title="Оценка «3»"></label>  
	<input type="radio" id="star-2${hero.name}" name="rating" value="2">
	<label for="star-2${hero.name}" title="Оценка «2»"></label>    
	<input type="radio" id="star-1${hero.name}" name="rating" value="1">
	<label for="star-1${hero.name}" title="Оценка «1»"></label>
    </div>
    
    </div>
        `
    }
    main.innerHTML = content;
    // функция для сохранения данных в локальном хранилище
    for (let hero of superHeroes) {
        const choice = document.getElementById(`${hero.name}`);
        choice.onclick = function (el) {
            const rating = el.target.value;
            window.localStorage.setItem(`${hero.name}`, rating)
        };
    }
});

// удаление данных из хранилища
window.localStorage.clear();