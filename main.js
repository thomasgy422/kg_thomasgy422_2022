//read number inputs and store them as string
//into an array

nums = [];
for (i = 2; i < process.argv.length; i++){
    nums.push(process.argv[i]);
}

//for each number in the previous array,
//we split them into characters and store
//all those into a 2D array.

num = [];
for (i = 0; i < nums.length; i++) {
    num.push(nums[i].split(''));  
}

//define a function to convert each number 
//to the corresponding string

function convert_string(num) {
    var str;
    switch (num){
        case (num = '0'):
            str = 'Zero';
            break;
        case (num = '1'):
            str = 'One';
            break;
        case (num = '2'):
            str = 'Two';
            break;
        case (num = '3'):
            str = 'Three';
            break;
        case (num = '4'):
            str = 'Four';
            break;
        case (num = '5'):
            str = 'Five';
            break;
        case (num = '6'):
            str = 'Six';
            break;
        case (num = '7'):
            str = 'Seven';
            break;
        case (num = '8'):
            str = 'Eight';
            break;
        case (num = '9'):
            str = 'Nine';
            break;
    }
    return str;
}

//call the previous function and then
//print convert each number to string.

for (i = 0; i < num.length; i++){
    var str = '';
    for (j = 0; j < num[i].length; j++){
        num[i][j] = convert_string(num[i][j]);
        str += num[i][j];    
    }
    process.stdout.write(str + ',');
} 



