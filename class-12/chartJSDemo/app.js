'use strict';

const ctx = document.getElementById('chart').getContext('2d');

const data = [1, 2, 3, 4, 5, 6];
const labelColors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

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