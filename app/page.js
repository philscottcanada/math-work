import Link from "next/link";
import './app.css'

export default function Home() {
  
  
  
  return (
    <div className="container">
      <li className="links">
        <ul><button><Link className="links" href='/addition'> Addition Problems</Link></button></ul>
        <ul><Link className="links" href='/addition'> Addition Problems</Link></ul>
        <ul><Link className="links" href='/subtraction'> Subtraction Problems</Link></ul>
        <ul><Link className="links" href='/multiply'> Multiplication Problems</Link></ul>
        <ul><Link className="links" href='/timestable'> 12 X 12 Times Table</Link></ul>
        <ul><Link className="links" href='/add-subtract'> Mixed - Add/Subtract + - Problems</Link></ul>
        <ul><Link className="links" href='/add-subtract-multiply'> Mixed - Add/Subtract/Multiply + - x Problems</Link></ul>
        <ul><Link className="links" href='/test'>Test Page</Link></ul>
      </li>  
    </div>
  );
}
