var hnewstring = new String("hnewstring\n");

var hstring = "hstring\n";

var hnewstring1 = new String("hnewstring1\n");

var obj = {one: "1", two: "2"};

var arr = [1,23];

var arr1 = new Array(1, 2, 3);

function output() {
    print(hnewstring, hstring, hnewstring1, obj, "\n");
}

output();

// function foo(n) {
// 	if (n == 0)
// 		return 1;
// 	return n *foo(n - 1);
// }

// var arr = ["one", "two", "three", "four"];

// for (let i = 0; i < 4; i++) {
// 	console.log(arr[i]);
// }

// console.log(foo(10));



// var out = 1;
// function add_num(para) {
//     var num  = para;
//     var num1 = para;
//     var num2 = para;
//     var num3 = para;
//     return function add(n) {
//         var n1 = num1;
//         var n2 = num2;
//         return out + num + n;
//     }
// }

// var add34 = add_num(34);
// var OBJ = obj;
// var ADD34 = add34;
// console.log(add34(2));
// out = 2;
// console.log(OBJ);
// console.log(ADD34(2));


var a = String("skjasdk");
var b = new String("ajkdhkasd");
var c = Symbol("symbol");
print(a, b);