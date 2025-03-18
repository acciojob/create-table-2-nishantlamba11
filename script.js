function createTable() {
    // Prompt the user for number of rows and columns
    let rn = prompt("Input number of rows");
    let cn = prompt("Input number of columns");

    rn = parseInt(rn);
    cn = parseInt(cn);

    // Validate input
    if (isNaN(rn) || isNaN(cn)) {
        alert("Invalid input. Please enter numeric values.");
        return;
    }

    if (rn <= 0 || cn <= 0) {
        alert("Rows and columns must be greater than 0.");
        return;
    }

    // Get the table element and clear previous content
    let table = document.getElementById("myTable");
    table.innerHTML = "";

    // Create the table with rows and columns
    for (let i = 0; i < rn; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < cn; j++) {
            let cell = document.createElement("td"); // ✅ Corrected to <td>
            cell.textContent = `ROW - ${i} column-${j}`;
            row.append(cell);
        }
        table.append(row);
    }
}
