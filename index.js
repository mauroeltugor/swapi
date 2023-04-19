const apiUrl = 'https://swapi.dev/api/people/'
const cardSection = document.getElementById('card');
const template = document.getElementById('template');

const people = async () => {
    try {
        const info = await fetch(apiUrl);
        const data = await info.json();
        const character = data.results;
        const charactersData = character.map((character) => ({
            name: character.name,
            gender: character.gender,
            birth_year: character.birth_year,
            skin_color: character.skin_color,
            height: character.height,
            eye_color: character.eye_color,
        }));
        console.log(charactersData);
        return charactersData
    } catch (err) {
        console.log(err);
    }
}

const workOnCharacters = async () =>{
    const getCharacters = await people()
    const fragment = document.createDocumentFragment();
    getCharacters.slice(0, 10).forEach((character) => {
        const card = template.content.cloneNode(true);
        const name = card.getElementById('name');
        const genre = card.getElementById('genre');
        const height = card.getElementById('height');
        const birthYear = card.getElementById('year');
        const skinColor = card.getElementById('skin');
        const eyeColor = card.getElementById('eye');
        const img = card.getElementById('image');
        if(character.gender === 'male'){
            img.src = './images/male1.jpg';
        }else if(character.gender === 'female'){
            img.src = './images/female1.webp';
        }else{
            img.src = 'https://static.vecteezy.com/system/resources/previews/005/217/482/non_2x/the-question-mark-in-a-circle-black-icon-vector.jpg';
        }
        name.textContent = character.name;
        genre.textContent = `Gender: ${character.gender}`;
        height.textContent = `Height: ${character.height} cm`;
        birthYear.textContent = `Birth year: ${character.birth_year}`;
        skinColor.textContent = `Skin color: ${character.skin_color}`;
        eyeColor.textContent = `Eye color: ${character.eye_color}`;
       
        fragment.appendChild(card)
    });
    cardSection.appendChild(fragment);
}

workOnCharacters();
