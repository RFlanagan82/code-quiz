# code-quiz


## Description
To build a timed code quiz with multiple-choice questions. 

This app will run in the browser and feature dynamically updated HTML and CSS powered by JavaScript code.

This site contains 3 pages in addition to this ReadMe file.

-[Index.html](https://github.com/RFlanagan82/code-quiz/blob/master/index.html)
-[Style.css](https://github.com/RFlanagan82/code-quiz/blob/master/style.css)
-[Script.js](https://github.com/RFlanagan82/code-quiz/blob/master/script.js)

## Accepted Criteria
The accepted criteria is found here:

-[Instructions.md](https://github.com/RFlanagan82/code-quiz/blob/master/instructions.md)

## Usage

All of the files necessary to access this website are available in [this repository](https://github.com/RFlanagan82/code-quiz) 

## Outstanding Issues

This assignment proved more difficult for me to fully execute specifically around advancing the questions and respective answer choices within each, as well as getting the quiz to stop and forward to the record scores page.

Another issue I was having was in trying to record when a user clicked on the correct answer and to add points for that user to the score counter.

At this point I was not able to finish the exercise wher I set the initials of the user into localStorage and called it back in the Highscores page.

## Contributions / Credits

On September 9th, 2020, TA - Stanley Lewis helped me understand how to hard code the logic for onclick event of my button options and advancing my questions.

Later on that day, Sami Sully helped me with formatting how the questions would advance within a conditional if/else statement that set the requirement for the quiz to end. [Specifically lines 101 to 111 on script.js.]

## Challenges

Ultimately I feel that most of the parts to make the application work are here, but I couldn't get the logic to work for when a user clicks on the correct answer, specifically so that it would add points.

I was able to connect the Highscores page via an event listener and get a working timer once the quiz started but without getting the logic to know which answer button was selected - I wasn't able to get the if/else conditional to work based on a wrong answer input or a correct answer input.


## Resources

I used the following resources in my research for this assignment:

[Css formatting:](https://stackoverflow.com/questions/40091515/how-to-have-two-items-on-opposite-sides-on-the-same-line)

[4 Quickest Ways to Center a Div with CSS:](https://www.youtube.com/watch?v=mVYgtzDLZfY)

[Stacking Buttons Vertically:](https://stackoverflow.com/questions/42517956/stack-buttons-vertically)

[Hover Button Properties:](https://www.w3schools.com/css/css3_buttons.asp)

Timer Intervals: Review of material presented in GT-ATL Repo Directory #4 - Activity #8.

## License

MIT License

Copyright (c) [2020] [Ryan Flanagan]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.