
var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };
var flag =true;
if(Object.keys(obj1).length == Object.keys(obj2).length)
{
    for(i in obj1)
    {
        if(obj1[i] == obj2[i])
        {
        continue;
         }
    else
    {
        flag=false;
        break;
    }
}
}
else
{
    flag=false;
}
console.log(flag);




