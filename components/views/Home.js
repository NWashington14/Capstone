import html from "html-literal";

export default state => html`
  <!-- HEADER -->
  <!-- <header class="header">
    <h1>Money Search</h1>
    <p>This web-site will help you save money.</p>
  </header> -->

  <!-- MAIN -->
  <main class="main">
    <div></div>
    <h2>What is this website about?</h2>
    <p>
      This website is about the best place to get what you want at low price.
      You can also use this website to find what you are looking for and to see
      what is in stock.
    </p>

    <h3>
      The weather in ${state.weather.city} is ${state.weather.description}.
      Temperature is ${state.weather.temp}F, and it feels like
      ${state.weather.feelsLike}F.
    </h3>
  </main>
`;
