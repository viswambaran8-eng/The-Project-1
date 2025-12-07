// Days for production trend (same logic)
const days = Array.from({ length: 30 }, (_, i) => i + 1);

// Production values (battery units)
const visitors = days.map(d =>
  Math.round(12000 + Math.sin(d / 3) * 2500 + Math.random() * 1500)
);

// Total batteries produced
document.getElementById("visitorsTotal").textContent =
  visitors.reduce((a, b) => a + b, 0).toLocaleString();

/* Production Line Chart */
const visitorsCtx = document.getElementById("visitorsLine");
new Chart(visitorsCtx, {
  type: "line",
  data: {
    labels: days.map(d => "Day " + d),
    datasets: [
      {
        label: "Daily Production",
        data: visitors,
        fill: true,
        tension: 0.3
      }
    ]
  },
  options: {
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true } }
  }
});

/* Factory Utilization Donut */
const occCtx = document.getElementById("occupancyDonut");
new Chart(occCtx, {
  type: "doughnut",
  data: {
    labels: ["Utilized", "Idle"],
    datasets: [{ data: [78, 22] }]
  },
  options: { plugins: { legend: { position: "bottom" } } }
});

/* Revenue Breakdown Bar */
const revCtx = document.getElementById("revenueBar");
new Chart(revCtx, {
  type: "bar",
  data: {
    labels: ["EV Packs", "ESS Modules", "Components", "R&D Contracts"],
    datasets: [
      {
        label: "Revenue ($k)",
        data: [2670, 1075, 430, 125],
        barPercentage: 0.6
      }
    ]
  },
  options: { scales: { y: { beginAtZero: true } } }
});

/* Quality Radar Chart */
const radCtx = document.getElementById("sentimentRadar");
new Chart(radCtx, {
  type: "line",
  data: {
    labels: [
      "Thermal Stability",
      "Charge Rate",
      "Life Cycles",
      "Safety",
      "Energy Density"
    ],
    datasets: [
      {
        label: "Avg Score",
        data: [4.7, 4.4, 4.8, 4.6, 4.5],
        fill: true
      }
    ]
  },
  options: {
    scales: {
      r: { min: 0, max: 5, ticks: { stepSize: 1 } }
    }
  }
});
