function getGrade(mark) {
  if (mark >= 80 && mark <= 100) {
    return "A";
  } else if (mark >= 70 && mark < 80) {
    return "B";
  } else if (mark >= 60 && mark < 70) {
    return "C";
  } else if (mark >= 50 && mark < 60) {
    return "D";
  } else if (mark >= 40 && mark < 50) {
    return "E";
  } else {
    return "F";
  }
}

function isPass(marks) {
  return marks.every((mark) => mark >= 40);
}

function calculateGrade() {
  const subjects = ["Physics", "Chemistry", "Maths", "English", "Computer"];
  const marks = subjects.map((subject) =>
    parseInt(document.getElementById(subject).value, 10)
  );

  for (let i = 0; i < marks.length; i++) {
    if (isNaN(marks[i]) || marks[i] < 0 || marks[i] > 100) {
      document.getElementById(
        "result"
      ).innerHTML = `Please enter a valid mark (0-100) for ${subjects[i]}`;
      return;
    }
  }

  const grades = marks.map((mark) => getGrade(mark));
  const average = marks.reduce((a, b) => a + b) / marks.length;
  const passOrFail = isPass(marks) ? "Pass" : "Fail";

  document.getElementById("result").innerHTML = `
      Marks: ${marks.join(", ")}<br>
      Grades: ${grades.join(", ")}<br>
      Average: ${average.toFixed(2)}<br>
      Result: ${passOrFail}
    `;
}
