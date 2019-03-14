const Body = document.body;
let quest = prompt(`Какой будет фон у страницы?`);
Body.style.backgroundColor = quest;


const Page = document.querySelector('.page');
let fontcolor = prompt(`Какой будет цвет текста на странице?`);
Page.style.color = fontcolor;


const SpanName = document.querySelector('.name');
let nameValue = prompt(`Как зовут человека, который вас вдохновляет?`);
SpanName.innerHTML = nameValue;


const MainImg = document.querySelector('img');
let newImg = prompt(`Введите адрес картинки`);
MainImg.setAttribute('src', newImg);


const MainshortBio = document.querySelector('p');
let newtext = prompt(`Введите текст страницы`);
MainshortBio.innerHTML = newtext;


const border = document.querySelector('.shortBio');
border.className += ' animated';



