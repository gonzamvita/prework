var user = {}

var responses = []

function question1() {
  var name = prompt('What is your name?')
  user.name = name
}

question1();


function question2() {

  var firstQuestion = prompt('Does null === 0 ? (Yes or No)')

// why do you need to convert the answer to lowercase?
  if (firstQuestion.toLowerCase() === 'yes') {
    firstQuestion = true
  } else if (firstQuestion.toLowerCase() === 'no') {
    firstQuestion = false
  } else {
// what if the user writes something other than yes or no?
// they will have to answer the question again
    alert("Please answer either Yes or No");
    return question2();
  }
  responses.push(firstQuestion); // add the true or false value to the responses array
}

question2();


function question3() {
  var js = prompt('What was the original name for JavaScript: Java, LiveScript, JavaLive, or ScriptyScript?');
  js = js.toLowerCase();
  switch (js) {
    case 'java':
      alert('No, Java is another different language');
      js = false;
      responses.push(js);
    break;

    case 'livescript':
      js = true;
      responses.push(js);
    break;

    case 'javalive':
      alert('Almost! I will give you one more chance');
      secondchance();
    break;

    case 'scriptyscript':
      alert('really?');
      js = false;
      responses.push(js);
    break;

    default:
      js = false;
      responses.push(js);
    break;
  }
}

function secondchance(){
  question3();
}

question3();


function question4() {

  var phrase = "Ganska exakt en och en halv timme efter samtalet från Lisa Holms mobiltelefon till pappan steg 35-åringen och hans fru in i affären Handlarn i Källby, fem kilometer från Blomberg."
  var question = prompt('How many letters å can you count in this phrase?: '+ phrase );

  counter = charFreq(phrase);

  if (question == counter['å']){
    question = true;
  }else{
    question = false;
  }

  responses.push(question);
}

question4();


function charFreq(string) {

  freqCounter = {};

  var array = string.split('');

  for (var i = array.length - 1; i >= 0; i--) {
    if (array[i] in freqCounter) {
      freqCounter[array[i]] += 1;
    }else{
      freqCounter[array[i]] = 1;
    };
  };

  return freqCounter;
}


function evaluate(responsesArray) {

// declare two variables to store the totals
  var correct = 0;
  var incorrect = 0;

// populate the “totals” variables from the “responsesArray”

  for (var i = responsesArray.length - 1; i >= 0; i--) {
    if (responsesArray[i]){
      correct++;
    }else{
      incorrect++;
    };
  };

// save the “totals” variables inside the user object
  user.correct = correct;
  user.incorrect = incorrect;

// call showResults
  showResults()
}

function showResults() {
  console.log("So, " + user.name + " you had " + user.correct + " correct answers, and " + user.incorrect + " incorrect answers.")
  if (user.incorrect == 0) {
    console.log("That's a perfect!")
  }else{
    console.log("Well done!")
  };
}

// call the function, passing it the responses array
evaluate(responses);
