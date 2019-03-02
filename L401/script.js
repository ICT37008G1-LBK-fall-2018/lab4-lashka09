function test(a, b, c){
    a = prompt("enter numbers");
    b = prompt("enter numbers");
    c = prompt("enter numbers");

if( a < b && a < c){
    alert(a);
}else if(b < a && b < c){
    alert(b);
}else{
    alert(c);
}

}

test();