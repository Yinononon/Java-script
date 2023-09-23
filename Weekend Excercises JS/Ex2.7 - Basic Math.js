function basicOp(op,val1,val2) {
    switch (op) {
        case `+`:
            console.log(val1+val2);
            break;

        case `-`:
            console.log(val1-val2);
            break;

        case `*`:
            console.log(val1*val2);
            break;

        case `/`:
            console.log(val1/val2);
            break;  

        default:
            console.log("Sorry plese enter vaild operation: '+','-','*','/'");
            break;
    }
}
basicOp(`a`,7,8)