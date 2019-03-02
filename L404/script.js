function nameFreq(students) {
    let zeroObj =  {
   }
   for (let i = 0; i < students.length; i++) {
       if(zeroObj[students[i].name] == null){
           zeroObj[students[i].name] = 0;
       }
        zeroObj[students[i].name]++;
   }
    
   return zeroObj;
  
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
let result = nameFreq(student);
for( p in result){
   if(result.hasOwnProperty(p)){
       alert(p + ': ' + result[p]);
   }
}