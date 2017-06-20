
    function calc_sum_numbers(str) {
    var sum=0;
    for(var i=0;i<str.length;i++) {
        x=parseInt(str[i]);
        if (x!==NaN)
            sum+=x;
    }
    return sum;
}

describe("task_01 calc_sum_numbers_from_string",function(){
    var input_str="1111";
    var result =4;
    var msg = "Вывести сумму цифр этого числа:"+input_str+"результат 4";
    it(msg,function(){
       var rez = calc_sum_numbers(input_str);
    expect(rez).toBe(4);
       });
}
        );
