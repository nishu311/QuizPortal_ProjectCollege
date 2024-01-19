export const pythonProgrammingQuiz = {
    topic: 'Python Programming',
    level: 'Beginner',
    totalQuestions: 20,
    perQuestionScore: 5,
    questions: [
      {
        question: "What is the correct syntax for printing 'Hello, World!' in Python?",
        choices: ["print('Hello, World!')", "echo 'Hello, World!'", "System.out.println('Hello, World!')", "printf('Hello, World!')"],
        type: 'MCQs',
        correctAnswer: "print('Hello, World!')",
      },
      {
        question: "Which of the following is the correct way to comment out a single line in Python?",
        choices: ['# This is a comment', '// This is a comment', '/* This is a comment */', '-- This is a comment'],
        type: 'MCQs',
        correctAnswer: '# This is a comment',
      },
      {
        question: "What is the purpose of the 'input()' function in Python?",
        choices: ["Print text to the console", "Read input from the console", "Perform mathematical operations", "Allocate memory"],
        type: 'MCQs',
        correctAnswer: 'Read input from the console',
      },
      {
        question: "Which data type is used to store a sequence of characters in Python?",
        choices: ["int", "float", "char", "str"],
        type: 'MCQs',
        correctAnswer: 'str',
      },
      {
        question: "In Python, how do you declare a variable and assign a value to it in a single line?",
        choices: ["int x = 5;", "x = 5;", "var x = 5;", "declare x = 5;"],
        type: 'MCQs',
        correctAnswer: 'x = 5;',
      },
      {
        question: "What is the output of the following code snippet?\n\n```python\nx = 'Hello'\nprint(x[1])\n```",
        choices: ["e", "H", "o", "l"],
        type: 'MCQs',
        correctAnswer: 'e',
      },
      {
        question: "Which keyword is used to define a function in Python?",
        choices: ["def", "function", "define", "func"],
        type: 'MCQs',
        correctAnswer: 'def',
      },
      {
        question: "What is the purpose of the 'return' statement in a function?",
        choices: ["Print a value to the console", "End the program", "Return a value from the function", "Declare a variable"],
        type: 'MCQs',
        correctAnswer: 'Return a value from the function',
      },
      {
        question: "How do you check the length of a list in Python?",
        choices: ["len(list)", "length(list)", "list.length()", "count(list)"],
        type: 'MCQs',
        correctAnswer: 'len(list)',
      },
      {
        question: "What is the correct way to create an empty list in Python?",
        choices: ["list = {}", "list = []", "list = [0]", "emptyList()"],
        type: 'MCQs',
        correctAnswer: 'list = []',
      },
      {
        question: "Which loop is used for iterating over a sequence (list, tuple, or string) in Python?",
        choices: ["for loop", "while loop", "do-while loop", "if statement"],
        type: 'MCQs',
        correctAnswer: 'for loop',
      },
      {
        question: "What is the purpose of the 'break' statement in a loop?",
        choices: ["Exit the loop", "Skip the current iteration and move to the next", "Restart the loop", "Break the loop"],
        type: 'MCQs',
        correctAnswer: 'Exit the loop',
      },
      // Add more questions here...
      {
        question: "How do you open a file in Python?",
        choices: ["openfile()", "file.open()", "open('filename.txt')", "fopen('filename.txt')"],
        type: 'MCQs',
        correctAnswer: "open('filename.txt')",
      },
      {
        question: "What is the purpose of the 'with' statement in Python file handling?",
        choices: ["Open a file for reading", "Open a file for writing", "Ensure proper file closure", "Create a new file"],
        type: 'MCQs',
        correctAnswer: 'Ensure proper file closure',
      },
      {
        question: "What is the output of the following code snippet?\n\n```python\nx = [1, 2, 3]\nprint(x[2])\n```",
        choices: ["1", "2", "3", "IndexError"],
        type: 'MCQs',
        correctAnswer: '3',
      },
      {
        question: "Which built-in function is used to sort a list in Python?",
        choices: ["sort()", "sorted()", "order()", "arrange()"],
        type: 'MCQs',
        correctAnswer: 'sorted()',
      },
      {
        question: "What is the purpose of the 'try' and 'except' blocks in Python?",
        choices: ["Define a function", "Handle exceptions", "Declare variables", "Create a loop"],
        type: 'MCQs',
        correctAnswer: 'Handle exceptions',
      },
      {
        question: "What does the '__init__' method in a class in Python represent?",
        choices: ["Initialize the class", "Destroy the class", "Print the class", "Rename the class"],
        type: 'MCQs',
        correctAnswer: 'Initialize the class',
      },
      {
        question: "Which library is commonly used for data manipulation and analysis in Python?",
        choices: ["matplotlib", "numpy", "pandas", "scikit-learn"],
        type: 'MCQs',
        correctAnswer: 'pandas',
      },
    ],
  };
  