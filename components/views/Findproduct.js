import html from "html-literal";

export default state => html`
  <!-- Main -->
  <main class="main">
    <form action="" id="search-product">
      <div class="g-col-12">
        <label for="txtFind" class="from-label">Search for Product :</label>
        <input
          type="txtFind"
          name="txtFind"
          id="txtFind"
          class="from-control"
        />
        <input
          type="submit"
          name="submit"
          value="Submit"
          class="btn btn-info"
          id="btnSearch"
        />
        </button>
      </div>
    </form>
    ${
      state.search === ""
        ? html`
            <div id="userList">
              <p>Please Enter something.</p>
              <table>
                <thead>
                  <tr>
                    <th colspan="2">item</th>
                  </tr>
                </thead>
                <tbody>
                  <tr id="userList_empty">
                    <td class="emptyClass">Item</td>
                    <td class="emptyClass">Place</td>
                    <td class="emptyClass">Brand</td>
                    <td class="emptyClass">Price</td>
                    <td class="emptyClass">Inventory</td>
                  </tr>
                </tbody>
              </table>
            </div>
          `
        : html`
            <div id="userList">
              <table>
                <thead>
                  <tr>
                    <th colspan="2">item</th>
                  </tr>
                </thead>
                <tbody>
                  <tr id="userList_show">
                    <td class="showClass">Item</td>
                    <td class="showClass">Place</td>
                    <td class="showClass">Brand</td>
                    <td class="showClass">Price</td>
                    <td class="showClass">Inventory</td>
                  </tr>
                  ${state.products.map(product => {
                    console.log(product);
                    if (product.item === state.search) {
                      return html`
                        <tr id="userList_item">
                          <td class="itemClass">${product.item}</td>
                          <td class="itemClass">${product.store}</td>
                          <td class="itemClass">${product.brand}</td>
                          <td class="itemClass">${product.price}</td>
                          <td class="itemClass">${product.inventory}</td>
                        </tr>
                      `;
                    }
                  })}
                </tbody>
              </table>
            </div>
          `
    }
  </main>
`;
