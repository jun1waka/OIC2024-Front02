window.addEventListener('DOMContentLoaded', () => {
  const table = document.getElementById('weather-table');

  fetch('https://rimgate.net/kisyou.php')
    .then(response => response.text())
    .then(data => {
      const lines = data.split('\n');
      const headerRow = lines[0].split(',');

      // Create table header
      const thead = document.createElement('thead');
      const headerRowElement = document.createElement('tr');
      headerRow.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRowElement.appendChild(th);
      });
      thead.appendChild(headerRowElement);
      table.appendChild(thead);

      // Create table body
      const tbody = document.createElement('tbody');
      for (let i = 1; i < lines.length; i++) {
        const row = lines[i].split(',');
        const tr = document.createElement('tr');
        row.forEach(cell => {
          const td = document.createElement('td');
          td.textContent = cell;
          tr.appendChild(td);
        });
        tbody.appendChild(tr);
      }
      table.appendChild(tbody);
    })
    .catch(error => console.log(error));
});

$('h1').html('jQueryで書き換え');
