// Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:
// let a = 10;
// document.write("The value of a is" ,a,"<br>"); 
// document.write("The value of a is" ,++a,"<br>");
// document.write("The value of a is" ,a++,"<br>");
// document.write("The value of a is" ,--a,"<br>");
// document.write("The value of a is" ,a--,"<br>");

// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

// let a = 2;
// document.write("The value of a is", --a);

// 1.--a:
// This is a pre-decrement operation on a. It decreases a by 1 before using it in the expression.
// New value of a: 1
// Result of --a: 1

// 2.--a - --b:
// Now, we evaluate --b. This is also a pre-decrement operation on b, which decreases b by 1 before using it.
// New value of b: 0
// Result of --b: 0
// Calculation: 1 - 0 = 1
// let a = 2;
// let b = 1;
// document.write("The value of a and b is", --a - --b);
//3.--a - --b + ++b:
// We have the result from the previous step, which is 1.
// Now, we evaluate ++b. This is a pre-increment operation on b, which increases b by 1 before using it.
// New value of b: 1 (after incrementing from 0)
// Result of ++b: 1
// Calculation: 1 + 1 = 2
// let a = 2;
// let b = 1;
// document.write("The value of a and b is", --a - --b + ++b);
// 4.--a - --b + ++b + b--:
// We have the result from the previous step, which is 2.
// Now we evaluate b--. This is a post-decrement operation on b.
//  It uses the current value of b first (which is 1), and then decreases b by 1 after using it.
// Result of b--: 1 
// New value of b: 0
//calculate:2+1=3;
// let a = 2;
// let b = 1;
// document.write("The value of a and b is", --a - --b + ++b + b--);
// 3.Write a program that takes input a name from user &
// greet the user.
// let name = prompt("What's your name?");
// document.write("Hello!", name);
// 5.Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.
    // var number = prompt("Enter a number");
    // for (var i = 1; i <= 10; i++) {
    //     table = number + " x " + i + " = " + (number * i) + "<br>";
    //     document.write(table);
    // }

//6. a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

    //  let subject1 = prompt("Enter the name of the first subject:");
    //  let subject2 = prompt("Enter the name of the second subject:");
    //  let subject3 = prompt("Enter the name of the third subject:");
    //  let totalMarksPerSubject = 100;
    //  let totalSubjects = 3;
    //  let totalMarks = totalMarksPerSubject * totalSubjects;
    //  let obtainedMarks1 = prompt("Enter obtained marks for " + subject1 + ":");
    //  let obtainedMarks2 = prompt("Enter obtained marks for " + subject2 + ":");
    //  let obtainedMarks3 = prompt("Enter obtained marks for " + subject3 + ":");
    //  let totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
    //  let percentage = (totalObtainedMarks / totalMarks) * 100;
    //  document.write(percentage);



   


