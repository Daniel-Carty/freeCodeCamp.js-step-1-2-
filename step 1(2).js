/*This function classifies exam Grades; from 'A++' to 'F' according
to the student's scores; from 0 to 100.  A score of 100 returns
a Grade A++, while a score of 63 returns a Grade 'D'.*/

function getGrade(score) {

    if(score > 0, score <= 59) {return "F";
    }
    else if(score >= 60, score <= 69) {return "D";
    }
    else if(score >= 70, score <= 79) {return "C";
    }
    else if (score >= 80, score <= 89) {return "B";
    }
    else if (score >= 90, score <= 99) {return "A";
    }s
    else if(score == 100) {return "A++";
    }
    else {return "Please try again";
    }
  }
    
  //Enter a score between (0) and (100) to get a Grade.//
  console.log(getGrade(96)); 
  console.log(getGrade(82));
  console.log(getGrade(56));
  
