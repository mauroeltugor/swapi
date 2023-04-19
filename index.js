const apiUrl = 'https://swapi.dev/api/people/'
const cardSection = document.getElementById('template');
const template = document.getElementById('card');

const people = async () => {
    try {
        const info = await fetch(apiUrl, { method: 'GET' });
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
        const gender = card.getElementById('genre');
        const height = card.getElementById('height');
        const birthYear = card.getElementById('year');
        const skinColor = card.getElementById('skin');
        const eyeColor = card.getElementById('eye');
        name.textContent = character.name;
        gender.textContent = `Gender: ${character.gender}`;
        height.textContent = `Height: ${character.height} cm`;
        birthYear.textContent = `Birth year: ${character.birthYear}`;
        skinColor.textContent = `Skin color: ${character.skinColor}`;
        eyeColor.textContent = `Eye color: ${character.eyeColor}`;
        fragment.appendChild(card)
    });
    cardSection.appendChild(fragment);
}

workOnCharacters();