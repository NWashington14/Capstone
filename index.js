import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
    ${Header(state)}
    ${Nav(store.Links)}
    ${Main(state)}
    ${Footer()}
  `;
  afterRender(state);
  router.updatePageLinks();
}

function afterRender(state) {
  // add menu toggle to bars icon in nav bar
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });

  if (state.view === "Home" || state.view === "Findproduct") {
    document
      .querySelector("#search-product")
      .addEventListener("submit", event => {
        event.preventDefault();

        const inputList = event.target.elements;
        console.log("Input List: ", inputList.txtFind.value);
        let query = inputList.txtFind.value;
        axios
          .get(`${process.env.MONEY_SEARCH_API}/products?item=${query}`)
          .then(response => {
            console.log("response: ", response);
            store.Findproduct.products = response.data;
            router.navigate("/Findproduct");
          });
        // axios
        //   .post(`${process.env.ROOTINE_API}/rewards`, requestData)
        //   .then(response => {
        //     store.Rewards.rewards.push(response.data);
        //     router.navigate("/Rewards");
        //   })
        //   .catch(error => {
        //     console.log("Error: ", error);
        //   });
      });
  }
}

router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";
    switch (view) {
      case "Home":
        // axios
        //   .get(
        //     `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=st%20louis`
        //   )
        //   .then(response => {
        //     const kelvinToFahrenheit = kelvinTemp =>
        //       Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);
        //     store.Home.weather = {
        //       city: response.data.name,
        //       temp: kelvinToFahrenheit(response.data.main.temp),
        //       feelsLike: kelvinToFahrenheit(response.data.main.feels_like),
        //       description: response.data.weather[0].main
        //     };
        //     done();
        //   })
        //   .catch(err => {
        //     console.log(err);
        //     done();
        //   });
        // axios
        //   .get(`${process.env.MONEY_SEARCH_API}/products`)
        //   .then(response => {
        //     console.log("response: ", response);
        //     store.Home.recent = response.data;
        //     done();
        //   })
        //   .catch(err => {
        //     console.log(err);
        //   });

        axios
          .all([
            axios.get(
              `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=st%20louis`
            ),
            axios.get(`${process.env.MONEY_SEARCH_API}/products`)
          ])
          .then(
            axios.spread((weatherRes, moneyRes) => {
              const kelvinToFahrenheit = kelvinTemp =>
                Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);
              store.Home.weather = {
                city: weatherRes.data.name,
                temp: kelvinToFahrenheit(weatherRes.data.main.temp),
                feelsLike: kelvinToFahrenheit(weatherRes.data.main.feels_like),
                description: weatherRes.data.weather[0].main
              };
              store.Home.recent = moneyRes.data;
              done();
            })
          )
          .catch((weatherErr, moneyErr) => {
            console.log(
              `Weather error: ${weatherErr}, Money error: ${moneyErr}`
            );
            done();
          });

        break;
      default:
        done();
    }
  },

  already: params => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";
    render(store[view]);
  }
});

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      if (view in store) {
        render(store[view]);
      } else {
        render(store.Viewnotfound);
        console.log(`View ${view} not defined`);
      }
    }
  })
  .resolve();
