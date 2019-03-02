const STUDENTS = [
    {
      id: 1,
      name: "Name 1",
      gpa: 2.7
    },
    {
      id: 2,
      name: "Name 1",
      gpa: 2.6
    },
    {
      id: 3,
      name: "Name 2",
      gpa: 1
    },
    {
      id: 4,
      name: "Name 1",
      gpa: 3
    },
    {
      id: 5,
      name: "Name 4",
      gpa: 2.2
    },
    {
      id: 6,
      name: "Name 3",
      gpa: 2.1
    }
  ];
  
  function findGpa(studList, gpa = 2.0) {
    let list = new Set();
  
    studList.forEach(student => {
      if (student.gpa >= gpa) {
        list.add(student.name);
      }
    });
  
    return list;
  }
  
  let students = findGpa(STUDENTS, 1);
  
  students.forEach(student => alert(student));