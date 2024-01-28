import EquationsCard from '../../Components/Cards/EquationsCard/EquationsCard.jsx'
import AnswerCard from '../../Components/Cards/AnswerCard/AnswerCard.jsx';
import './addSubtractMultiply.css'

export default function addSubtractMultiply() {
    
  let mathArray = [];

  function commaNumber(x) { //puts a comma in the number (string) (in the thousands)
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function numberSort(a, b){
    let temp;
    if (a < b){ //put the larger number in variable a
      temp = a;
      a = b;
      b = temp;
    }
    const sortObj = {
      firstNum: a,
      secondNum: b
    }
    return sortObj
  }
  function equation(num){
    const questionNumber = num;
    let highNumber = 10000;

    let a = Math.floor(Math.random() * highNumber);
    let b = Math.floor(Math.random() * highNumber);
        
    let operator
    let total
        
    const randomPicker = Math.floor(Math.random() * 3); //picks a random number, either 0 or 1 (+ or -)
    
    if (randomPicker==0){ //randomize the operator and calculate the correct total
      const numbers = numberSort(a, b);
      a = numbers.firstNum;
      b = numbers.secondNum;
      operator = '-'
      total = a - b;
    }
    else if (randomPicker==1) {
      const numbers = numberSort(a, b);
      a = numbers.firstNum;
      b = numbers.secondNum;
      operator = '+'
      total = a + b;
    }
    else if (randomPicker==2) {
      highNumber = 13
      a = Math.floor(Math.random() * highNumber);
      b = Math.floor(Math.random() * highNumber);
      operator = 'x'
      total = a * b;
    }

    a = commaNumber(a);
    b = commaNumber(b);
    total = commaNumber(total);
        
    let obj = {
      number: questionNumber,
      operator: operator,
      a: a,
      b: b,
      total: total
    }
    return obj
  }

  const numberOfQuestions = 100;
  for (let i=0; i<numberOfQuestions; i++){
    mathArray.push(equation(i+1))
  }

  return(
    <div className="container">
      {mathArray.map((eq) => {
        {if (eq.number > 1 && eq.number%20 == 1){
          return(
            <div key={eq.number} className='map-container'>
              <div className="page-spacer"></div>
              <EquationsCard eq={eq}/>
            </div>
          )
        }}

        return(
          <EquationsCard key={eq.number} eq={eq}/>
        )
      })}
      
      <div className="answers-title">
        <div className="page-spacer"></div>
        <h1>These are the Answers</h1>
      </div>
      
      {mathArray.map((eq) => {
        return(
          <AnswerCard key={eq.number} eq={eq} />
        )
      })}
    </div>
  )
}