##Selector identification

Identify the selectors in each style and what HTML element(s) they target.
Also, which of these examples have errors? What are they?

###1
```
p {
  color: white;
}
answer :

for chose white <P> tag to any tags <p> 
Example :
<p>.......  </p>


###2
```
span {
  padding: 15px;
}
used to group inline-elements in a document and used to padding a part of each side.
Example :
<p><span> ..... </span> </p>


###3
```
table td {
  color: #222;
}
```
for defines a standard cell in an HTML table black color



###4
```
.lede-section #left-side {
  position: absolute;
}
class (lede-section) and id (left-side) specifies the type of positioning method used for an element absolute
ther is error should be comma between (.lede-section) and (#left-side)

```

###5
```
#section-9 {
  display: block
  text-decoration: underline;
  font-weight: bold;
}
for id (section-9) property specifies the display behavior (block) of an element , underline of text and bold weight;
There is error shold be semicolon at the end of block.   

```


##What's different about the following three selectors?

###6
```
.fewd25-page-section .another-class {
  text-align: center;
}
```
Selects all elements with (.another-class) that is a descendant of an element with (.fewd25-page-section)


###7
```
.fewd25-page-section, .another-class {
  text-align: center;
}
```
define class (.fewd25-page-section) and (.another-class) for the same property .



###8
```
.fewd25-page-section.another-class {
  text-align: center;
}
```
Selects all elements with both (.fewd25-page-section) and (.another-class) set within its class attribute