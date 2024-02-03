"use client"
import dynamic from 'next/dynamic.js';
import { useEffect, useRef } from 'react';
import { printPDF } from '../../Components/PrintPDF/printPDF.js'
const EquationsCard = dynamic(()=> import('../../Components/Cards/EquationsCard/EquationsCard.jsx'), {ssr: false})
const AnswerCard = dynamic(()=> import('../../Components/Cards/AnswerCard/AnswerCard.jsx'), {ssr: false})
import './timesTable.css'

export default function TimesTable({ searchParams }) {

  const pdfRef = useRef();

  useEffect(()=>{
    if (searchParams.output == 'pdf'){
      setTimeout(()=>{
        printPDF(pdfRef, searchParams.questions)
      }, 500)
    }
  }, [])  
    
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