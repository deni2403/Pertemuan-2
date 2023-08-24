document.addEventListener('DOMContentLoaded', () => {
  const nama = document.querySelector('#inputName');
  const matkul = document.querySelector('#inputMatkul');
  const grade = document.querySelector('#grade');
  const form = document.querySelector('#student-form');
  const resetButton = document.querySelector('.btn-reset');
  const students = [];

  resetButton.addEventListener('click', (event) => {
    event.preventDefault();
    resetData();
    students.splice(0, students.length)
    console.log(students);
  })

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    saveData();
    showTableData(students);
    console.log(students);
  });

  function saveData() {
    const student = {
      nama: nama.value,
      matkul: matkul.value,
      grade: grade.options[grade.selectedIndex].text,
      nilai: parseFloat(grade.value).toFixed(2),
    };
    students.push(student);
  }

});

function showTableData(students) {
  const resultContainer = document.querySelector('#students-data');
  resultContainer.innerHTML = `
    <tr>
        <th>Nama</th>
        <th>Mata Kuliah</th>
        <th>Grade</th>
        <th>Nilai Rata-rata</th>
    </tr>
  `;

  students.forEach((student) => {
    resultContainer.innerHTML += `
        <tr>
            <td>${student.nama}</td>
            <td>${student.matkul}</td>
            <td>${student.grade}</td>
            <td>${student.nilai}</td>
        </tr>
    `;
  });
}

function resetData(){
  const resultContainer = document.querySelector('#students-data');
  resultContainer.innerHTML = `
    <tr>
        <th>Nama</th>
        <th>Mata Kuliah</th>
        <th>Grade</th>
        <th>Nilai Rata-rata</th>
    </tr>
  `;
}
