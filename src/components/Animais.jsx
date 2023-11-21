function Animais({item, animalencontrado, removerAnimal, animalperdido}){
  
    return (
        <div className="Animal">

            <img src={item.img}/>
            <span style={{textDecoration: item.isFinalizado ? 'line-through' : ''}}>{item.descricao}</span>  
             <div className='Animais'>
                <button className='botaoencontrado' onClick={() => animalencontrado(item.id)}>Encontrado</button>
                <button className='botaoperdido' onClick={() => animalperdido(item.id)}>Perdido</button>
                <button className='botaoRemover' onClick={() => removerAnimal(item.id)}>Remover</button>
              </div>
            </div>

    )
}

export default Animais;