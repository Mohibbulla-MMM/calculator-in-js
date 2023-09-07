let outPutContainer = document.getElementById("outPut");
let comBtn = document.querySelectorAll(".mm-cmd-btn");
let allNumber = [];
// ============================= all Number set =======================
for (const btn of comBtn) {
    btn.addEventListener("click", () => {
        let text = btn.innerText;
        let number = numberConver(text);
        allNumber.push(number);
        outPutContainer.textContent = allNumber.join("");
        // console.log(allNumber);
    })
}

function numberConver(num) {
    let element = Math.round(num);
    return element;
}

// ======================== plus function ======================
let mathCheker = ["+", "-", "/", "*"];
let mathValueCheker = true
document.getElementById("plus").addEventListener("click", () => {
    let plus = "+";
    let checker = allNumber.indexOf(plus);
    // console.log(checker);
    if (checker === -1 && mathValueCheker) {
        allNumber.push(plus);
        outPutContainer.textContent = allNumber.join("");
        mathValueCheker = false;
    }
})

// ======================== minus function ======================
document.getElementById("minus").addEventListener("click", () => {
    let minus = "-";
    let checker = allNumber.indexOf(minus);
    // console.log(checker);
    if (checker === -1 && mathValueCheker) {
        allNumber.push(minus);
        outPutContainer.textContent = allNumber.join("");
        mathValueCheker = false;
    }
})

// ======================== divider function ======================
document.getElementById("divide").addEventListener("click", () => {
    let divide = "/";
    let checker = allNumber.indexOf(divide);
    // console.log(checker);
    if (checker === -1 && mathValueCheker) {
        allNumber.push(divide);
        outPutContainer.textContent = allNumber.join("");
        mathValueCheker = false;
    }
})

// ======================== multiply function ======================
document.getElementById("multiply").addEventListener("click", () => {
    let multiply = "*";
    let checker = allNumber.indexOf(multiply);
    console.log(checker);
    if (checker === -1 && mathValueCheker) {
        allNumber.push(multiply);
        outPutContainer.textContent = allNumber.join("");
        mathValueCheker = false;
    }
})

// ================================== all clear ============================/
document.getElementById("ac").addEventListener("click", () => {
    history.go(0);
})
// ================================== backspace ============================/
document.getElementById("backspace").addEventListener("click", () => {
    allNumber.pop()
    outPutContainer.textContent = allNumber.join("");
})
// ================================== delete right  ============================/
document.getElementById("delete-right").addEventListener("click", () => {
    allNumber.shift()
    outPutContainer.textContent = allNumber.join("");
})
// ================================== close window   ============================/
document.getElementById("close").addEventListener("click", () => {
    console.log('close window');
    window.close()
})

// ======================================== equl or resul function  ========================
document.getElementById("equal").addEventListener("click", () => {
    mathValueCheker = true;
    let valueArr = ["+", "-", "/", "*"];
    let result = null;
    let one = null;
    let two = null;
    for (const value of valueArr) {
        result = allNumber.indexOf(value);
        if (result && result !== -1) {
            // let checker = allNumber.indexOf(value);
            one = allNumber.slice(0, result);
            two = allNumber.slice(result + 1, allNumber.length);
            // console.log(checker);
            // console.log(result, " result ------------------");
            // let oneValue = numberConver(one);
            // let twoValue = numberConver(two);
            // console.log(oneValue);
            // console.log(twoValue);

            // ============== plus result ====================
            if (result && allNumber.includes("+")) {
                let result1 = numberConver(one.join(""));
                let result2 = numberConver(two.join(""));
                let result3 = result1 + result2;
                allNumber.splice(0, allNumber.length);
                outPutContainer.textContent = result3;
                allNumber.push(result3);
                // return;
            }

            // ============== minus result ====================
            if (result && allNumber.includes("-")) {
                // let oneValue = one
                // let twoValue = two
                let result1 = numberConver(one.join(""))
                let result2 = numberConver(two.join(""))
                let result3 = result1 - result2;
                allNumber.splice(0, allNumber.length);
                outPutContainer.textContent = result3;
                allNumber.push(result3);
                // return;
            }

            // ============== multiply result ====================
            if (result && allNumber.includes("*")) {
                let result1 = numberConver(one.join(""))
                let result2 = numberConver(two.join(""));
                let result3 = result1 * result2;
                allNumber.splice(0, allNumber.length);
                outPutContainer.textContent = result3;
                allNumber.push(result3);
                // return;
            }

            // ============== divider result ====================
            if (result && allNumber.includes("/")) {
                let result1 = numberConver(one.join(""))
                let result2 = numberConver(two.join(""));
                let result3 = result1 / result2;
                allNumber.splice(0, allNumber.length);
                outPutContainer.textContent = result3;
                allNumber.push(result3);
                // return;
            }
        }
    }
    // console.log(one);
    // console.log(two);
})

// let a = 10;
// let b = 2;
// let c = a / b;
// console.log(c);