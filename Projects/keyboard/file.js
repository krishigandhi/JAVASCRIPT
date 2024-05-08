const insert = document.getElementById('insert');

window.addEventListener('keydown', (f) => {
     insert.innerHTML = `
     <div class="color"> 
     <table>
  <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${f.key === ' ' ? 'Space' : f.key}</td>
    <td>${f.keyCode}</td>
    <td>${f.code}</td>
  </tr>

</table>
</div>
     `
})