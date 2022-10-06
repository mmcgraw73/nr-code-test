# nr-code-test

please create a function that when given text(s) will return a list of the 100 most common three word sequences.

- how to run your program:
  1. navigate to [STACKBLITZ DEMO ⚡️](https://stackblitz.com/edit/nr-code-test?file=index.js&view=editor)
  2. in the attached terminal, run `node index.js`
- What you would do next, given more time (if anything)?
  1. break out functionality into exports and compose inside index.js
- Are there bugs that you are aware of?
  1. the length used in the for loop does not seem to be correct since it produces duplicates - i added a filter to remove the dupes

#### EXAMPLE OUTPUT

```
This example illustrates - 28
you want to - 22
tag like right - 22
like right here - 22
If you want - 22
you need to - 19
a line break - 19
give you a - 19
Enter key you - 11
will not get - 11
a new paragraph - 11
To illustrate this - 11
I am pressing - 11
Enter right here - 11
and as you - 11
can see the - 11
line continue If - 11
break the line - 11
enter the 'P' - 11
here The P - 11
tag will give - 11
you a blank - 11
line and start - 11
the paragraph in - 11
the next line - 11
As it happened - 11
in the prior - 11
paragraph If all - 11
you want is - 11
without a blank - 11
line then use - 11
the BR tag - 11
See what happened? - 11
to include text - 11
'as is' like - 11
the one you - 11
you will not - 11
get a new - 11
paragraph To illustrate - 11
this I am - 11
pressing Enter right - 11
here and as - 11
you can see - 11
the line continue - 11
to break the - 11
line you need - 11
to enter the - 11
'P' tag like - 11
right here The - 11
P tag will - 11
blank line and - 11
start the paragraph - 11
in the next - 11
line This example - 11
illustrates As it - 11
happened in the - 11
prior paragraph If - 11
all you want - 11
is a line - 11
break without a - 11
blank line then - 11
use the BR - 11
here See what - 11
happened? If you - 11
want to include - 11
text 'as is' - 11
like the one - 11
how to write - 9
plain text in - 9
an HTML file - 9
Blank lines as - 9
next line are - 9
ignored Similarly if - 9
you press the - 9
illustrates how to - 9
write plain text - 9
in an HTML - 9
file Blank lines - 9
as next line - 9
are ignored Similarly - 9
if you press - 9
the Enter key - 9
are just reading - 8
all you need - 8
to is use - 8
the PRE tag - 8
This will allow - 8
you to display - 8
text exactly as - 8
you type it - 8
It will give - 8
you a line - 8
break wherever you - 8
press Enter like - 8
here This is - 8
very useful for - 8
preformatted text like - 8
tables etc For - 8
example This example - 8
illustrates This example - 8
```
