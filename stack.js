var max = 100;
var top = -1;
var a = Array(max).fill(0);

const push = (x) => {
    if (top >= (max - 1)) {
        console.log("OverFlow");
        return 0;
    }
    else {
        top += 1;
            a[top] = x;
        console.log(x, "is pushed into stack");
            return true;
    }
}
const pop = () => {
    if (top < 0) {
        console.log("UnderFlow");
        return 0;
    }
    else {
        var x = a[top];
        top -= 1;
        return x;
    }
}
const Top = () => {
    if (top < 0) {
        console.log("UnderFlow");
        return 0;
    }
    else {
        var x = a[top];
        return x;
    }
}
const ShowStack = () => {
    for (i = top; i > -1; i--) {
        console.log(" ", a[i]);
    }
}

push(20);
push(50);
push(10);
push(60);
console.log(pop(), "poped");
console.log(Top());
console.log(pop(), "poped");
console.log(ShowStack());



