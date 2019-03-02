function countName(students, name) {
    let count = 0;
    for (let i = 0; i < students.length; i++) {
        if (students[i].name == name) {
            count++;
        }
    }
    return count;
}
 let student = [
    {
        id: 1,
        name: 'name1'
    },
    {
        id: 100000,
        name: 'name2'
    },
    {
        id: 2,
        name: 'name3'
    },
    {
        id: 100000,
        name: 'name2'
    },
    {
        id: 2,
        name: 'name1'
    },
    {
        id: 100000,
        name: 'name2'
    },
    {
        id: 3,
        name: 'name1'
    },
    {
        id: 4,
        name: 'name2'
    }
];
 alert(countName(student, 'name24000'));
alert(countName(student, 'name1'));
 alert(countName(student, 'name3'));
alert(countName(student, 'name2')); 