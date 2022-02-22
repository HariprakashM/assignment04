var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload = function()
{
    var data = JSON.parse(request.response);
    console.log(data);
    for(var i in data)
    {
    console.log(`flag : ${data[i].flag}`);
    }
}
