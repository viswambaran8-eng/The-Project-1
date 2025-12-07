// Generate 30-day production data
const days = Array.from({ length: 30 }, (_, i) => i + 1);

// Battery manufacturing output trend
const visitors = days.map(d =>
  Math.round(15000 + Math.sin(d / 2.5) * 3000 + Math.random() * 1800)
);

// Total cells manufactured
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
        label: "Daily Cell Production",
        data: visitors,
        fill: true,
        tension: 0.35
      }
    ]
  },
  options: {
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true } }
  }
});

/* Plant Utilization Donut */
const occCtx = document.getElementById("occupancyDonut");
new Chart(occCtx, {
  type: "doughnut",
  data: {
    labels: ["Utilized", "Idle"],
    datasets: [{ data: [84, 16] }]
  },
  options: { plugins: { legend: { position: "bottom" } } }
});

/* Revenue Breakdown Bar */
const revCtx = document.getElementById("revenueBar");
new Chart(revCtx, {
  type: "bar",
  data: {
    labels: ["EV Packs", "ESS Systems", "Grid Storage", "R&D"],
    datasets: [
      {
        label: "Revenue ($k)",
        data: [3100, 1400, 480, 120],
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
      "Charge Speed",
      "Life Cycles",
      "Safety",
      "Energy Density"
    ],
    datasets: [
      {
        label: "Performance Score",
        data: [4.8, 4.5, 4.9, 4.7, 4.6],
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
