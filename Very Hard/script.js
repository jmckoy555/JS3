function run() {
    console.log("Why are you running?");
}
function fetchJob() {
    console.log(this.name + " " + "is a" + " " + this.job);
}
function Person(name, job, age) {
    this.name = "Ethan Hunt";
    this.job = "Spy";
    this.age = 35;
    run();
    fetchJob();
}
Person();
function Programmer(name, job, age, languages) {
    this.name = "Ethan Hunt";
    this.job = "Spy";
    this.age = 35;
    this.languages = "English, German"
}
console.log(Programmer);
