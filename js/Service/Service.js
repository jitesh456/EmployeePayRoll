let XMLHttpRequest=require("xmlhttprequest").XMLHttpRequest;

let url="http://localhost:3000/employees/8"
let data={
    "id": 8,
    "name": "Patil",
    "salary": 32000
}
function makeServiceCall(methodType, url, async = true, data = null) {
    return new Promise(function (resolve, reject) {
       let xhr = new XMLHttpRequest();
       xhr.onload = function(){
          console.log(methodType+" State Changed Called. Ready State: "+
                      xhr.readyState+" Status:"+xhr.status);
          if (xhr.status.toString().match('^[2][0-9]{2}$')) {
             resolve(xhr.responseText);
          } else if (xhr.status.toString().match('^[4,5][0-9]{2}$')) {
             reject({
                status: xhr.status,
                statusText: xhr.statusText
             });
             console.log("XHR Failed");
          }
       }
       xhr.onerror = function () {
         reject({
             status: this.status,
             statusText: xhttp.statusText
         });
       };
       xhr.open(methodType, url, async);
       if (data) {
          console.log(JSON.stringify(data));
          xhr.setRequestHeader("Content-Type", "application/json");
          xhr.send(JSON.stringify(data));
       } else xhr.send();
       console.log(methodType+" request sent to the server");
    });
 }
 function makeServiceTest(methodType, url, async = true, data = null) {
   
       let xhr = new XMLHttpRequest();     
       xhr.open(methodType, url, async);      
       xhr.setRequestHeader("Content-Type", "application/json");         
       xhr.send();
     //console.log( xhr.responseText);
 }
 makeServiceTest("Delete",url,true,null);
 //makeServiceCall("Get",url,true,null).then(response=>console.log(response)).catch(error=>console.log(error));