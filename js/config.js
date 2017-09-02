function setConfig(){
    var texts = {
        "title":"Trix Shopping"
    };
    document.title = texts.title;
    document.getElementById("navTitle").innerHTML = texts.title;
}

setConfig();