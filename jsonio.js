function SaveAsJsonFile(objToSave) {
    var textToSave = JSON.stringify(objToSave);
    var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    var fileNameToSaveAs = "charsheet.json";

    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = _destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);

    downloadLink.click();
}

function _destroyClickedElement(event) {
    document.body.removeChild(event.target);
}

function LoadJsonFile(fileInputId, listener) {
    var fileToLoad = document.getElementById(fileInputId).files[0];

    var fileReader = new FileReader();
    fileReader.onload = function(fileLoadedEvent) {
        var textFromFileLoaded = fileLoadedEvent.target.result;
        var obj = JSON.parse(textFromFileLoaded);
        listener(obj);
    };
    fileReader.readAsText(fileToLoad, "UTF-8");
}
