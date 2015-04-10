var x = function(){
    console.log("hello");
};


x();

var onClick = function(e){
    console.log(e);
};


setTimeout(function(){
    console.log("waited 4000ms");
}, 4000);

console.log("After calling y");
