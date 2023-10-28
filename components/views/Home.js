import html from "html-literal";
import imgStore from "../image/shopping1.jpg";

export default state => html`
  <!-- HEADER -->
  <!-- <header class="header">
    <h1>Money Search</h1>
    <p>This web-site will help you save money.</p>
  </header> -->

  <!-- MAIN -->
  <main class="main">
    <form action="" id="search-product">
      <div class="g-col-12">
        <label for="txtFind" class="from-label">Search for Product :</label>
        <input type="text" name="txtFind" id="txtFind" class="from-control" />
        <input
          type="submit"
          name="submit"
          value="Submit"
          class="btn btn-info"
          id="btnSearch"
        />
      </div>
    </form>
    <h2>What is this website about?</h2>
    <p>
      This website is about the best place to get what you want at low price.
      You can also use this website to find what you are looking for and to see
      what is in stock.
    </p>

    <img src="${imgStore}" id="imgHolder" alt="" height="400px" width="800px" />

    <div id="userList">
      <h3>History:</h3>
      <div>
        <ul>
          ${state.recent.map(item => {
            console.log(item.item);
            return html`
              <li>
                <strong>${item.item}</strong><span> <button>X</button></span>
              </li>
            `;
          })}
          <!-- ${console.log(state)}; -->
        </ul>
      </div>
    </div>

    <h3>
      The weather in ${state.weather.city} is ${state.weather.description}.
      Temperature is ${state.weather.temp}F, and it feels like
      ${state.weather.feelsLike}F.
    </h3>
  </main>
`;
