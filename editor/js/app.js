'use strict';

var DOMAIN_URL = 'http://domain.com';
var delay;
var map = CodeMirror.keyMap.sublime;
var editor = CodeMirror.fromTextArea(document.getElementById('code'), {
    tabMode: 'indent',
    keyMap: "sublime",
    lineNumbers: true,
    theme: "monokai",
    tabSize: 4,
    indentWithTabs: true,
    matchBrackets: true,
    autoCloseBrackets: true,
    lineWrapping: true,
    showCursorWhenSelecting: true,
    scrollbarStyle: "simple",
    styleActiveLine: true,
    foldGutter: true,
    gutters: ["CodeMirror-lint-markers", "CodeMirror-linenumbers", "CodeMirror-foldgutter"],
    onChange: function onChange() {
        clearTimeout(delay);
        delay = setTimeout(updatePreview(null), 300);
    },
    onCursorActivity: function onCursorActivity() {
        editor.matchHighlight("CodeMirror-matchhighlight");
    },
    wordWrap: true,
    extraKeys: {
        "Ctrl-Q": function CtrlQ(cm) {
            cm.foldCode(cm.getCursor());
        },
        "Ctrl-Space": "autocomplete",
        "F11": function F11(cm) {
            cm.setOption("fullScreen", !cm.getOption("fullScreen"));
        },
        "Esc": function Esc(cm) {
            if (cm.getOption("fullScreen")) cm.setOption("fullScreen", false);
        }
    }
});

function save(a) {
    var blob = new Blob([a], {
        type: "text/plain;charset=utf-8"
    });
    var v = document.getElementById('getval').value;
    if (v === 'text/html') {
        var b = 'index.html';
    } else if (v === 'sass') {
        var b = 'main.sass';
    } else if (v === 'scss') {
        var b = 'main.scss';
    } else if (v === 'css') {
        var b = 'main.css';
    } else if (v === 'javascript') {
        var b = 'main.js';
    } else if (v === 'pug') {
        var b = 'index.pug';
    } else if (v === 'markdown') {
        var b = 'index.md';
    } else {
        var b = 'text.txt';
    }
    saveAs(blob, b);
}

function saveC(e) {
    if (e === 'text/html' || e === 'pug' || e === 'markdown') {
        var preview = document.getElementById('preview').contentWindow.document.body.innerHTML;
    } else {
        var preview = $('#getval2').val();
        console.log(preview);
    }
    var blob = new Blob([preview], {
        type: "text/plain;charset=utf-8"
    });
    var v = document.getElementById('getval').value;
    if (v === 'text/html') {
        var b = 'index.html';
    } else if (v === 'sass') {
        var b = 'main.css';
    } else if (v === 'scss') {
        var b = 'main.css';
    } else if (v === 'css') {
        var b = 'main.css';
    } else if (v === 'javascript') {
        var b = 'main.js';
    } else if (v === 'pug') {
        var b = 'index.html';
    } else if (v === 'markdown') {
        var b = 'index.html';
    } else {
        var b = 'text.txt';
    }
    saveAs(blob, b);
}

function changeEventHandler(event) {
    var keys = event.value.split(';');
    document.getElementById('getval').value = keys[1];
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", './example/' + keys[0] + '.txt', false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                var modes = keys[1];
                if (modes === 'scss') {
                    modes = 'sass';
                }
                updateEditor(allText, modes);
                setTimeout(updatePreview(modes), 300);
            }
        }
    };
    rawFile.send(null);
}

function getf(a, b) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", './labs/' + a + '.txt', false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                var modes = b;
                if (modes === 'scss') {
                    modes = 'sass';
                }
                updateEditor(allText, modes);
                setTimeout(updatePreview(modes), 300);
            }
        }
    };
    rawFile.send(null);
}

function changeEventHandler2(event) {
    var keys = event.split(';');
    if (keys[3]) {

        if ($('#youpath').val().length <= 0) {
            var keysname = $('#youpath').val().split(';');
            document.getElementById('getval').value = keys[3];
            getf(keys[2], keys[3]);
        }

        setTimeout(function () {
            document.getElementById('getval').value = keys[1];
            getf(keys[0], keys[1]);
        }, 1);
    } else {
        document.getElementById('getval').value = keys[1];
        getf(keys[0], keys[1]);
    }
}

