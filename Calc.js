// clear_all
$(
    function() {
        $("#clear").click(
            function()
            {
                $("#cntnt").css("background-color","rgba(255, 255, 255, 0.8)");
                $("#cntnt").val(null);
            }
        );
    }  
);

// number input
$(
    function() {
        $(".number").click(
            function()
            {
                var data = $(this).text();
                $("#cntnt").css("background-color","rgba(255, 255, 255, 0.4)");
                $("#cntnt").val($("#cntnt").val()+data);
            }
        );
    }
)

// operator input
$(
    function() {
        $(".operator").click(
            function()
            {
                var data = $(this).text()
                var text = $("#cntnt").val();
                const operators = ['+','-','*','/','÷','×','.','−'];
                let lastone = text.slice(-1);
                if (text == "" && operators.includes(data) && data != '.')
                {
                    return false;
                }
                else if (operators.includes(lastone) && operators.includes(data))
                {
                    return false;
                }
                else {
                    $("#cntnt").css("background-color","rgba(255, 255, 255, 0.4)");
                    $("#cntnt").val($("#cntnt").val()+data);
                }
            }
        );
    }
)

//backspace
$(
    function() {
        $("#backspace").click(
            function()
            {
                var text = $("#cntnt").val();
                let lastone = text.slice(0,-1);
                $("#cntnt").val(lastone);
            }
        );
    }  
);

// equate
$(
    function() {
        $("#equate").click(
            function()
            {
                if ($("#cntnt").val().includes('×') && $("#cntnt").val().includes('÷'))
                {
                    var raw1 = $("#cntnt").val().replace(/÷/g,'/');
                    var raw2 = raw1.replace(/×/g,'*');
                    var soln = eval(raw2);
                    $("#cntnt").val(soln);
                }
                else if ($("#cntnt").val().includes('×'))
                {
                    var soln = eval($("#cntnt").val().replace(/×/g,'*'));
                    $("#cntnt").val(soln);
                }
                else if ($("#cntnt").val().includes('÷'))
                {
                    var soln = eval($("#cntnt").val().replace(/÷/g,'/'));
                    $("#cntnt").val(soln);
                }
                else {
                    $("#cntnt").val(eval($("#cntnt").val()));
                }
            }
        );
    }
);

//keyboard input
$(
    function(e) {
        $(document).keydown(
            function(e)
            {
                var key = e.keyCode;
                var Array = [96,97,98,99,100,101,102,103,104,105];
                var Array2 = [48,49,50,51,52,53,54,55,56,57];
                // clear_key
                if (key == 46)
                {
                    $("#cntnt").val(null);
                    $("#cntnt").css("background-color","rgba(255, 255, 255, 0.8)");
                }

                // enter_key
                else if (key == 13)
                {
                    if ($("#cntnt").val().includes('×') && $("#cntnt").val().includes('÷'))
                    {
                        var raw1 = $("#cntnt").val().replace(/÷/g,'/');
                        var raw2 = raw1.replace(/×/g,'*');
                        var soln = eval(raw2);
                        $("#cntnt").val(soln);
                    }
                    else if ($("#cntnt").val().includes('×'))
                    {
                        var soln = eval($("#cntnt").val().replace(/×/g,'*'));
                        $("#cntnt").val(soln);
                    }
                    else if ($("#cntnt").val().includes('÷'))
                    {
                        var soln = eval($("#cntnt").val().replace(/÷/g,'/'));
                        $("#cntnt").val(soln);
                    }
                    else {
                        $("#cntnt").val(eval($("#cntnt").val()));
                    }
                }

                // backspace
                else if (key == 8)
                {
                    var text = $("#cntnt").val();
                    let lastone = text.slice(0,-1);
                    $("#cntnt").val(lastone);
                }
                
                // numbers_numpad
                else if (Array.includes(key) || Array2.includes(key))
                {
                    for (let i=0;i<=10;i++)
                    {
                        if(Array[i] == key)
                        {
                            $("#cntnt").css("background-color","rgba(255, 255, 255, 0.4)");
                            $("#cntnt").val($("#cntnt").val()+Array.indexOf(key));
                            break;
                        }
                        else if(Array2[i] == key)
                        {
                            $("#cntnt").css("background-color","rgba(255, 255, 255, 0.4)");
                            $("#cntnt").val($("#cntnt").val()+Array2.indexOf(key));
                            break;
                        }
                    }
                }
                
                // operators_numpad
                else {
                    var text = $("#cntnt").val();
                    let lastone = text.slice(-1);
                    const operators = ['+','-','×','÷','.'];
                    const oper_code = [107,109,106,111,110];
                    let pos = oper_code.indexOf(key);
                    if (oper_code.includes(key))
                    {
                        if (text == "" && operators[pos] != '.')
                        {
                            return false;
                        }

                        else if (operators.includes(lastone) && operators.includes(operators[pos]))
                        {
                            return false;
                        }
                        else {
                            $("#cntnt").val($("#cntnt").val()+operators[pos]);
                        }
                    }
                    else {
                        return;
                    }
                }
            }
        );
    }
);

// percentage
$(
    function()
    {
        $("#percent").click(
            function()
            {
                $("#cntnt").val($("#cntnt").val()/100);
            }
        );
    }
)

// negation
$(
    function()
    {
        $("#neg").click(
            function()
            {
                let num = $("#cntnt").val();
                if (num.includes('×') && num.includes('÷'))
                {
                    var raw1 = num.replace(/÷/g,'/');
                    var raw2 = raw1.replace(/×/g,'*');
                    var soln = eval(raw2);
                    $("#cntnt").val(soln*-1);
                }
                else if (num.includes('×'))
                {
                    var soln = eval(num.replace(/×/g,'*'));
                    $("#cntnt").val(soln*-1);
                }
                else if (num.includes('÷'))
                {
                    var soln = eval(num.replace(/÷/g,'/'));
                    $("#cntnt").val(soln*-1);
                }
                else {
                    $("#cntnt").val(eval(num)*-1);
                }
            }
        );
    }
)