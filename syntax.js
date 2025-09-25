function highlight(code) {
return code
.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
.replace(/\b(public|private|protected|static|readonly|const|var|let|class|interface|namespace|using|return|if|else|for|foreach|while|do|switch|case|default|try|catch|finally|throw|new|this|base|override|virtual|abstract|sealed|partial)\b/g, '~K~$1~/K~')
.replace(/\b(string|int|bool|double|float|decimal|long|short|byte|char|object|void|DateTime|List|Dictionary|Array|Task|async|await)\b/g, '~T~$1~/T~')
.replace(/"[^"]*"/g, '~S~$&~/S~')
.replace(/\/\/.*$/gm, '~C~$&~/C~')
.replace(/~K~/g, '<span class="k">').replace(/~\/K~/g, '</span>')
.replace(/~T~/g, '<span class="t">').replace(/~\/T~/g, '</span>')
.replace(/~S~/g, '<span class="s">').replace(/~\/S~/g, '</span>')
.replace(/~C~/g, '<span class="c">').replace(/~\/C~/g, '</span>');
}

document.addEventListener('DOMContentLoaded', () => {
document.querySelectorAll('pre code').forEach(block => {
if (block.textContent && !block.innerHTML.includes('<span')) {
block.innerHTML = highlight(block.textContent);
}
});
});