function updateEditor(e, f) {
    document.getElementById('code').value = e;
    editor.setValue(e);
    editor.setOption("mode", f);
}

function updatePreview(e) {
    var compile = editor.getValue();
    var previewFrame = document.getElementById('preview');

    if (e === 'text/html' || e === 'pug' || e === 'markdown') {
        $('#preview2').hide();
        $('#preview').show();
        var preview = previewFrame.contentDocument || previewFrame.contentWindow.document;
        preview.open();
    } else {
        var preview = document.getElementById('preview2');
        $('#preview').hide();
        $('#preview2').show();
        preview.innerHTML = null;
    }

    if (e === 'text/html') {
        var m,
            urls = [],
            rex = /<link [^>]*href="([^"]*)"[^>]*>/gm;

        while (m = rex.exec(compile)) {
            urls.push(m[1]);
        }

        var uv = compile.replace(/<link\b[^>]*>/i, "");
        preview.write(uv);
        if (urls.length > 0) {
            setTimeout(function () {
                // $('#youcode').val(compile)
                var $head = $("#preview").contents().find("head");
                $head.append('<style type="text/css">' + $("#youcode").val() + '</style>');
            }, 1);
        }
        // $('#preview').contents().find('link[rel=stylesheet]').remove();
    } else if (e === 'sass' || e === 'scss') {
        if (compile) {
            var sass = new Sass('./editor/sass/sass.worker.js');
            sass.compile(compile, {
                indentedSyntax: false,
                style: Sass.style.expanded,
                indent: '  ',
                linefeed: '\n'
            }, function (resultS) {
                $('#getval2').val(resultS.text);
                CodeMirror(preview, {
                    value: resultS.text,
                    tabMode: 'indent',
                    mode: 'css',
                    lineNumbers: true,
                    tabSize: 4,
                    matchBrackets: true,
                    autoCloseBrackets: true,
                    lineWrapping: true,
                    showCursorWhenSelecting: true,
                    wordWrap: true
                });
            });
        }
    } else if (e === 'css') {
        $('#getval2').val(compile);
        if ($('#youpath').val().length > 0) {}
        $('#youcode').val(compile);
        CodeMirror(preview, {
            value: compile,
            tabMode: 'indent',
            mode: 'css',
            lineNumbers: true,
            tabSize: 4,
            matchBrackets: true,
            autoCloseBrackets: true,
            lineWrapping: true,
            showCursorWhenSelecting: true,
            wordWrap: true
        });
    } else if (e === 'javascript') {
        $('#getval2').val(compile);
        CodeMirror(preview, {
            value: compile,
            tabMode: 'indent',
            mode: 'javascript',
            lineNumbers: true,
            tabSize: 4,
            matchBrackets: true,
            autoCloseBrackets: true,
            lineWrapping: true,
            showCursorWhenSelecting: true,
            wordWrap: true
        });
    } else if (e === 'markdown') {
        var converter = new showdown.Converter(),
            text = compile,
            html = converter.makeHtml(text);
        preview.write(html);
    } else if (e === 'pug') {
        var pug = require("pug");
        var fn = pug.compile(compile);
        var html = fn();
        compile = html;
        preview.write(html);
    } else {
        $('#getval2').val(compile);
        CodeMirror(preview, {
            value: compile,
            tabMode: 'indent',
            mode: 'text',
            lineNumbers: true,
            tabSize: 4,
            matchBrackets: true,
            autoCloseBrackets: true,
            lineWrapping: true,
            showCursorWhenSelecting: true,
            wordWrap: true
        });
    }

    if (compile.indexOf("<title>") > 0) {
        var result = compile.match(/<title>(.*?)<\/title>/g).map(function (val) {
            return val.replace(/<\/?title>/g, '');
        });
    } else {
        if (e) {
            var result = 'Compile';
            // var result = e.charAt(0).toUpperCase() + e.slice(1);
        } else {
            var result = 'Text';
        }
    }
    document.getElementById('bar').innerHTML = result;

    if (e === 'text/html' || e === 'pug' || e === 'markdown') {
        preview.close();
    } else {}
}
setTimeout(updatePreview(null), 300);

