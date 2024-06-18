const characters = [
    {
        name: "Albedo",
        element: "Geo",
        weapon: "Sword",
        region: "Mondstadt",
        image: "./assets/img/ui-avataricon-Albedo.png"
    },
    {
        name: "Alhaitham",
        element: "Dendro",
        weapon: "Sword",
        region: "Sumeru",
        image: "./assets/img/ui-avataricon-Alhaitham.png"
    },
    {
        name: "Aloy",
        element: "Cryo",
        weapon: "Bow",
        region: "None",
        image: "./assets/img/ui-avataricon-Aloy.png"
    },
    {
        name: "Arataki Itto",
        element: "Geo",
        weapon: "Claymore",
        region: "Inazuma",
        image: "./assets/img/ui-avataricon-AratakiItto.png"
    },
    {
        name: "Arlecchino",
        element: "Pyro",
        weapon: "Polearm",
        region: "Snezhnaya",
        image: "./assets/img/ui-avataricon-Arlecchino.png"
    },
    {
        name: "Baizhu",
        element: "Dendro",
        weapon: "Catalyst",
        region: "Liyue",
        image: "./assets/img/ui-avataricon-Baizhu.png"
    },
    {
        name: "Chiori",
        element: "Geo",
        weapon: "Sword",
        region: "Inazuma",
        image: "./assets/img/ui-avataricon-Chiori.webp"
    },
    {
        name: "Clorinde",
        element: "Electro",
        weapon: "Sword",
        region: "Fontaine",
        image: "./assets/img/ui-avataricon-Clorinde.webp"
    },
    {
        name: "Cyno",
        element: "Electro",
        weapon: "Polearm",
        region: "Sumeru",
        image: "./assets/img/ui-avataricon-Cyno.png"
    },
    {
        name: "Dehya",
        element: "Pyro",
        weapon: "Claymore",
        region: "Sumeru",
        image: "./assets/img/ui-avataricon-Dehya.png"
    },
    {
        name: "Diluc",
        element: "Pyro",
        weapon: "Claymore",
        region: "Mondstadt",
        image: "./assets/img/ui-avataricon-Diluc.png"
    },
    {
        name: "Eula",
        element: "Cryo",
        weapon: "Claymore",
        region: "Mondstadt",
        image: "./assets/img/ui-avataricon-Eula.png"
    },
    {
        name: "Furina",
        element: "Hydro",
        weapon: "Sword",
        region: "Fontaine",
        image: "./assets/img/ui-avataricon-Furina.png"
    },
    {
        name: "Ganyu",
        element: "Cryo",
        weapon: "Bow",
        region: "Liyue",
        image: "./assets/img/ui-avataricon-Ganyu.png"
    },
    {
        name: "Hu Tao",
        element: "Pyro",
        weapon: "Polearm",
        region: "Liyue",
        image: "./assets/img/ui-avataricon-HuTao.png"
    },
    {
        name: "Jean",
        element: "Anemo",
        weapon: "Sword",
        region: "Mondstadt",
        image: "./assets/img/ui-avataricon-Jean.png"
    },
    {
        name: "Kaedehara Kazuha",
        element: "Anemo",
        weapon: "Sword",
        region: "Inazuma",
        image: "./assets/img/ui-avataricon-KaedeharaKazuha.png"
    },
    {
        name: "Kamisato Ayaka",
        element: "Cryo",
        weapon: "Sword",
        region: "Inazuma",
        image: "./assets/img/ui-avataricon-KamisatoAyaka.png"
    },
    {
        name: "Kamisato Ayato",
        element: "Hydro",
        weapon: "Sword",
        region: "Inazuma",
        image: "./assets/img/ui-avataricon-KamisatoAyato.png"
    },
    {
        name: "Keqing",
        element: "Electro",
        weapon: "Sword",
        region: "Liyue",
        image: "./assets/img/ui-avataricon-Keqing.png"
    },
    {
        name: "Klee",
        element: "Pyro",
        weapon: "Catalyst",
        region: "Mondstadt",
        image: "./assets/img/ui-avataricon-Klee.png"
    },
    {
        name: "Lyney",
        element: "Pyro",
        weapon: "Bow",
        region: "Fontaine",
        image: "./assets/img/ui-avataricon-Lyney.png"
    },
    {
        name: "Mona",
        element: "Hydro",
        weapon: "Catalyst",
        region: "Mondstadt",
        image: "./assets/img/ui-avataricon-Mona.png"
    },
    {
        name: "Nahida",
        element: "Dendro",
        weapon: "Catalyst",
        region: "Sumeru",
        image: "./assets/img/ui-avataricon-Nahida.png"
    },
    {
        name: "Navia",
        element: "Geo",
        weapon: "Claymore",
        region: "Fontaine",
        image: "./assets/img/ui-avataricon-Navia.webp"
    },
    {
        name: "Neuvillette",
        element: "Hydro",
        weapon: "Catalyst",
        region: "Fontaine",
        image: "./assets/img/ui-avataricon-Neuvillette.png"
    },
    {
        name: "Nilou",
        element: "Hydro",
        weapon: "Sword",
        region: "Sumeru",
        image: "./assets/img/ui-avataricon-Nilou.png"
    },
    {
        name: "Qiqi",
        element: "Cryo",
        weapon: "Sword",
        region: "Liyue",
        image: "./assets/img/ui-avataricon-Qiqi.png"
    },
    {
        name: "Raiden Shogun",
        element: "Electro",
        weapon: "Polearm",
        region: "Inazuma",
        image: "./assets/img/ui-avataricon-RaidenShogun.png"
    },
    {
        name: "Sangonomiya Kokomi",
        element: "Hydro",
        weapon: "Catalyst",
        region: "Inazuma",
        image: "./assets/img/ui-avataricon-SangonomiyaKokomi.png"
    },
    {
        name: "Shenhe",
        element: "Cryo",
        weapon: "Polearm",
        region: "Liyue",
        image: "./assets/img/ui-avataricon-Shenhe.png"
    },
    {
        name: "Tartaglia",
        element: "Hydro",
        weapon: "Bow",
        region: "Snezhnaya",
        image: "./assets/img/ui-avataricon-Tartaglia.png"
    },
    {
        name: "Tighnari",
        element: "Dendro",
        weapon: "Bow",
        region: "Sumeru",
        image: "./assets/img/ui-avataricon-Tighnari.png"
    },
    {
        name: "Traveler",
        element: "All",
        weapon: "Sword",
        region: "All",
        image: "./assets/img/ui-avataricon-Traveler.png"
    },
    {
        name: "Venti",
        element: "Anemo",
        weapon: "Bow",
        region: "Mondstadt",
        image: "./assets/img/ui-avataricon-Venti.png"
    },
    {
        name: "Wanderer",
        element: "Anemo",
        weapon: "Catalyst",
        region: "Sumeru",
        image: "./assets/img/ui-avataricon-Wanderer.png"
    },
    {
        name: "Wriothesley",
        element: "Cryo",
        weapon: "Catalyst",
        region: "Fontaine",
        image: "./assets/img/ui-avataricon-Wriothesley.png"
    },
    {
        name: "Xianyun",
        element: "Anemo",
        weapon: "Catalyst",
        region: "Liyue",
        image: "./assets/img/ui-avataricon-Xianyun.png"
    },
    {
        name: "Xiao",
        element: "Anemo",
        weapon: "Polearm",
        region: "Liyue",
        image: "./assets/img/ui-avataricon-Xiao.png"
    },
    {
        name: "Yae Miko",
        element: "Electro",
        weapon: "Catalyst",
        region: "Inazuma",
        image: "./assets/img/ui-avataricon-YaeMiko.png"
    },
    {
        name: "Yelan",
        element: "Hydro",
        weapon: "Bow",
        region: "Liyue",
        image: "./assets/img/ui-avataricon-Yelan.png"
    },
    {
        name: "Yoimiya",
        element: "Pyro",
        weapon: "Bow",
        region: "Inazuma",
        image: "./assets/img/ui-avataricon-Yoimiya.png"
    },
    {
        name: "Zhongli",
        element: "Geo",
        weapon: "Polearm",
        region: "Liyue",
        image: "./assets/img/ui-avataricon-Zhongli.png"
    }
];

