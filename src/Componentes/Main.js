import React,{useState} from 'react'

export default function Main() {
  const [img, setImg]= useState("https://cdn2.thecatapi.com/images/ei6.jpg");
  const callImg =()=>{
    /* fetch() realiza requisições http para o endereço informado como parâmetro*/
    fetch("https://api.thecatapi.com/v1/images/search")
    
    .then(res=>res.json())
    .then(data=>setImg(data[0].url))
  }
  return (
    <>
      <div className="container">
        <div className="box">
            <h2>Enjoy the kitty</h2> <br />
            <img src={img} /><br />
            <button onClick={()=> callImg()}>Click me</button>
        </div>
      </div>
    </>
  )
}
