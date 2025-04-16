const xhr=new XMLHttpRequest();

xhr.open("Get","http://supersimplebackend.dev");

// 2 - send request
xhr.send();

// 3 - handle response
xhr.addEventListener("load",function(){
    console.log(xhr.response);
})