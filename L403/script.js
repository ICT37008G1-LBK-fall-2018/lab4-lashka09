function getDiff(students) {

   
    let list = [students[0].name]; 
    for (let i = 0; i < students.length; i++) {
       if(list.indexOf(students[i].name) == -1) {
             list.push(students[i].name);
       }
    
    }



    return list;
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


alert(getDiff(student));