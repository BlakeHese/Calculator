function dis(val, formName) {
    document.forms[formName]["result"].value += val;
}

function clr(formName) {
    document.forms[formName]["result"].value = "";
}

function del(formName) {
    let current = document.forms[formName]["result"].value;
    document.forms[formName]["result"].value = current.slice(0, -1);
}

function solve(formName) {
    let expression = document.forms[formName]["result"].value;
    let result = math.evaluate(expression);
    document.forms[formName]["result"].value = result;
}
