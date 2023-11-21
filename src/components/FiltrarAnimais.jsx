function FiltrarAnimais({filtrarAnimal, setFiltrarAnimais, search, setSearch, setSort}){
    return(
        <>
        <h2>Filtrar Animais</h2> 
        <div className="filtrarAnimal">
            <input type="text" placeholder="Digite para pesquisar o animal desejado"
                   value={search}
                   onChange={(e) => setSearch(e.target.value)} />
            <select value={filtrarAnimal} onChange={(e) => setFiltrarAnimais(e.target.value)}>
                <option value="Todos">Todos</option>
                <option value="Encontrados">Encontrados</option>
                <option value="Perdidos">Perdidos</option>
            </select>
            
        </div>
        </>
        
        
        
    )
}

export default FiltrarAnimais;