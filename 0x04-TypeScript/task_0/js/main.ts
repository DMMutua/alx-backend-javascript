/*
 * TypeChecking Js using the Ts Variation
 */
interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

let studentOne: Student = {
	firstName: "John",
	lastName: "Doe",
	age: 36,
	location: "Elysium"
};

let studentTwo: Student = {
	firstName: "Jane",
	lastName: "Doe",
	age: 30,
	location: "Nibiru"
};

const studentsList: Student[] = [studentOne, studentTwo];

export function createTable(studentsList: Student[]): void {
	const tableBody: HTMLElement = document.querySelector("#students-table tbody")!;

	studentList.forEach((student) => {
		const row = document.createElement("tr");

		const firstNameCell = document.createElement("td");
		const locationCell = document.createElement("td");

		firstNameCell.textContent = `${student.firstName}`;
		locationCell.textContent = `${student.location}`;

		row.appendChild(firstNameCell);
		row.appendChild(locationCell);

		tableBody.appendChild(row);
	});
}
