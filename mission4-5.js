function omikujishow() {
    var omikuji = ["大吉", "中吉", "小吉"];
    
    var number1 = Math.random();
    var number2 = number1 * omikuji.length;  // Use the length of the array to ensure it's scalable
    var number = Math.floor(number2);
    var message = omikuji[number];
    
    alert(message);
}
