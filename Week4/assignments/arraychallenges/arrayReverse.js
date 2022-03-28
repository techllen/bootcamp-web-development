function reverse(arr) {
        // your code here
        var revArr = arr;
        arr = [];
        for(var i = revArr.length-1;i >=0;i--){
            arr.push(revArr[i]);
        }
        return arr;
    }
       
    var result = reverse(["a", "b", "c", "d", "e"]);
    console.log(result); // we expect back ["e", "d", "c", "b", "a"]
    