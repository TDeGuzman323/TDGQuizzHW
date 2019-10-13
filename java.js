var start = confirm ("Press OK to start the quiz!");
if (start == true) {
    alert("Let's Go!");
}
else {
    alert("Wuss!");
}


(function()
    {
        var allQuestions = [{
        question: "What is an informal, natural language description of a software system?",
        options: ["User story", "Boundary Object", "Benefits", "Case Practice"],
        answer: 0
    }, {
        question: "What do user stories facilitate?",
        options: ["Criteria", "Techniques", "Story Map", "Sensemaking & Communicating"],
        answer: 3
    }, {
        question: "Who visited the Chrysler C3 project in Detroit in 1998?",
        options: ["Bill Gates", "Steve Jobs", "Alistair Cockburn", "Joe Fraser"],
        answer: 2
    }, {
        question: "Which is the most common userxs story template?",
        options: ["Jagabond", "Connextra", "ExConlo", "Newark"],
        answer: 1
    }, {
        question: "User stories are prioritized by whom?",
        options: ["the developer", "the customer", "the seller", "the marketer"],
        answer: 1
    }, {
        question: "Who defined ACCEPTANCE CRITERIA as 'notes about what the story must do in order for the project ownder to accept it as complete.'?",
        options: ["Mike Cohn", "Daniel Craig", "Roy Stewart", "Stewie Douglas"],
        answer: 0
    }, {
        question: "Which process uses the 'Double Diamond' rule?",
        options: ["SHEQC", "JAVA", "PYTHON", "NCIS"],
        answer: 0
    }, {
        question: "Large stories or multiple user stories that are very closely related are summarized as what? ",
        options: ["Initiave", "Theme", "Epics", "Story Map"],
        answer: 2
    }, {
        question: "Fill in the blank: A story-map is a graphical, two-dimensional visualization of the ---",
        options: ["Hierarchically", "Activities", "Product Backlog", "Workflow"],
        answer: 2
    }, {
        question: "Why do themes exist in Jira?",
        options: ["for to-do lists", "for tracking purposes", "features", "product design"],
        answer: 1
    }];

var quesCounter = 0;
var selectOptions = [];
var quizSpace = $('#quiz');
  
nextQuestion();
  
$('#next').click(function () 
  {
      chooseOption();
      if (isNaN(selectOptions[quesCounter])) 
      {
          alert('Please select an option !');
      } 
      else 
      {
        quesCounter++;
        nextQuestion();
      }
  });

$('#prev').click(function () 
  {
      chooseOption();
      quesCounter--;
      nextQuestion();
  });

function createElement(index) 
  {
      var element = $('<div>',{id: 'question'});
      var header = $('<h2>Question No. ' + (index + 1) + ' :</h2>');
      element.append(header);

      var question = $('<p>').append(allQuestions[index].question);
      element.append(question);

      var radio = radioButtons(index);
      element.append(radio);

      return element;
  }

function radioButtons(index) 
  {
      var radioItems = $('<ul>');
      var item;
      var input = '';
      for (var i = 0; i < allQuestions[index].options.length; i++) {
        item = $('<li>');
        input = '<input type="radio" name="answer" value=' + i + ' />';
        input += allQuestions[index].options[i];
        item.append(input);
        radioItems.append(item);
      }
      return radioItems;
}

function chooseOption() 
  {
      selectOptions[quesCounter] = +$('input[name="answer"]:checked').val();
  }
 
function nextQuestion() 
  {
      quizSpace.fadeOut(function() 
          {
            $('#question').remove();
            if(quesCounter < allQuestions.length)
              {
                  var nextQuestion = createElement(quesCounter);
                  quizSpace.append(nextQuestion).fadeIn();
                  if (!(isNaN(selectOptions[quesCounter]))) 
                  {
                    $('input[value='+selectOptions[quesCounter]+']').prop('checked', true);
                  }
                  if(quesCounter === 1)
                  {
                    $('#prev').show();
                  } 
                  else if(quesCounter === 0)
                  {
                    $('#prev').hide();
                    $('#next').show();
                  }
              }
            else 
              {
                  var scoreRslt = displayResult();
                  quizSpace.append(scoreRslt).fadeIn();
                  $('#next').hide();
                  $('#prev').hide();
              }
      });
  }

function displayResult() 
  {
      var score = $('<p>',{id: 'question'});
      var correct = 0;
      for (var i = 0; i < selectOptions.length; i++) 
      {
        if (selectOptions[i] === allQuestions[i].answer) 
        {
          correct++;
        }
      }
      score.append('You scored ' + correct + ' out of ' +allQuestions.length);
      return score;
}
})();


 
