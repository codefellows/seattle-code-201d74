'use strict';

const ctx = document.getElementById('chart').getContext('2d');

const data = [1, 2, 3, 4, 5, 6]; // my data points
const labelColors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']; // colors for the columns

// the new chart is looking for 2 values as arguments!
// where? where is the chart going to live on your page
// chart object - all the info about building the chart
// {
//     type:
//     data:
//     options:
// }
// {
//   type: 'bar',
//   data: {
//     labels: labelColors,
//     datasets: [{
//       label: '# of Votes',
//       data: data,
//       backgroundColor: labelColors
//     }]
//   },
//   options: {
//     scales: {
//       yAxes: [{
//         ticks: {
//           beginAtZero:true
//         }
//       }]
//     }
//   }
// }
const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: labelColors,
    datasets: [{
      label: '# of Votes',
      data: data,
      backgroundColor: labelColors
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true
        }
      }]
    }
  }
});