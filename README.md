# Console Finances

## Description
I was tasked by the client to analyse a set of pre-collected data to determine the following:

- The total months that the data spanned
- The net total amount of profit / losses over the given period
- The average change between each month
- The greatest increase in profits and it's associated month
- The greaest losses in profits and it's associated month

The data was provided in an multidimensional array

## Challenges Faced

### Currency

Dealing with currency faced a different challenge as I figured that rounding may cause issues with accuracy. I researched this a lot but any solouton seemed to be too complicated and nothing we had actually 'learnt' in class yet (classes etc). I opted to use toFixed, which rather than rounding, cuts the figure off at a certain decimal point. 

The criteria mentions printing to the nearest 100th. Using the 'ToFixed' method returns the value to as many decimal points. The negative, is that it converts it to a string, but for this assignment, the value was not used any further, so decided to stick with it.

### Variable Names

Realised it's very important to have good naming conventions for variables. The amount of variables in this assignment was quite a lot. Instead of declaring them at the top of the program, I declared them shortly before they were used so it would be easier to read.

### Messy but Functional

Like most of the code I'm writing at the moment, it seems to be messy, but also scalable and functionable.
As I learn more algorithms and develop my problem solving, I'll become more efficent.

## For Next Time

I could make a lot of this code into functions. I'm using a lot of the same code repetedley. I was stuck for a few hours on finding the averages of the profit differences. The most important lesson I've learnt from this assignment is to keep going! The breakthrough will come. 


## Installation

Run the website by following the GitGub Pages link: 
https://josephnamihas.github.io/Console-Finances/

Press F12 to open the Dev Tools and scroll to the 'Console' Tab.


## Useage


![Website](/images/website-index.png)

![Console Finances](/images/console-finances.PNG)


## Credits

https://developer.mozilla.org/

https://www.w3schools.com/

https://www.javascripttutorial.net/javascript-multidimensional-array/

aaronlapworth@hotmail.co.uk (Aaron Lapworth) for answering questions on Slack


## License 

MIT License

Copyright (c) [2022] [Joseph Namihas]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.