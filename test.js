var inputString = "Приветствую, {{Name}}! Сейчас {{Date}}.";

var markupObject = {
    name: "Иван",
    date: (new Date()).toLocaleString("ru",{
        day:'numeric',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        weekday: 'long'
    })  
};

var markupFunction = function(inputText, valuesObject) {
    var markupObjects = inputText.match(/\{\{([a-zA-Z0-9_ |]*)\}\}/gm);
    markupObjects.forEach(function(item, i, arr) {
        arr[i] = item.replace(/\s+|{|}/g,""); 
    });
    
    for(var i = 0; i < markupObjects.length; ++i) {    
        var findedField = undefined;
        for(var key in markupObject) {
            if(key.toString().toLowerCase() == markupObjects[i].toLowerCase()) {
                findedField = key;
                break;
            }
        }
        
        if(findedField) {
            var marker = "{{" + markupObjects[i] + "}}";
            inputText = inputText.replace(marker, markupObject[findedField]);
        }
    }
    return inputText;
}

console.log("Входная строка:" + inputString + "\n");
var output = markupFunction(inputString, markupObject);
console.log(output);