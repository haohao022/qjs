var hnewstring = new String("hnewstring\n");

var hstring = "hstring\n";

var hnewstring1 = new String("hnewstring1\n");

function output() {
    print(hnewstring, hstring, hnewstring1, "\n");
}

output();
print("--------------");

var harr0 = [1, 2, 3, 4];
var harr1 = harr0;

harr1[0] = 0;
print(harr0);
print(harr1);

var hperson0 = {name : "haohao", age : "22"};
var hperson1 = hperson0;
hperson1.name = "hhh";
print(hperson0.name, hperson1.name);