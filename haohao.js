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
    var harray0 = ["one", "two", "three", "four", "five"];
    
    var hnewstring0 = new String("hnewstring0\n");
    
    var hstring0 = "hstring0\n";
    
    var harray1 = ["six", "seven", "eight", "nine", "ten"];

    var hnewstring1 = new String("hnewstring1\n");

    this.hstring1 = "hstring1\n";

    // window.hstring2 = "hstring2\n";

    globalstring = "globalstring\n";

    print("...", hperson.name, "\n");
    print("...", hperson.age, "\n");
    hperson.sayhello();
    
    print("...", harray0[0], harray0[3], harray1[1], harray1[4], "\n");
    
    print("...", hnewstring0, hnewstring1);
    
    print("...", hstring0, hstring1);
    
    print("...", globalstring);

    hfunc();
}

main();
// print("...", hstring2);
print("...", hstring1);
print("...", hstring0);