var Mustache = require('mustache');
var fs = require('fs');
var juice = require('juice');

var template = fs.readFileSync('basic.html', 'utf-8');
var contents = fs.readFileSync('contents.txt', 'utf-8');

var salutationRegExp = new RegExp(/Salutation:(.*)Lead:/m);
var leadRegExp       = new RegExp(/Lead:(.*)Body:/m);
var bodyRegExp       = new RegExp(/Body:(.*):/m);

function getPart(regex, contents) {
    console.log(contents.match(regex));
    return contents.match(regex)[0];
}

function prepareData(contents) {

    var lines = contents.split('\n'),
        tplData = {},
        mode,
        line;

    for (var i = 0; i < lines.length; i++) {

        line = lines[i];

        if (line === 'Salutation:') {
            mode = 'salutation';
        } else if (line === 'Lead:') {
            mode = 'lead';
        } else if (line === 'Body:') {
            mode = 'body';
        } else {
           tplData[mode] = (tplData[mode] || '') + line + "\n";
        }

    }

    return tplData;
}

var out = juice(Mustache.render(template, prepareData(contents)));
console.log(out);
