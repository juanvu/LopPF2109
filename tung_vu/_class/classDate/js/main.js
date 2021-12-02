class MyDate {
    constructor(day, month, year) {
          this.day = day;
          this.month = month;
          this.year = year;
    }

    getDay() {
        return this.day;
    }
    getMonth() {
        return this.month;
    }
    getYear() {
        return this.year;
    }

    setDay(day) {
        this.day  = day;
    }
    setMonth(month) {
        this.month  = month;
    }
    setYear(year) {
        this.year  = year;
    }
    setDate(day,month,year) {
        this.day = day;
        this.month  = month;
        this.year  = year;
    }
    toString() {
        alert(this.day + "/" + this.month + "/" + this.year);
    }
}

let date = new MyDate(2, 2, 2007);
let day = date.getDay(); // 2
let month = date.getMonth(); // 2
let year = date.getYear(); // 2007

alert(day + "/" + month + "/" + year);

date.setDate(6,12,1998);
date.toString();

