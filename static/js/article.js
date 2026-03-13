        fetch('partials/header')
        .then(response => response.text())
        .then(html => {
            document.getElementById('header-placeholder').innerHTML = html;
        });


        fetch('/static/data.json')
            .then(response => response.json())
            .then(data => {
                const id = new URLSearchParams(window.location.search).get('id');
                const article = data.characters[id];

                if (!article) {
                    document.body.innerHTML = '<h1>Article not found</h1>';
                    return;
                }

                
                document.getElementById('document-title').textContent = article.name;
                document.getElementById('article-name').textContent = article.name;
                document.getElementById('wiki-box-name').textContent = article.name;
                document.getElementById('wiki-image').src = `static/${article.image}`;
                document.getElementById('wiki-image').alt = article.name;
                document.getElementById('age').textContent = article.age;
                document.getElementById('nationality').textContent = article.nationality;
                document.getElementById('friends').textContent = article.friends;
                document.getElementById('enemies').textContent = article.enemies;
                document.getElementById('description').textContent = article.description;
                document.getElementById('biography').textContent = article.bio;
                document.getElementById('abilities').textContent = article.abilities;
                document.getElementById('trivia').textContent = article.trivia;
                const audioElement = document.getElementById('audio');
                audioElement.src = `static/${article.audio}`;

                const button = document.getElementById('sound-effect');
                
            function playAudio(){
                button.disabled = true;
                audioElement.play();

                audioElement.onended = () =>{
                    button.disabled = false;
                };
            };
            button.addEventListener("click",playAudio);
            });


            