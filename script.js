function createTable() {
    //Write your code here
	
  let rn=prompt("input number of rows");
  let cn=prompt("input number of columns");

   rn=parseInt(rn)
   cn=parseInt(cn)

	if(isNaN(rn)||isNaN(cn)){
		alert("Invalid input. Please enter numeric values.")
		return
	}

	if (rn <= 0 || cn <= 0) {
        alert("Rows and columns must be greater than 0.");
        return;
    }

	let table=document.getElementById("myTable")

	table.innerHTML="";

	for(let i=0;i<rn;i++){
		let row=document.createElement("tr")
		for(let j=0;j<cn;j++){
			let cell=document.createElement("tr")
			cell.textContent=`ROW - ${i} column-${j}`
			row.append(cell);
		}
		table.append(row)
	}
	
	
}
