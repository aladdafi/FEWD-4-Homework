##Selector identification

Identify the selectors in each style and what HTML element(s) they target.
Also, which of these examples have errors? What are they?

###1
```
p {
  color: white;
}
``` Selector here is a paragraph. The target for this style is to change the color of text to white.

###2
```
span {
  padding: 15px;
}

```
Selector here is span, which colors part of a text differntly. The target here padding which create a space between the content and the border. 
###3
```
table td {
  color: #222;
} 
``` Selector here is table data. The target is to colorzie the table data with color RGB (22,22,22) 

###4
```
.lede-section #left-side {
  position: absolute;
}
```
The selector here is two different tags, section and left-side, the problem here is # is not defined with a number. The target here is to position the section relative to its first positioned (not static) ancestor element 
###5
```
#section-9 {
  display: block
  text-decoration: underline;
  font-weight: bold;
}
```
The Selector here is section. the target are 3 different styles. First, dispaly section as a block. Second, decorate the text in an underline format. Lastly make the font bold.

##What's different about the following three selectors?

###6
```
.fewd25-page-section .another-class {
  text-align: center;
}
```


###7
```
.fewd25-page-section, .another-class {
  text-align: center;
}
```


###8
```
.fewd25-page-section.another-class {
  text-align: center;
}
```
The difference is in number 8 no spacing between different selector. And in number 6 no comma to seperate selectors.
