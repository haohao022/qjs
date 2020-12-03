function time_delay_loop()
{
    let loop_cnt = 3000;
    let set = {};
    for (let i = 0; i < loop_cnt; i++) {
        let obj = {id: i, attr: "attr"};
        set[i] = obj;
        for (let j = 0; j < i; j++) {
            set[j].id = j;
        }
    }
}

function test_leak()
{
    // test string
    let string_a = "string a";
    let string_b = String("string b");
    let string_c = new String("string c");  // leak

    // test_number
    let number_a = 1;
    let number_b = Number(2);
    let number_c = new Number(3);  // leak

    // test_date
    let date_a = new Date(2000, 1, 1);  // leak

    // test_array
    let array_a = [1, 2, 3, 4];  // leak
    let array_b = new Array(6, 7, 8);  // leak
    // array_c = array_a.concat(array_b);  // leak undetected

    // test_map
    let map_a = new Map();  // leak
    map_a.set("a", 1);
    map_a.set("b", 2);
    let map_b = new Map([["one", 1], ["two", 2]]);  // leak
    let map_c = new Map([...map_a, ...map_b]);  // leak

    // test closure
    function func1() {
        var obj = {"val": 1};
        function set(a) {
            obj.val = a;
        }
        function get() {
            return obj.val;
        }
        return {"set": set, "get": get};
    }
    
    var retobj = func1();
    retobj.set(10);
    // loop to trigger gc
    time_delay_loop();
}

test_leak();