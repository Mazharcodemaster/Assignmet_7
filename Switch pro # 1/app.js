var num = Number(prompt("Enter the day of numbre"));
var day;
switch (num) {
    case 1: {
        document.write("Day one Sunday");
        break;
    }
    case 2: {
        document.write("Day two Monday");
        break;
    }
    case 3: {
        document.write("Day three Tuesday");
        break;
    }
    case 4: {
        document.write("Day four Wednesday");
        break;
    }
    case 5: {
        document.write("Day five Thursday");
        break;
    }
    case 6: {
        document.write("Day six Friday");
        break;
    }
    case 7: {
        document.write("Day seven Sataurday");
        break;
    }
    default: {
        document.write("Enter the number from one to seven");
    }
}
