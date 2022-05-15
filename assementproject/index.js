var input = document.querySelector("#input");
const form = document.querySelector("#form");
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  var search = form.input.value;
  var res = await axios.get(`https://api.tvmaze.com/search/shows?q=${search}`);
  showdetails(res.data);
  form.input.value = "";
});

const showdetails = (e) => {
  e.map((m) => {
    console.log(m);
    let card = document.createElement("div");
    if (m.show.image) {
      const img = document.createElement("img");
      const id = document.createElement("p");
      const name = document.createElement("p");
      const type = document.createElement("p");
      const runtime = document.createElement("p");
      const language = document.createElement("p");
      const genres = document.createElement("p");
      const scheduled = document.createElement("p");
      const schedulet = document.createElement("p");
      const summary = document.createElement("p");
      const premiered = document.createElement("p");

      card.appendChild(img);
      card.append(id);
      card.append(name);
      card.append(type);
      card.append(runtime);
      card.append(language);
      card.append(genres);
      card.append(scheduled);
      card.append(schedulet);
      card.append(summary);
      card.append(premiered);

      img.src = m.show.image.medium;

      id.innerText = ` Movie ID:->        ${m.show.id}`;
      id.style.color = "blue";
      name.innerText = `Movie Name:->     ${m.show.name}`;
      type.innerText = `Type :->          ${m.show.type}`;
      runtime.innerText = `Runtime:-> ${m.show.runtime}`;
      language.innerText = `Language :->${m.show.language}`;
      genres.innerText = ` Genres :->${m.show.genres}`;
      scheduled.innerText = `Show days :->${m.show.schedule.days}`;
      schedulet.innerText = ` Show timing :->${m.show.schedule.time}`;

      premiered.innerText = `Premiered Date :->${m.show.premiered}`;
    }
    card.style.width="350px"
    card.style.display = "flex";
    card.style.flexDirection = "column";
    card.style.margin = "15px";
    card.style.background = "pink";
    main.appendChild(card);
  });
};
