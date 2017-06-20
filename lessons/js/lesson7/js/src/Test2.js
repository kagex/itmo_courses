
    function e_xren(x,y) {
        var e = ((1+Math.pow(Math.sin(x+y),2))/(2+ Math.abs(x-2*x/(1-Math.pow(x,2)*Math.pow(y,2))))) +x
        var x=1;
    var y=1;
    return e_xren;
}

describe("task_01 calc_sum_numbers_from_string",function(){
    var x=0;
    var y=0;
    var msg = "Вывести сумму цифр этого числа:"+input_str+"результат 4";
    it(msg,function(){
       var rez = e_xren(x,y);
    expect(rez).toBe(0.5);
       });
}
        );
