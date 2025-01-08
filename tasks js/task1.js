//task1

try {
  const arr = new Array(-1);
} catch (error) {
  document.write(error.name + "<br>");
}
// ######################################
//task2
let b = 10;
try {
  x = y + 10;
} catch (error) {
  document.write(error.name + "<br>");
}
// ######################################
//task3
try {
  const a = decodeURI("%%%");
} catch (error) {
  document.write(error.name + "<br>");
}
// ######################################
// task4
let x = 10;
try {
  document.write(x.toUpperCase());
} catch (error) {
  document.write(error.name + "<br>");
}
// ######################################
//task5
try{
    const arr=new Array(-1)
}
catch(error){
    console.log( error.message )
}
try{
    b=y+10
}
catch(error){
    console.log( error.message)
}

try{

    const a=decodeURI("%%%")
}
catch(error){
    console.log( error.message )
}

try{
    document.write(x.toUpperCase())
}
catch(error){
    console.log( error.message)
}
