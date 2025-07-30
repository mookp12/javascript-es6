let height = undefined;
let result;

function newFunction (height) {
    let result = height ?? 'Height is not defined';
    return result
}

result = newFunction(height)
console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
