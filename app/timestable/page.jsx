import Image from 'next/image'
import EquationsCard from '../../Components/Cards/EquationsCard/EquationsCard.jsx'
import AnswerCard from '../../Components/Cards/AnswerCard/AnswerCard.jsx';
import './timesTable.css'

export default function TimesTable() {
    
  let mathArray = [];

  function equation(num){
    const questionNumber = num;
    const highNumber = 13;

    let a = Math.floor(Math.random() * highNumber);
    let b = Math.floor(Math.random() * highNumber);
    
    const total = a * b;
    
    let obj = {
      number: questionNumber,
      operator: 'x',
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
      <Image src={'/MultiplicationTable.jpeg'} alt='Times Table Image' width={1200} height={800}></Image>
      <div className="top-spacer"></div>
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