//for buttons
const filterBtnsContainer = document.querySelector('.categories');

// Display all characters upon loading
window.addEventListener('DOMContentLoaded', () => {
    displayCharacters(characters);
    displayFilters(characters);
});

// For filtering characters
function addFilterEventListeners() {
    const filterBtns = document.querySelectorAll('.category');
    filterBtns.forEach((btn, index) => {
        // Event Listener for each button
        btn.addEventListener('click', (e) => {
            // Get the data id of the clicked button
            const category = e.currentTarget.dataset.id;
            // Returns an array of filtered characters
            const filteredChar = characters.filter((character) => {
                if (character.element === category) {
                    return character;
                }
            });

            // If the data id of the button clicked is all, then return original array. Else, return filtered array.
            if (category === "All") {
                displayCharacters(characters);
            } else {
                displayCharacters(filteredChar);
            }

            // For styles
            filterBtns.forEach(button => button.classList.remove('active'));
            e.currentTarget.classList.add('active');
        });

        // Set the first button as initially active
        if (index === 0) {
            btn.classList.add('active');
        }
    });
}

function displayCharacters(characterList) {
    let displayCharacters = characterList.map((character) => {
        return `
        <article class="character">
            <div class="photoContainer">
                <img src=${character.image} alt=${character.name} id="photo">
            </div>
            <div class="infoContainer">
                <div>
                    <span class="label">Name: </span>
                    <span id="name">${character.name}</span>
                </div>
                <div>
                    <span class="label">Element: </span>
                    <span id="name">${character.element}</span>
                </div>
                <div>
                    <span class="label">Weapon: </span>
                    <span id="name">${character.weapon}</span>
                </div>
                <div>
                    <span class="label">Region: </span>
                    <span id="name">${character.region}</span>
                </div>
            </div>
        </article>
        `;
    }).join('');

    document.querySelector('.characters').innerHTML = displayCharacters;
}

function displayFilters(characterList) {
    const uniqueCategory = characterList.reduce((computed, char) => {
        if (!computed.includes(char.element)) {
            computed.push(char.element);
        }
        return computed;
    }, ['All']);

    let display = uniqueCategory.map((element) => {
        return `
        <button class="category" data-id="${element}">${element}</button>
        `;
    }).join('');

    filterBtnsContainer.innerHTML = display;
    // Add the filter function
    addFilterEventListeners();
};
