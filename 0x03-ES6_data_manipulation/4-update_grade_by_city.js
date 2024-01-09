function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const matchingGrade = newGrades.find((gradeEntry) => gradeEntry.studentId === student.id);

      if (matchingGrade) {
        // If a matching grade entry is found, update the grade
        return { ...student, grade: matchingGrade.grade };
      }
      // If no matching grade entry is found, set grade to 'N/A'
      return { ...student, grade: 'N/A' };
    });
}

export default (updateStudentGradeByCity);
