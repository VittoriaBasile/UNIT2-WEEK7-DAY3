fetch("https://striveschool-api.herokuapp.com/books")
  .then((response) => response.json())
  .then((libreria) => {
    console.log(libreria);
    const grid = document.getElementById("libreriaContainer");
    grid.innerHTML = "";
    libreria.forEach((libro) => {
      const col = document.createElement("div");
      col.className = "col-4";
      col.innerHTML = `<div id = "card" class="card" style="width: 18rem;">
        <img src="${libro.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${libro.title}</h5>
          <p class="card-text">${libro.price}</p>
          
        </div>
      </div>`;
      grid.appendChild(col);
      const scarta = document.createElement("button");
      col.appendChild(scarta);
      scarta.addEventListener("click", (event) => {
        event.preventDefault();
        col.className = "d-none";
      });
    });
  })
  .catch((error) => console.log("CATCH", error));
