document.getElementById('idTest').onclick = function() {
    var text = document.getElementById('idText').value;
    var paragraph = document.getElementById('idParagraph');
    var font = document.getElementById('idFont');
    var size = document.getElementById('idSize');
    var color = document.getElementById('idColor');
    var colorBg = document.getElementById('idColorBg');

    if (text != ""){
        paragraph.innerHTML = text;
    }

    paragraph.style.fontFamily = font.value;
    paragraph.style.fontSize = size.value + 'px';
    paragraph.style.color = color.value;
    paragraph.style.backgroundColor = colorBg.value;

    console.log(text);
}