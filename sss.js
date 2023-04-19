const apiUrl = 'https://swapi.dev/api/people/';
const cardSection = document.getElementById('card');
const template = document.getElementById('template');

const getCharacters = async () => {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const characters = data.results;
    const characterData = characters.map((character) => ({
      name: character.name,
      gender: character.gender,
      height: character.height,
      birthYear: character.birth_year,
      skinColor: character.skin_color,
      eyeColor: character.eye_color,

    }));
    return characterData;
  } catch (error) {
    console.log(error);
  }
};

const displayCharacters = async () => {
  const characters = await getCharacters();
  const fragment = document.createDocumentFragment();
  characters.slice(0, 10).forEach((character) => {
    const card = template.content.cloneNode(true);
    const image = card.querySelector('.image');
    const name = card.querySelector('.name');
    const gender = card.querySelector('.gender');
    const height = card.querySelector('.height');
    const birthYear = card.querySelector('.birth-year');
    const skinColor = card.querySelector('.skin-color');
    const eyeColor = card.querySelector('.eye-color');
    image.src = character.imageUrl;
    name.textContent = character.name;
    gender.textContent = `Gender: ${character.gender}`;
    height.textContent = `Height: ${character.height} cm`;
    birthYear.textContent = `Birth year: ${character.birthYear}`;
    skinColor.textContent = `Skin color: ${character.skinColor}`;
    eyeColor.textContent = `Eye color: ${character.eyeColor}`;
    fragment.appendChild(card);
  });
  cardSection.appendChild(fragment);
};

displayCharacters();
