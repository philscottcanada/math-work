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
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'letter', true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) /2;
      const imgY = 30;
      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      //pdf.addImage(imgData, 'PNG', 8.5, 11, 1, 1);
      pdf.save('math.pdf');
      //console.log("pdfWidth",pdfWidth, "pdfHeight", pdfHeight, "canvasWidth", imgWidth, "canvasHeight", imgHeight, "ratio", ratio)
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
      {/* <button onClick={handleClick}>Download PDF</button> */}
    </div>
  )
}