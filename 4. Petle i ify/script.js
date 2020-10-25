//1
let a = 2;
let b = 3;

if (a > b) {
    console.log(a);
}
else {
    console.log(b);
}
//2
c = 3;
d = 5;
e = 4;

if (c > d) {
    console.log(a);
} else if (d > e) {
    console.log(d);
} else {
    console.log(e);
}

//3
for (let i = 0; i < 10; ++i) {
    console.log(`[${i + 1}] Lubię JavaScript.`);
}

//4
let result = 0;

for (let i = 1; i < 11; ++i) {
    result += i;
}

console.log(result);

//5
let n = 30;

for (let i = 0; i < n + 1; ++i) {
    if (i % 2 == 0) {
        console.log(`${i} - parzysta`);
    } else {
        console.log(`${i} - nieparzysta`);
    }
}

//6
let i = 0;
let j = 0;
for (; i < 10; ++i) {
    console.log("i= " + i + ", j= " + j);
}
for (; j < 10; ++j) {
    console.log("i= " + i + ", j= " + j)
}

//7
for (let k = 0; k < 101; ++k) {
    switch (k % 3) {
        case 0:
            switch (k % 5) {
                case 0:
                    console.log("FizzBuzz");
                    continue;
            }
    }
    switch (k % 3) {
        case 0:
            console.log("Fizz");
            continue;
    }
    switch (k % 5) {
        case 0:
            console.log("Buzz");
            continue;
    }
    console.log(k);
}

//8
//a
let str = "";

for (let i = 0; i < 6; ++i) {
    for (let j = 0; j < i; ++j) {
        str += "*";
    }
    console.log(str);
    str = "";
}

//b
str = ""
piramidRows = 5;
for (let i = 0; i < piramidRows; ++i) {
    for (let j = 0; j < piramidRows - i; ++j) {
        str += " ";
    }
    for (let j = 0; j < i + 1; ++j) {
        str += "* ";
    }
    console.log(str);
    str = ""
}

//c
let rectRows = 11;
let halfOfRectRows = Math.floor(rectRows / 2);

for (let i = 0; i < rectRows; ++i) {
    if (i < halfOfRectRows) {
        let j = 0;
        for (; j < i + 1; ++j) {
            str += "*";
        }
        for (let k = j; k < halfOfRectRows; ++k) {
            str += k;
        }
    }
    else if (i > halfOfRectRows) {
        let j = 0

        for (j; j < rectRows - i; ++j) {
            str += "*";
        }
        for (let k = 0; k < halfOfRectRows - j; ++k) {
            str += (k + 1);
        }
    }
    else {
        for (let i = 0; i < halfOfRectRows; ++i) {
            str += "-";
        }
    }
    console.log(str);
    str = ""
}

//e
str = ""
let arrowRows = 8;
let piramidEnd = Math.floor(arrowRows / 2) + 1;

for (let i = 0; i < arrowRows; i++) {
    if (i < piramidEnd) {
        for (let j = 0; j < piramidEnd - i; ++j) {
                str += " ";
        }
        for (let k = 0; k < i + 1; ++k) {
            str += "* ";
        }

    } else {
        for (let j = 0; j < piramidEnd; ++j) {
            str += " ";
        }
        str += "*";
    }
    console.log(str);
    str = "";
}