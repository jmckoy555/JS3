function outerFunction() {
    let pii = "John Doe";
    console.log(pii);
    function innerFunction() {
        var pii = { ssn: 242342253252 };
    }
}
outerFunction();