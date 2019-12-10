function findOutlier(integers){
    var even = [];
    var odd = [];
    for(var i = 0; i < integers.length; i++) {
        if((integers[i] % 2) === 0) {
            even.push(integers[i])
       } else {
            odd.push(integers[i])
        }
    }
    var elen = even.length;
    var olen = odd.length;

    if (elen > olen)
    {
        return odd[0];
    }
    else
    {
        return even[0];
    }
}

console.log(findOutlier(['3', '6', '7', '9']));
console.log(findOutlier(['2', '6', '7', '8']));

function upperCase(x) {
if (x == null || parseFloat(x) == x) return false;
if(typeof x === "string")
return x.toUpperCase();
else
    return false;
    }