$(function () {
    // $('.treeview').jstree();
    $('.treeview').jstree({
        'core': {
            'data': [{
                "text": "FPT-HTML",
                "state": { "opened": true },
                "children": [{
                    "id": 1,
                    "text": "Lab-01",
                    "state": { "opened": false },
                    "children": [{
                        "id": 67,
                        "text": "img",
                        "state": { "opened": false },
                        "children": [{ "id": './img/logo-slack.svg', "text": "logo-slack.svg", "state": { "selected": false }, "icon": "fa fa-file-image-o" }]
                    }, { "id": 'lab-01/01-1-html-basic;text/html', "text": "01-1-html-basic.html", "state": { "selected": false }, "icon": "fa fa-file-o" }, { "id": 'lab-01/01-2-html-basic_img;text/html', "text": "01-2-html-img.html", "state": { "selected": false }, "icon": "fa fa-file-o" }, { "id": 'lab-01/01-3-html-basic_img_customize;text/html', "text": "01-3-html-img.html", "state": { "selected": false }, "icon": "fa fa-file-o" }, { "id": 'lab-01/01-4-html-basic_align;text/html', "text": "01-4-html-align.html", "state": { "selected": false }, "icon": "fa fa-file-o" }, { "id": 'lab-01/01-5-html-basic-text;text/html', "text": "01-5-html-text.html", "state": { "selected": false }, "icon": "fa fa-file-o" }, { "id": 'https://baonguyenyam.github.io/fpt/docs/html-css/html/tag.html', "text": "Tài liệu liên quan", "state": { "selected": false }, "icon": "fa fa-external-link" }]
                }, {
                    "id": 2,
                    "text": "Lab-02",
                    "state": { "opened": false },
                    "children": [{
                        "id": 68,
                        "text": "dulieu",
                        "state": { "opened": false },
                        "children": [{ "id": 'lab-02/dulieu/bang;text/html', "text": "bang.html", "state": { "selected": false }, "icon": "fa fa-file-o" }]
                    }, {
                        "id": 69,
                        "text": "img",
                        "state": { "opened": false },
                        "children": [{ "id": './img/logo.png', "text": "logo.png", "state": { "selected": false }, "icon": "fa fa-file-image-o" }]
                    }, { "id": 'lab-02/baitho;text/html', "text": "baitho.html", "state": { "selected": false }, "icon": "fa fa-file-o" }, { "id": 'lab-02/baitoan;text/html', "text": "baitoan.html", "state": { "selected": false }, "icon": "fa fa-file-o" }, { "id": 'lab-02/index;text/html', "text": "index.html", "state": { "selected": false }, "icon": "fa fa-file-o" }, { "id": 'https://baonguyenyam.github.io/fpt/docs/html-css/css/colors.html', "text": "Tài liệu liên quan", "state": { "selected": false }, "icon": "fa fa-external-link" }]
                }, {
                    "id": 3,
                    "text": "Lab-03",
                    "state": { "opened": false },
                    "children": [{
                        "id": 70,
                        "text": "css",
                        "state": { "opened": false },
                        "children": [{ "id": 'lab-03/css/style;css', "text": "style.css", "state": { "selected": false }, "icon": "fa fa-file-o" }]
                    }, {
                        "id": 71,
                        "text": "img",
                        "state": { "opened": false },
                        "children": [{ "id": './img/girl.jpg', "text": "girl.jpg", "state": { "selected": false }, "icon": "fa fa-file-image-o" }]
                    }, { "id": 'lab-03/danba;text/html', "text": "danba.html", "state": { "selected": false }, "icon": "fa fa-file-o" }, { "id": 'lab-03/danba-style;text/html', "text": "danba-style.html", "state": { "selected": false }, "icon": "fa fa-file-o" }, { "id": 'lab-03/danba-css;text/html;lab-03/css/style;css', "text": "danba-css.html", "state": { "selected": false }, "icon": "fa fa-file-o" }, { "id": 'https://baonguyenyam.github.io/fpt/docs/html-css/html/style.html', "text": "Tài liệu liên quan", "state": { "selected": false }, "icon": "fa fa-external-link" }]
                }, {
                    "id": 4,
                    "text": "Lab-04",
                    "state": { "opened": false },
                    "children": [{
                        "id": 72,
                        "text": "css",
                        "state": { "opened": false },
                        "children": [{ "id": 'lab-04/css/style;css', "text": "style.css", "state": { "selected": false }, "icon": "fa fa-file-o" }, { "id": 'lab-04/css/style-full;css', "text": "style-full.css", "state": { "selected": false }, "icon": "fa fa-file-o" }]
                    }, {
                        "id": 73,
                        "text": "img",
                        "state": { "opened": false },
                        "children": [{ "id": './img/logo-cafe.png', "text": "logo-cafe.png", "state": { "selected": false }, "icon": "fa fa-file-image-o" }, { "id": './img/cup.png', "text": "cup.png", "state": { "selected": false }, "icon": "fa fa-file-image-o" }, { "id": './img/img_01.png', "text": "img_01.png", "state": { "selected": false }, "icon": "fa fa-file-image-o" }, { "id": './img/img_02.png', "text": "img_02.png", "state": { "selected": false }, "icon": "fa fa-file-image-o" }]
                    }, { "id": 'lab-04/coffee;text/html', "text": "coffee.html", "state": { "selected": false }, "icon": "fa fa-file-o" }, { "id": 'lab-04/coffee-01-add-basic;text/html;lab-04/css/style;css', "text": "coffee-01-add-basic.html", "state": { "selected": false }, "icon": "fa fa-file-o" }, { "id": 'lab-04/coffee-02-0-add-style;text/html', "text": "coffee-02-0-add-style.html", "state": { "selected": false }, "icon": "fa fa-file-o" }, { "id": 'lab-04/coffee-02-1-add-style;text/html', "text": "coffee-02-1-add-style.html", "state": { "selected": false }, "icon": "fa fa-file-o" }, { "id": 'lab-04/coffee-03-add-full;text/html;lab-04/css/style-full;css', "text": "coffee-03-add-full.html", "state": { "selected": false }, "icon": "fa fa-file-o" }, { "id": 'http://baonguyenyam.github.io/fpt/docs/html-css/typography/', "text": "Tài liệu liên quan", "state": { "selected": false }, "icon": "fa fa-external-link" }]
                }]
            }]
        }
    }).on("changed.jstree", function (e, data) {
        getDataDemo(data.node.id, data.node.text);
        // getDataDemo(data.selected[0], data.node.text);
    });
});

function getDataDemo(e, u) {
    if (e.indexOf(";text/html") > 0) {
        changeEventHandler2(e);
    } else if (e.indexOf("http") > -1) {
        window.open(e, '_blank');
    } else if (e.indexOf(".svg") > -1) {
        var x = new XMLHttpRequest();
        x.open("GET", e, true);
        x.responseType = 'blob';
        x.onload = function (f) {
            download(x.response, u, "image/svg");
        };
        x.send();
    } else if (e.indexOf(".png") > -1) {
        var x = new XMLHttpRequest();
        x.open("GET", e, true);
        x.responseType = 'blob';
        x.onload = function (f) {
            download(x.response, u, "image/png");
        };
        x.send();
    } else if (e.indexOf(".jpg") > -1) {
        var x = new XMLHttpRequest();
        x.open("GET", e, true);
        x.responseType = 'blob';
        x.onload = function (f) {
            download(x.response, u, "image/jpg");
        };
        x.send();
    } else if (e.indexOf(";css") > -1) {
        $('#youpath').val(e);
        changeEventHandler2(e);
    }
}

function toggleMenu() {
    $('.menuto').toggleClass('active');
}
//# sourceMappingURL=app.js.map
