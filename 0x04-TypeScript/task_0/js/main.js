var studentOne = {
    firstName: "John",
    lastName: "Doe",
    age: 36,
    location: "Elysium"
};
var studentTwo = {
    firstName: "Jane",
    lastName: "Doe",
    age: 30,
    location: "Nibiru"
};
var studentsList = [studentOne, studentTwo];
// Select the table body
var tableBody = document.querySelector("#students-table tbody");
studentsList.forEach(function (student) {
    var row = document.createElement("tr");
    var firstNameCell = document.createElement("td");
    var locationCell = document.createElement("td");
    firstNameCell.textContent = "".concat(student.firstName);
    locationCell.textContent = "".concat(student.location);
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tableBody.appendChild(row);
});
