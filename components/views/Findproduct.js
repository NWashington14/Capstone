import html from "html-literal";

export default state => html`
  <!-- Main -->
  <main class="main">
    <div class="g-col-12">
      <label for="txtFind" class="from-label">Search for Product :</label>
      <input type="txtFind" name="txtFind" id="txtFind" class="from-control" />
      <button type="button" class="btn btn-info" id="btnSearch">Search</button>
    </div>

    <div id="userList"></div>
  </main>
`;
