import React,{Component} from "react";
// import Api from "../../services/api";
// import {Collapsible,CollapsibleItem} from "react-materialize";


export default class Main extends Component{
    // state = {
    //     vagas:[]
    // }

    // componentDidMount(){
    //     this.loadVagas()
    // }

    // loadVagas = async ()=>{
    //     const response = await Api.get('/vagas');
    //     this.setState({vagas:response.data.data})
    //     console.log(response)
    // };

    render(){
        return (    
           <h1>vagas</h1>
            // <h1>Quantidade de vagas:{this.state.vagas.length}</h1>
            //  <div>
            //     <h1>Quantidade de vagas:{this.state.vagas.length}</h1>
            //     {this.state.vagas.map(vagas =>(
            //         <Collapsible popout>
            //             <CollapsibleItem header={vagas.Nome_vaga} icon='business_center'>
            //             <p key={vagas._id}><ul>
            //                                <li><b>Descricao:</b> {vagas.Descricao}</li>
            //                                <li><b>Contato Email:</b> {vagas.Contato_email}</li>
            //                                <li><b>Faixa Salariao:</b> {vagas.FaixaSalario}</li>
            //                                <li><b>Requisitos:</b> {vagas.Requisito}</li>
            //                                </ul>
            //             </p>
            //             </CollapsibleItem>
            //         </Collapsible>
            //     ))}
            //     </div>
        )
    }

}