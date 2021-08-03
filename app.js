const container = document.querySelector(".container");
const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.eu/rest/v2/name/nepal");
request.send();

// to get response
request.addEventListener("load", function () {
  //   const data = this.responseText;
  //   console.log(this.responseText);
  // to convert json into javascript object
  const [data] = JSON.parse(this.responseText);
  //   console.log(data.name);
  const htmlData = `
  <div class="card">
        <div class="img-card">
          <img src="${data.flag}" alt="" srcset="" />
          <div class="title">
            <h3>${data.name}</h3>

            <h3 class="heading-light">capital: ${data.capital}</h3>
          </div>
        </div>
        <hr />
        <div class="details">
          <div class="detail">
            <h4>${data.nativeName}</h4>
            <h4 class="heading-light">Native Language</h4>
          </div>
          <div class="detail">
            <h4>${data.population}</h4>
            <h4 class="heading-light">Population</h4>
          </div>
          <div class="detail">
            <h4>${data.demonym}</h4>
            <h4 class="heading-light">Demonym</h4>
          </div>
        </div>
      </div>
  `;
  container.insertAdjacentHTML("afterbegin", htmlData);
});
