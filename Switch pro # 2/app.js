var num = Number(prompt("Enter the day of numbre"));
if (num == 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 10 || 11 || 12) {
    switch (num) {
        case 1:
            document.write("Januar contain 31 days");
            break;
        case 2:
            document.write("Februar contain 28 days");
            break;
        case 3:
            document.write("March contain 31 days");
            break;
        case 4:
            document.write("April contain 30 days");
            break;
        case 5:
            document.write("May contain 31 days");
            break;
        case 6:
            document.write("June contain 30 days");
            break;
        case 7:
            document.write("Julay contain 31 days");
            break;
        case 8:
            document.write("August contain 31 days");
            break;
        case 9:
            document.write("September contain 30 days");
            break;
        case 10:
            document.write("September contain 31 days");
            break;
        case 11:
            document.write("November contain 30 days");
            break;
        case 12:
            document.write("December contain 31 days");
            break;
        default:
            {
                document.write("Enter the valid value");
            }
    }
}
