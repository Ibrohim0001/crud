function dateForm() {
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let address = document.getElementById("address").value;
  let email = document.getElementById("email").value;

  if (name == "") {
    alert("Name is required");
    return false;
  }

  if (age == "") {
    alert("Age is required");
    return false;
  } else if (age < 1) {
    alert("age must be greater than it ");
    return false;
  }

  if (address == "") {
    alert("Address is required");
    return false;
  }

  if (email == "") {
    alert("Email is required");
    return false;
  } else if (!email.includes("@")) {
    alert("Involid email address");
    return false;
  }
  return true;
}

function showData() {
  let list;
  if (localStorage.getItem("list") === null) {
    list = [];
  } else {
    list = JSON.parse(localStorage.getItem("list"));
  }
  let html = "";
  list.forEach(function (element, index) {
    html += "<tr>";
    html += "<td>" + element.name + "</td>";
    html += "<td>" + element.age + "</td>";
    html += "<td>" + element.address + "</td>";
    html += "<td>" + element.email + "</td>";
    html +=
      '<td><button onclick = "deleteData"(' +
      index +
      ')" class="btn btn-danger">Delete</button>    <button onclick = "updateData(' +
      index +
      ')" class ="btn btn-warning m-2">Edit</button></td>';
    html += "</tr>";
  });

  document.querySelector("#crudTable tbody").innerHTML = html;
}

document.onload = showData();

function AddData() {
  if (dateForm() == true) {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let address = document.getElementById("address").value;
    let email = document.getElementById("email").value;

    let list;
    if (localStorage.getItem("list") == null) {
      list = [];
    } else {
      list = JSON.parse(localStorage.getItem("list"));
    }
    list.push({
      name: name,
      age: age,
      address: address,
      email: email,
    });
    localStorage.setItem("list", JSON.stringify(list));
    showData();
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("address").value = "";
    document.getElementById("email").value = "";
  }
}

function deleteData(index) {
  let list;
  if (localStorage.getItem("list") == null) {
    list = [];
  } else {
    list = JSON.parse(localStorage.getItem("list"));
  }
  list.splice(index, 1);
  localStorage.setItem("list", JSON.stringify(list));
  showData();
}
