// data.js
const orders = [
  {
    id: "ORD-001",
    date: "2025-12-01",
    customer: "Maria Papadopoulou",
    status: "Pending",
    total: 129.90,
    items: [
      { name: "Wireless Mouse", qty: 1, price: 19.90 },
      { name: "Mechanical Keyboard", qty: 1, price: 110.00 }
    ]
  },
  {
    id: "ORD-002",
    date: "2025-12-02",
    customer: "Giorgos Nikolaou",
    status: "Shipped",
    total: 59.00,
    items: [
      { name: "USB-C Charger", qty: 2, price: 29.50 }
    ]
  },
  {
    id: "ORD-003",
    date: "2025-12-03",
    customer: "Eleni Kosta",
    status: "Cancelled",
    total: 39.99,
    items: [
      { name: "Phone Case", qty: 1, price: 19.99 },
      { name: "Screen Protector", qty: 1, price: 20.00 }
    ]
  }
];
