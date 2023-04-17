const people = async () => {
    try {
        const info = await fetch('https://swapi.dev/api/people/', { method: 'GET' });
        const data = await info.json();
        const character = data.results;
        const array = character.map((character) => ({
            name: character.name,
            gender: character.gender,
            birth_year: character.birth_year,
            skin_color: character.skin_color,
            height: character.height,
            eye_color: character.eye_color
        }));
        console.log(array);
    } catch (err) {
        console.log(err);
    }
}

people();   