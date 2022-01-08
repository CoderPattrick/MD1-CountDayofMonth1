function calculate(){
    let month = document.getElementById("month").value;
    let day = '';
    switch (month){
        case "1":
        case "3":
        case "5":
        case "7":
        case "8":
        case "10":
        case "12":
            day = "31";
            break;
        case "4":
        case "6":
        case "9":
        case "11":
            day = '30';
            break;
        case "2":
            day = "28 hoặc 29";
            break;
    }
    document.getElementById("result").innerText = "Tháng " + month + " có " + day + " ngày."
}