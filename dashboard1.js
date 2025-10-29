var xValues = ["China", "USA", "Germany", "Japan", "India"];
var yValues = [520, 310, 260, 190, 150]; // Battery production in thousands
var barColors = [
  "#052525", // Deep teal (primary)
  "#0a3c3c", // Dark green-teal
  "#2fa39a", // Aqua accent
  "#1b7b72", // Medium teal tone
  "#145858"  // Cool steel teal (contrast)
];

new Chart("myChart1", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      borderColor: "#ffffff", // white separator lines for clarity
      borderWidth: 2,
      data: yValues
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
        labels: {
          color: "#052525",
        }
      },
      title: {
        display: true,
        text: "Global Electric Battery Production Share – 2025",
        color: "#052525",
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const label = context.label || '';
            const value = context.parsed || 0;
            const total = context.chart._metasets[0].total;
            const percentage = ((value / total) * 100).toFixed(1);
            return `${label}: ${value}k units (${percentage}%)`;
          }
        }
      }
    }
  }
});

//////////////////////////////////////////////////////////////////////////////////////
var xValues = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var yValues = [57, 33, 48, 26, 59, 42, 38, 29, 54, 23, 45, 36];
var barColors = ["#033B3B", "#065E5E", "#088C7F", "#0AA68A", "#13BBA0", "#27C9B2", "#3CD9C4", "#5EE2CF", "#00A8A0", "#008B83", "#006D66", "#004F4A"];

new Chart("myChart2", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Production Revenue"
    //   color: 
    }
  }
});3
var xValues = ["January", "February", "March", "April", "May"];
var yValues = [57, 33, 48, 26, 59];
var barColors = [  "#065E5E"];

new Chart("myChart3", {
  type: 'line',
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Production Revenue"
    //   color: 
    }
  }
});2
/*-----------------------------------------------------------------------------------------------------------------*/
var xValues = ["Available", "In Use", "Unavailable"];
var yValues = [145, 65, 15];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
];

new Chart("mychart4", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues,
    }]
  },
  options: {
    title: {
      display: true,
    }
  }
});