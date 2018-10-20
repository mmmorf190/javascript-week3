// var tmp = {
//     repete3: function(x){
//         for(var i =1; i <=3, i++){
//             x();
//     }
// },


// hello: function(){
//     console.log("Hello");
// }
// }

// function hello(){
//         console.log("Hello");
// }

// tmp.repete3(tmp.hello);


var maths = {
    add: function(x,y){
        return x+y;
    }, 
        subtract: function(x,y){
            return x-y;
    },  divide: function(x,y){
            return x/y;
    },  mulitply: function(x,y){
            return x*y;
    } 
    
}

console.log(maths.add(5,8));
