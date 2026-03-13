

fetch('/static/data.json')
.then(res => res.json())
.then(data =>{
    let activeIndex = -1;
    let currentResults = [];


    const characters = Object.values(data.characters);
    console.log(characters);

    const userInput = document.querySelector('.search-box');
    const resultsBox = document.querySelector('.search-results');

    userInput.addEventListener('input',()=>{
        const value = userInput.value.toLowerCase().trim();
        resultsBox.innerHTML = '';

        if (value === ''){
            resultsBox.style.display = 'none';
            return;
        }

        const filtered = characters.filter(character =>{
            return character.name.toLowerCase().includes(value);
        });

        if (filtered.length === 0){
            resultsBox.style.display = 'none';
            return;
        }

        filtered.forEach(char =>{

            const div = document.createElement('div');
            div.innerHTML = `
                <a href="article.html?id=${char.id}">
                    ${char.name}
                </a>
            `;

            div.addEventListener('click', ()=>{
                window.location.href = `article.html?id=${char.id}`;
            });
            resultsBox.appendChild(div);

            
        })

        resultsBox.style.display = 'block';

        currentResults = Array.from(resultsBox.querySelectorAll('div'));
    });



    userInput.addEventListener('keydown',e=>{
        const key = e.key;
        if (resultsBox.style.display === 'none' || currentResults.length === 0){
            return;
        }

        if (key === 'ArrowDown'){
            activeIndex = (activeIndex + 1) % currentResults.length;
            updateActiveItem();
            e.preventDefault();
        } else if (key === 'ArrowUp'){
            activeIndex = (activeIndex - 1 + currentResults.length) % currentResults.length;
            updateActiveItem();
            e.preventDefault();
        } else if(key === 'Enter' && activeIndex !== -1){
            const link = currentResults[activeIndex].querySelector('a');
            if (link) {
                window.location.href = link.href;
            }
        }

        function updateActiveItem(){
            currentResults.forEach((item,i)=>{
                item.classList.toggle('active',i===activeIndex);
            })
        }
    })
})