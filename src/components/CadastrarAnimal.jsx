import { useState } from "react";

function CadastrarAnimal({addAnimal}) {
    const [descricao, setDescricao] = useState('');
   
    const enviarDados = (e) => {
        e.preventDefault();
        //alert("Descricao: " + descricao)
        //Validação quando o usuário não digita nada na descrição
        if(!descricao) {
            alert("Não foi possível adicionar um novo animal")
            return;
        }
        addAnimal(descricao);

        //Limpa o valor da descrição
        setDescricao('');
    }

    return (
        <>
            <h2>Cadastrar Animal</h2>
            <div className="cadastrar">
                <form onSubmit={enviarDados}>
                    <input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} placeholder="Informe a descrição do animal"></input>
                    <button className="botaoCadastrar" type="submit" >Cadastrar</button>
                </form>
                
            </div>

        </>
    )
}

export default CadastrarAnimal;