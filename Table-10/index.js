document.getElementById('studentData').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const course = document.getElementById('course').value;
    const grid = document.getElementById('grid').value;
    
    const table = document.getElementById('view');
    const newRow = document.createElement('tr');
    
    newRow.innerHTML = `
        <td>${name}</td>
        <td>${course}</td>
        <td>${grid}</td>
    `;
    
    table.appendChild(newRow);
    
    // Clear the form fields
    document.getElementById('studentData').reset();
});
