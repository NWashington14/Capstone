import html from "html-literal";

export default state => html`
  <!-- Main -->
  <main class="main">
    <form action="" id="search-product" method="GET">
      <div class="g-col-12">
        <label for="txtFind" class="from-label">Search for Product :</label>
        <input
          type="txtFind"
          name="txtFind"
          id="txtFind"
          class="from-control"
        />
        <button type="button" class="btn btn-info" id="btnSearch">
          Search
        </button>
      </div>
    </form>

    <div id="userList">
      <table>
        <thead>
          <tr>
            <th colspan="2">item</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Item</td>
            <td>Place</td>
            <td>Price</td>
            <td>Inventory</td>
          </tr>
          ${state.products.map(product => {
            return html`
              <tr>
                <td>${product.item}</td>
                <td>${product.store}</td>
                <td>${product.price}</td>
                <td>${product.inventory}</td>
              </tr>
            `;
          })}
        </tbody>
      </table>
    </div>
  </main>
`;
