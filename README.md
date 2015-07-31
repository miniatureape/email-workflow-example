## Setup

- Install NodeJS.
- Clone repo
- ```cd``` into repo
- Run `npm install`

## Usage

Edit contents.txt

```
node make-email.js > output.html
```

## Explanation

Take a look at basic.html. That's the zurb basic email template, but I've added in [three mustache variables](https://github.com/miniatureape/email-workflow-example/blob/master/basic.html#L826-L828), ```salutation```, ```lead``` and ```body```.

make-email.js opens contents.txt and makes a js object like this:

```javascript
{
    salutation: 'Whatever you put in there',
    lead: 'Whatever you put in that section',
    body: 'Whatever you put in this section',
}
```

Then it opens the template, renders it with this data. Finally, it runs it through juice, which inlines the css. 

It outputs the text. In the usage above, I redirect that into a file called output.html

Ideally, you'd want to take each section and maybe run that through markdown or something to give you paragraph tags within individual sections, etc.
