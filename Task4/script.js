
var selectedRow = null;
function onFormSubmit(){
 
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);
    }
    resetForm();
}

//Retrieve the data
function readFormData(){
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["mobileno"] = document.getElementById("mobileno").value;
    formData["email"] = document.getElementById("email").value;
    /*formData["gender"] = document.getElementById("gender").value;*/
    formData["dob"] = document.getElementById("dob").value;
    formData["dept"] = document.getElementById("dept").value;
    formData["address"] = document.getElementById("address").value;
    return formData;
}

//Insert the data
function insertNewRecord(data){
    var table = document.getElementById('register').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.name;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.mobileno;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.email;

    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.dob;
    var cell5= newRow.insertCell(4);
        cell5.innerHTML = data.dept;
    var cell6= newRow.insertCell(5);
        cell6.innerHTML = data.address;
    var cell7 = newRow.insertCell(6);
        cell7.innerHTML = `<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`
}

//Edit the data
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('name').value = selectedRow.cells[0].innerHTML;
    document.getElementById('mobileno').value = selectedRow.cells[1].innerHTML;
    document.getElementById('email').value = selectedRow.cells[2].innerHTML;
    document.getElementById('dob').value = selectedRow.cells[3].innerHTML;
    document.getElementById('dept').value = selectedRow.cells[4].innerHTML;
    document.getElementById('address').value = selectedRow.cells[5].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.mobileno;
    selectedRow.cells[2].innerHTML = formData.mailid;
    selectedRow.cells[3].innerHTML = formData.dob;
    selectedRow.cells[4].innerHTML = formData.dept;
    selectedRow.cells[5].innerHTML = formData.address;
}

//Delete the data
function onDelete(td){
    if(confirm('Do you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('register').deleteRow(row.rowIndex);
    }
    resetForm();
}

//Reset the data
function resetForm(){
    document.getElementById('name').value = '';
    document.getElementById('mobileno').value = '';
    document.getElementById('email').value = '';
    document.getElementById('dob').value = '';
    document.getElementById('dept').value = '';
    document.getElementById('address').value = '';
}
