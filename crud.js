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
      '<td><button onclick = "deleteData(' +
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

function updateData(index) {
  console.log("edit clicked");
  document.getElementById("submit").style.display = "none";
  document.getElementById("update").style.display = "block";

  let list;
  if (localStorage.getItem("list") == null) {
    list = [];
  } else {
    list = JSON.parse(localStorage.getItem("list"));
  }

  document.getElementById("name").value = list[index].name;
  document.getElementById("age").value = list[index].age;
  document.getElementById("address").value = list[index].address;
  document.getElementById("email").value = list[index].email;

  document.querySelector("#update").onclick = function () {
    if (dateForm() == true) {
      list[index].name = document.getElementById("name").value;
      list[index].age = document.getElementById("age").value;
      list[index].address = document.getElementById("address").value;
      list[index].email = document.getElementById("email").value;

      localStorage.setItem("list", JSON.stringify(list));
      showData();

      document.getElementById("name").value = "";
      document.getElementById("age").value = "";
      document.getElementById("address").value = "";
      document.getElementById("email").value = "";

      document.getElementById("submit").style.display = "block";
      document.getElementById("update").style.display = "none";
    }
  };
}
