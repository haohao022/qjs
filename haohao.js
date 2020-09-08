var hperson = {
    name : "haohao",
    age : "22",
    sayhello : function() {
        print("... hello\n");
    }
};

function hfunc() {
    var hfuncobj = {owner:"hfunc"};
    print("...", hfuncobj.owner, "\n");
    print("... this is hfunc output.\n");
    return 0;
}

function main() {
    var hmainobj = {owner:"main"};

    var harray = ["one", "two", "three", "four", "five"];
    
    var hnewstring = new String("hnewstring\n");
    
    var hstring = "hstring\n";

    globalstring = "globalstring\n";

    main.harray1 = ["six", "seven"];

    internal = function() {
        print("... this is main.internal().\n");
    }

    print("...", hperson.name, "\n");
    print("...", hperson.age, "\n");
    hperson.sayhello();
    
    print("...", hmainobj.owner);

    print("...", harray[0], harray[3], "\n");
    
    print("...", hnewstring);
    
    print("...", hstring);
    
    print("...", globalstring);

    hfunc();
}

main();
print(main.harray1);
internal();


function main() {
    var hnewstring = new String("hnewstring\n");
    
    var hstring = "hstring\n";

    globalstring = "globalstring\n";
}

function BOX(x, y) {
    this.x = x;
    this.y = y;
    this.toString = function() {
        return "" + x + " " + y;
    };
}

var box = new BOX(4, 5);

print(box.toString());



