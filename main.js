// display in calculator scrreen
function displayContent(content){
    result.value += content
}
// clear data
function clearCalScreen(){
    result.value=""
}
// backspace
function removeCal(){
    result.value=result.value.slice(0,-1)
}
// Evaluate
function calcout(){
    result.value=eval(result.value)
}