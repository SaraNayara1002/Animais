import './App.css'
import { useState } from 'react'
import Animais from './components/Animais.jsx'
import FiltrarAnimais from './components/FiltrarAnimais.jsx'
import CadastrarAnimal from './components/CadastrarAnimal.jsx';


function App() {

  const [listaAnimais, setListaAnimais] = useState([

      { id: 1, descricao: "Urso marrom", img:"https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQjv_ohirXQsJr5HbOMkOcJLPP5fw3aiHBMryqXHipBchLhRCRe4F4RujMvrsIm8vb_", isFinalizado: false},
      { id: 2, descricao: "Poodle branco", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDAIsZWmXQe-fhgmBLDNFhflEFuuQPrjrDOg&usqp=CAU", isFinalizado: true},
      { id: 3, descricao: "Hamster mesclado", img:"https://blog.cobasi.com.br/wp-content/webpc-passthru.php?src=https://blog.cobasi.com.br/wp-content/uploads/2018/07/hamster-sirio-selvagem-pelo-curto.png&nocache=1isFinalizado", isFinalizado : false},

    ]);

 const addAnimal = (txtdescricao) => {
  const newAnimal = [...listaAnimais, 
    {
      id: Math.floor(Math.random()*1000000),
      descricao: txtdescricao,
      isFinalizado: false
    
    }
  ]
  setListaAnimais(newAnimal);
 }

  const animalencontrado = (id) => {
    const newAnimal = [...listaAnimais]
    newAnimal.map((item) => {
      if(item.id === id){
        item.isFinalizado =  !item.isFinalizado
      }
    })

    setListaAnimais(newAnimal);
  }

  const animalperdido = (id) => {
    const newAnimal = [...listaAnimais]
    newAnimal.map((item) => {
      if(item.id === id){
        item.isFinalizado =  !item.isFinalizado
      }
    })

    setListaAnimais(newAnimal);
  }

  const removerAnimal = (id) => {
    const newAnimal = [...listaAnimais].filter(item => item.id !== id);
    

  setListaAnimais (newAnimal);
  }

  const [filtraranimal, setFiltrarAnimais] = useState('Todos');
  const [ search, setSearch] = useState('');
  const [sort, setSort] = useState('');



  return (
    <>
     <div className="app">
     <h1 className='titulo_cadastrar'>Cadastro dos Animais</h1>
      <CadastrarAnimal addAnimal={addAnimal} />
           
      <FiltrarAnimais filtrarAnimal={filtraranimal} setFiltrarAnimais={setFiltrarAnimais} setSort={setSort}search={search} setSearch={setSearch} />
      
      <div className='listaAnimais'>
        {
          listaAnimais
          .filter( item => {
            if(item.descricao.toLowerCase(). includes (search.toLowerCase())){
              return item;
            }
            
          })
          .filter(item => filtraranimal === "Todos" ? true : 
                          filtraranimal === "Encontrados" ? item.isFinalizado == true : item.isFinalizado == false)
          .sort((a, b) => sort === "Crescente" ? a.descricao.localeCompare(b.descricao) : sort === "Decrescente" ? b.descricao.localeCompare(a.descricao) : false)
          
            .map((item) => (
            <Animais key={item.id} item={item}
             animalencontrado={animalencontrado}
             removerAnimal={removerAnimal} 
             animalperdido={animalperdido}/>
          ))
        }

      </div>
     </div>
    </>
  )
}

export default App;
