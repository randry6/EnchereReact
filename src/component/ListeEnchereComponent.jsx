import React,{Component} from 'react'
import EnchereService from '../services/EnchereService'

class ListeEnchereComponent extends Component{
    
    constructor(props){
        super(props)

        
        this.state = {
            enchere:[]
        }
    }

    componentDidMount(){
        EnchereService.getEnchere().then((res) =>{
            this.setState({enchere: res.data})
        });
    }

    render(){
        return(
            <div>
                <h2 className = "text-center">Liste des Encheres</h2>
                <div className="row">                    
                    <table className="table table-striped table-bordered" border="1">
                        <thead>
                            <tr>
                                <th>idEnchere</th>
                                <th>idproprietaire</th>
                                <th>idcategorie</th>
                                <th>produit</th>
                                <th>datemise</th>
                                <th>description</th>
                                <th>mise</th>
                                <th>minmal</th>
                                <th>duree</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.enchere.map(
                                list =>
                                <tr key = {list.idenchere}>
                                    <td>{list.idenchere}</td>
                                    <td>{list.idproprietaire}</td>
                                    <td>{list.idcategorie}</td>
                                    <td>{list.produit}</td>
                                    <td>{list.datemise}</td>
                                    <td>{list.description}</td>
                                    <td>{list.mise}</td>
                                    <td>{list.minmal}</td>
                                    <td>{list.duree}</td>
                                </tr>
                                )

                            }
                        </tbody>
                    </table>
                </div>

            </div>
        )
    }
}
export default ListeEnchereComponent