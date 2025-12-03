// app.js

const searchInput   = document.getElementById("searchInput");
const statusFilter  = document.getElementById("statusFilter");
const tableBody     = document.getElementById("ordersTableBody");
const detailsPanel  = document.getElementById("orderDetails");
const ordersCountEl = document.getElementById("ordersCount");
const ordersTotalEl = document.getElementById("ordersTotal");

let filteredOrders = orders.slice(); // ξεκινάμε με όλα

function formatCurrency(value) {
  return value.toFixed(2);
}

function renderTable(data) {
  tableBody.innerHTML = "";

  data.forEach(order => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${order.id}</td>
      <td>${order.date}</td>
      <td>${order.customer}</td>
      <td>${order.status}</td>
      <td>${formatCurrency(order.total)}</td>
    `;

    tr.addEventListener("click", () => showDetails(order));
    tableBody.appendChild(tr);
  });

  // summary
  ordersCountEl.textContent = `${data.length} orders`;

  const total = data.reduce((sum, o) => sum + o.total, 0);
  ordersTotalEl.textContent = `Total: €${formatCurrency(total)}`;
}

function showDetails(order) {
  detailsPanel.innerHTML = `
    <h2>Παραγγελία ${order.id}</h2>
    <p><strong>Ημερομηνία:</strong> ${order.date}</p>
    <p><strong>Πελάτης:</strong> ${order.customer}</p>
    <p><strong>Status:</strong> ${order.status}</p>
    <p><strong>Σύνολο:</strong> €${formatCurrency(order.total)}</p>
    <h3>Προϊόντα</h3>
    <ul>
      ${order.items.map(i => `
        <li>${i.qty} × ${i.name} @ €${formatCurrency(i.price)}</li>
      `).join("")}
    </ul>
  `;
}

function applyFilters() {
  const searchValue = searchInput.value.toLowerCase().trim();
  const statusValue = statusFilter.value;

  filteredOrders = orders.filter(order => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchValue) ||
      order.customer.toLowerCase().includes(searchValue);

    const matchesStatus =
      !statusValue || order.status === statusValue;

    return matchesSearch && matchesStatus;
  });

  renderTable(filteredOrders);
}

// event listeners
searchInput.addEventListener("input", applyFilters);
statusFilter.addEventListener("change", applyFilters);

// initial render
renderTable(filteredOrders);
