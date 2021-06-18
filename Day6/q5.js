var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var max_val = 0;
var max_item;
for(let item of arr1)
{
    var temp_val = arr1.filter(val => val==item).length;
    if (temp_val>max_val)
    {
        max_val=temp_val;
        max_item=item;
    }
    
}

console.log(max_item,"( "+max_val+" times)");
VM2187:15 a ( 5 times)
