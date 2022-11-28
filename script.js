function encode(name, password){
    if(document.getElementById("name").value != "" && document.getElementById("password").value != ""){
        var name_length = name.length;
    var pass_length = password.length;
    var combination = "";
    var i = 0;
    var special_chars = ['!', ',', '$', '#', '@', '*', '^', '%', '~', '-', '_', '+', '=', '&', '(', ')'];
    if(pass_length < name_length){
        for(i = 0; i < pass_length; i++){
            combination += name.charAt(i);
            combination += password.charAt(i);
        }
        for(i; i < name_length; i++){
            combination += name.charAt(i);
        }
    }
    else if(pass_length > name_length){
        for(i = 0; i < name_length; i++){
            combination += name.charAt(i);
            combination += password.charAt(i);
        }
        for(i; i < pass_length; i++){
            combination += password.charAt(i);
        }
    }
    else{
        for(i = 0; i < name_length; i++){
            combination += name.charAt(i);
            combination += password.charAt(i);
        }
    }
    var combined_length = name_length + pass_length;
    var shift_value = combined_length/2;
    var counter = combined_length;
    var shifted = "";
    i = 0;
    while(counter > 0){
        var shifted_char = combination.charAt(i).charCodeAt() + shift_value;
        shifted += String.fromCharCode(shifted_char);
        i++;
        shift_value--;
        counter--;
    }
    var result = "";
    if(combined_length < 16){
        var difference = 16 - combined_length;
        for(i = 0; i < difference; i++){
            result += shifted.charAt(i);
            result += special_chars[i];
        }
        for(i; i < 16; i++){
            result += shifted.charAt(i);
        }
    }
    else if(combined_length > 16){
        for(i = 0; i < 16; i++){
            result += shifted[i];
        }
    }
    document.getElementById("result").value = result;
    }
    else{
        console.log("Please enter both name AND password")
    }
}

function copy(){
    var result = document.getElementById("result");
    result.select();
    result.setSelectionRange(0,99999);
    navigator.clipboard.writeText(result.value);
    clearPassword();
}

function clear(){
    document.getElementById("name").value = "";
    document.getElementById("password").value = "";
    document.getElementById("result").value = "";
}

function clearPassword(){
    document.getElementById("result").value="";
}