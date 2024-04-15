// Function to get the grade based on the input mark
function getGrade(mark) {
    if (mark > 79) {
        return 'A';
    } else if (mark >= 60 && mark <= 79) {
        return 'B';
    } else if (mark >= 50 && mark <= 59) {
        return 'C';
    } else if (mark >= 40 && mark <= 49) {
        return 'D';
    } else {
        return 'E';
    }
  }
  
  // Function to prompt the user for input and display the grade
  function promptUserForGrade() {
    // Prompt the user for input
    let mark = parseInt(prompt("Enter the student's mark (between 0 and 100):"));
  
    // Validate input
    if (isNaN(mark) || mark < 0 || mark > 100) {
        alert("Invalid input! Please enter a number between 0 and 100.");
        return;
    }
  
    // Get the grade
    let grade = getGrade(mark);
  
    // Display the grade
    alert("The student's grade is: " + grade);
  }
  
  // Call the function to start the program
  promptUserForGrade();
  
