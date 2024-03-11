"use client"
import { useState } from "react";
import Link from "next/link";
import './app.css'

export default function Home() {
  
  const [questionsVal, setQuestionsVal] = useState("100")
  const [digitsVal, setDigitsVal] = useState("4")
  const [selectedOutput, setSelectedOutput] = useState("web")
  
  return (
    <div>
      <div className="container">
        <div className="container-options">
          <div className="questions-container">
            <label htmlFor="questions"># of Questions: </label>
            <select name="questions" id="questions" defaultValue={'100'} 
              onChange={()=>{
                setQuestionsVal(questions.value)}}>
              <option value="20">20</option>
              <option value="40">40</option>
              <option value="60">60</option>
              <option value="80">80</option>
              <option value="100">100</option>
            </select>
          </div>
          <div className="questions-container">
            <label htmlFor="questions">Max # of Digits: </label>
            <select name="digits" id="digits" defaultValue={'4'} 
              onChange={()=>{
                setDigitsVal(digits.value)}}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            
          </div>
          
        </div>
        <div className="radio-button-container">
          <div>
            <input type="radio" className="radio" name="outputType" value="web" checked={selectedOutput==='web'} onChange={()=>{setSelectedOutput('web')}}/>
            <label htmlFor="radio">Web Only</label>
          </div>
          <div>
            <input type="radio" className="radio" name="outputType" value="pdf" checked={selectedOutput==='pdf'} onChange={()=>{setSelectedOutput('pdf')}} />
            <label htmlFor="radio">Web + PDF File Download</label>
          </div>
        </div>
        <div className="container-links">
          <li className="">
            <ul className="links"><Link href= {{pathname: '/addition', query: {questions: questionsVal, digits: digitsVal, output: selectedOutput}}}> Addition Problems</Link></ul>
            <ul className="links"><Link href= {{pathname: '/subtraction', query: {questions: questionsVal, digits: digitsVal, output: selectedOutput}}}> Subtraction Problems</Link></ul>
            <ul className="links"><Link href= {{pathname: '/multiply', query: {questions: questionsVal, digits: digitsVal, output: selectedOutput}}}> Multiplication Problems</Link></ul>
            <ul className="links"><Link href= {{pathname: '/multiply-decimal', query: {questions: questionsVal, digits: digitsVal, output: selectedOutput}}}> CHRISTIE SPECIAL!!!</Link></ul>
            <ul className="links"><Link href= {{pathname: '/timestable', query: {questions: questionsVal, digits: digitsVal, output: selectedOutput}}}> 12 X 12 Times Table</Link></ul>
            <ul className="links"><Link href= {{pathname: '/add-subtract', query: {questions: questionsVal, digits: digitsVal, output: selectedOutput}}}> Mixed - Add/Subtract + - Problems</Link></ul>
            <ul className="links"><Link href= {{pathname: '/add-subtract-multiply', query: {questions: questionsVal, digits: digitsVal, output: selectedOutput}}}> Mixed - Add/Subtract/Multiply + - x Problems</Link></ul>
          </li>  
        </div>
      </div>
    </div>
  );
}
