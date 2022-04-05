function calculateIntercept(line1M,line1C,line2M,line2C){
    if(line1M==line2M){
        return {
            x: NaN,
            y: NaN
        }
    }
    const xIntercept = (line2C-line1C)/(line1M-line2M);
    const yIntercept = line1M * xIntercept + line1C;
    return {
        x: xIntercept,
        y: yIntercept
    }
}
function calculate(){
    const line1M = parseFloat(document.getElementById("l1slope").value);
    const line1C = parseFloat(document.getElementById("l1intercept").value);
    const line2M = parseFloat(document.getElementById("l2slope").value);
    const line2C = parseFloat(document.getElementById("l2intercept").value);
    const intercept = calculateIntercept(line1M,line1C,line2M,line2C);
    const noIntersection = isNaN(intercept.x);

    if(noIntersection){
        document.getElementById("error_message").textContent = "The lines don't intercept!";
        document.getElementById("x_intercept").textContent = "";
        document.getElementById("y_intercept").textContent = "";
    }else{
        // Get the output elements
        document.getElementById("x_intercept").textContent = "X Intercept = ".concat(intercept.x);
        document.getElementById("y_intercept").textContent = "Y Intercept = ".concat(intercept.y);
        document.getElementById("error_message").textContent = "";   
    }
}