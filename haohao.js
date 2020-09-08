var hperson = {
    name : "haohao",
    age : "22",
    sayhello : function() {
        print("hello\n");
    }
};

var harray = ["one", "two", "three", "four", "five"];

var hnewstring = new String("hnewstring\n");

var hstring = "hstring\n";

function hfunc() {
    var hfuncobj = {owner:"hfunc"};
    print(hfuncobj.owner + "\n");
    print("this is hfunc output.\n");
    return 0;
}

print(hperson.name + "\n");
print(hperson.age + "\n");
hperson.sayhello();

print(harray[0], harray[3], "\n");

print(hnewstring);

print(hstring);

hfunc();