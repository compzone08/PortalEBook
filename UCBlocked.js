<p id="stop"></p>
<script>

var cari = navigator.userAgent;
var dapet = cari.search("UCBrowser");
if(dapet>1) {

var strs=document.URL;
var urlnya= strs.replace("http://", "");
var strings='<meta name="viewport" content="width=device-width, initial-scale=1.0"><h3 align="center"> Maaf, website ini tidak dapat diakses menggunakan UC Browser<br/><br/>Klik tombol pilih dibawah ini, lalu salin/copy dan buka menggunakan browser lain (Seperti Google Chrome, Mozilla Firefox, dll)<br/><br/><input type="text" class="teks" value="'+ document.URL +'" size="50"><br/> <button class="js-copy-btn">Pilih</button><br/></h3>';


document.getElementById("stop").innerHTML = strings;

var copyTextareaBtn = document.querySelector('.js-copy-btn');

copyTextareaBtn.addEventListener('click', function(event) {
var copyTextarea = document.querySelector('.teks');
//copyTextarea.select();
copyTextarea.selectionStart=0;
copyTextarea.selectionEnd=copyTextarea.value.length;

try {
var successful = document.execCommand('copy');
var msg = successful ? 'successful' : 'unsuccessful';
console.log('Copying text command was ' + msg);
} catch (err) {
console.log('Oops, unable to copy');
}
});

exit();
}

function exit( status ) {
// http://kevin.vanzonneveld.net
// + original by: Brett Zamir (http://brettz9.blogspot.com)
// + input by: Paul
// + bugfixed by: Hyam Singer (http://www.impact-computing.com/)
// + improved by: Philip Peterson
// + bugfixed by: Brett Zamir (http://brettz9.blogspot.com)
// % note 1: Should be considered expirimental. Please comment on this function.
// * example 1: exit();
// * returns 1: null

var i;

if (typeof status === 'string') {
alert(status);
}

window.addEventListener('error', function (e) {e.preventDefault();e.stopPropagation();}, false);

var handlers = [
'cut',
'beforeunload', 'blur', 'change', 'contextmenu', 'focus', 'keydown', 'keypress', 'keyup', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'resize', 'scroll',
'DOMNodeInserted', 'DOMNodeRemoved', 'DOMNodeRemovedFromDocument', 'DOMNodeInsertedIntoDocument', 'DOMAttrModified', 'DOMCharacterDataModified', 'DOMElementNameChanged', 'DOMAttributeNameChanged', 'DOMActivate', 'DOMFocusIn', 'DOMFocusOut', 'online', 'offline', 'textInput',
'abort', 'close', 'dragdrop', 'load', 'paint', 'reset', 'submit', 'unload'
];

function stopPropagation (e) {
e.stopPropagation();
// e.preventDefault(); // Stop for the form controls, etc., too?
}
for (i=0; i < handlers.length; i++) {
window.addEventListener(handlers[i], function (e) {stopPropagation(e);}, true);
}

if (window.stop) {
window.stop();
}

throw '';
}

</script>