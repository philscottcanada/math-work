"use client"
import dynamic from 'next/dynamic.js';
const EquationsCard = dynamic(()=> import('../../Components/Cards/EquationsCard/EquationsCard.jsx'), {ssr: false})
const AnswerCard = dynamic(()=> import('../../Components/Cards/AnswerCard/AnswerCard.jsx'), {ssr: false})
import './addition.css'

import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { useRef } from 'react';


export default function Additions( {searchParams} ) {

  const pdfRef = useRef();

  function handleClick(){
    const pages =  (searchParams.questions / 20) + 1;
    const input = pdfRef.current;
    html2canvas(input, {
      windowWidth: 760,
      width: 760,
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'letter', true);
      const pdfPageWidth = pdf.internal.pageSize.getWidth();
      const pdfPageHeight = pdf.internal.pageSize.getHeight();
  
      let position = 5

      for (var i = 0; i < pages; i++) {
        if (i > 0) {
          pdf.addPage();
        }
        pdf.addImage(imgData, 'PNG', 4, position, pdfPageWidth, pdfPageHeight * pages * 0.65);
        position -= (pdfPageHeight+7);
      }
      pdf.save('math.pdf');
    })
  }
  
  var highNumber;
  if (searchParams.digits == '4') {highNumber = 10000;}
  else if (searchParams.digits == '3') {highNumber = 1000;}
  else if (searchParams.digits == '2') {highNumber = 100;}
  else {highNumber = 10;}
    
  let mathArray = [];

  function commaNumber(x) { //puts a comma in the number (string) (in the thousands)
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function equation(num){
    const questionNumber = num;

    let a = Math.floor(Math.random() * highNumber);
    let b = Math.floor(Math.random() * highNumber);
    let temp;
    
    if (a < b){ //put the larger number in variable a
      temp = a;
      a = b;
      b = temp;
    }
    let total = a + b;

    a = commaNumber(a);
    b = commaNumber(b);
    total = commaNumber(total);
    
    let obj = {
      number: questionNumber,
      operator: '+',
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
    <div>
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
    <button onClick={handleClick}>Download PDF</button>
    </div>
  )
}