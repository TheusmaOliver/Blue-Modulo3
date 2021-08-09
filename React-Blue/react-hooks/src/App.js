import React, { useCallback, useEffect, useMemo, useState } from 'react'; 
import './App.css';

function App() {
  
  const [alunos,setAlunos] = useState([
    "Matheus Rodrigues",
    "Gustavo Henrique",
    "Juno",
    "João Vitor"
  ])

  const [nome,setNome] = useState('Lista de alunos')

  const [input,setInput] = useState("");

  useEffect(()=>{
    localStorage.setItem("alunos",JSON.stringify(alunos))
  },[alunos])

  const handleAdd = useCallback(() =>{
    setAlunos([...alunos,input]);
    setInput("");

  }, [input,alunos])

  const totalAlunos = useMemo(() => alunos.length, [alunos]);

  const arr = [0]
  arr.push(1)
  console.log(arr)
  return (
    <div className="App">
      <ul>
        <h1>{nome}</h1>
        {alunos.map((aluno)=>(
          <>
            <li key={aluno}>{aluno}</li>
            <hr/>
          </>
        ))}
      </ul>
      <br/>
      <strong>Você tem {totalAlunos} cadastrados.</strong>
      <br/>
      <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
      <button type="button" onClick={handleAdd} > Adicionar </button>
    </div>
  );
}

export default App;
