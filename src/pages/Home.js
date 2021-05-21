import getData from "../utils/getData.js";

const Home = async () => {
	const characters = await getData();

	const view = `
    <div class="Characters">
      ${characters.results
				.map(
					(character) => `
            <article class="Characters-item">
              <a href="#/${character.id}">
                <img src="${character.image}" alt="${character.name}" />
                <h2>${character.name}</h1>
              </a>
            </article>
      `
				)
				.join("")}
    </div>
  `;
	return view;
};

export default Home;
