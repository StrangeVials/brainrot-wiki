fetch('/partials/header')
        .then(response => response.text())
        .then(html => {
            document.getElementById('header-placeholder').innerHTML = html;
        });

fetch('/static/data.json')
    .then(response => response.json())
    .then(data =>{
    const container = document.querySelector('.character-list');
    const charArray = Object.values(data.characters);

    container.innerHTML = '';
    let html = '';
    charArray.forEach(char =>{
        html +=                             `
            <a href="article.html?id=${char.id}">
                <div class="character-container">
                    <div class="image-container">
                        <img src="static/${char.image}" alt="${char.name}">
                    </div>
                    <div class="description">
                        <p class="name">${char.name}</p>
                    </div>
                </div>
            </a>
            `;
        })
        container.innerHTML = html; 
    });