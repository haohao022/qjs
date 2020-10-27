//'use strict';

var harr = [1, 2, 3]
var hstr1 = "hstr1";
var hstr2 = new String("hstr2");

function haoprint() {
    print(harr);
    print(hstr1, hstr2);
}

haoprint();


{
    let harr = 2;
}
print(harr);

//delete func;
//console.log(this.func);
console.log(typeof func);
func();
{
    var func = function() { console.log("var def"); }
}
console.log(typeof func);
func();
function func() {
    console.log("func def");
}
console.log(typeof func);
func();


var x = 1;
{
    const x = 2;  // different variable
    console.log(x);  // 2
}
console.log(x);  // 1

ret0:
for (let i = 1; i < 10; i++) {
    ret1:
    for (let j = 1; j < i; j++) {
        if (j % 3 == 0) {
            break ret0;
        }
        print(j);
    }
    print(i + " end of line\n");
}