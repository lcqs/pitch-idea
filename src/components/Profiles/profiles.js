import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {addUserByID} from '../../actions/actions'
import './styles.css'

const profiles= (props)=>{   
    console.log(props);
    return(
            <div>
                /profiles                
                <div>
                    <h2>Connect with the Right people</h2>
                    <ul>
                        {props.availableUsers.map(u => {
                            return(
                                <li key={u.id}>
                                    <div>{u.first_name}</div>
                                    <div>
                                        <button onClick={()=>props.addUserByID(u.id)}>
                                        Add to your Squad
                                        </button>    
                                    </div>                                    
                                </li> 
                            )
                        })}
                    </ul>
                </div>
                <div>
                <h2>Your Squad</h2>
                    <ul>
                        {props.emailDestinationList.map(u => {
                            return(
                            <li key={u.id}>
                                {u.first_name}
                            </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        );
    }

const mapStateToProps = state=>{
    return {
        availableUsers : state.availableUsers,
        emailDestinationList : state.emailDestinationList    
    }
    
}
const mapDispatchToProps = dispatch=>{
    return bindActionCreators({addUserByID}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(profiles)    