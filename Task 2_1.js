function num(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0);
        return false;
    }
    return number > 1;
}

function numbers(number) {
    const numb = [];
    for (let i = 2; i <= number; i++) {
        if (num(i)) {
            numb.push(i);
        }
    }
    return numb;
}

console.log(numbers(100));