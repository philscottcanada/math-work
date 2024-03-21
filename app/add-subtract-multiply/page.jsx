"use client"
import dynamic from 'next/dynamic.js';
import { useEffect, useRef } from 'react';
import { printPDF } from '../../Components/PrintPDF/printPDF.js'
const EquationsCard = dynamic(()=> import('../../Components/Cards/EquationsCard/EquationsCard.jsx'), {ssr: false})
const AnswerCard = dynamic(()=> import('../../Components/Cards/AnswerCard/AnswerCard.jsx'), {ssr: false})
import '../equationPage.css'

export default function AddSubtractMultiply( {searchParams} ) {

  const pdfRef = useRef();

  useEffect(()=>{
    if (searchParams.output == 'pdf'){
      setTimeout(()=>{
        printPDF(pdfRef, searchParams.questions)
      }, 500)
    }
  }, [])
  
  var highNumber;
  if (searchParams.digits == '4') {highNumber = 10000;}
  else if (searchParams.digits == '3') {highNumber = 1000;}
  else if (searchParams.digits == '2') {highNumber = 100;}
  else {highNumber = 10;}
    
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

    let a = Math.floor(Math.random() * highNumber);
    let b = Math.floor(Math.random() * highNumber);
        
    let operator
    let total
        
    const randomPicker = Math.floor(Math.random() * 3); //picks a random number, either 0, 1 or 2 (for - or + or *)
    
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
      const realHighNumber = highNumber;
      highNumber = 13
      a = Math.floor(Math.random() * highNumber);
      b = Math.floor(Math.random() * highNumber);
      operator = 'x'
      total = a * b;
      highNumber = realHighNumber;
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

  const numberOfQuestions = searchParams.questions;
  for (let i=0; i<numberOfQuestions; i++){
    mathArray.push(equation(i+1))
  }

  return(
    <div className="container" ref={pdfRef}>
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
        <h1 className='answers-header'>These are the Answers</h1>
      </div>
      
      {mathArray.map((eq) => {
        return(
          <AnswerCard key={eq.number} eq={eq} />
        )
      })}
    </div>
  )
}