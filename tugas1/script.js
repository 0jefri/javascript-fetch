fetch("https://lumoshive-academy-media-api.vercel.app/api/games?page=2&search")
  .then(response => response.json())
  .then(data => {
    console.log(data);

    if (Array.isArray(data) && data.length === 0) {
      console.log("Games Not Found");
    } else {
      data.forEach(game => {
        if (game.title && game.thumb && game.desc) {
          console.log(`Title: ${game.title}, Thumbnail: ${game.thumb}, Description: ${game.desc}`);

          const gameList = document.getElementById("list");
          const listItem = document.createElement("li");
          listItem.innerHTML = `
            <h3>${game.title}</h3>
            <img src="${game.thumb}" alt="${game.title}">
            <p>${game.desc}</p>
          `;
          gameList.appendChild(listItem);
        }
      });
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
