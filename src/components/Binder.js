import React , {Component} from 'react'
import PropTypes from 'prop-types'


class Binder extends Component {
    constructor(){
        super();
        this.state = {
            text: 'Hello State',
            somethingText :''
        }
        // this.onClickMe = this.onClickMe.bind(this)
        // this.onClickMe = () => console.log(this);
    }
// onClickMe(){
//     console.log(this)
// }

onClickMe = () => {
    console.log(this)
};
// correct way to do it
handleSomething= () =>{
   this.setState({somethingText: 'Clicked on Handle Something'})
    
}



render (){

    return (
<div>
    <h1>{this.state.somethingText}</h1>
<button 
className="ui primary button" 
style={{ margin:'10px 15px'}} 
onClick={this.onClickMe}>Click Me</button>
<button 
className="ui black button" 
style={{ margin:'10px 15px'}} 
onClick = {(this.handleSomething)}
// onClick={() => this.handleSomething(this.state.somethingText)}
>Do Something</button>

</div>
    )
}}

Blogs.propTypes = {
    text: PropTypes.string,
    onDelete: PropTypes.func,
    blogs: PropTypes.arrayOf(
        PropTypes.shape({
            title : PropTypes.string.isRequired,
            author : PropTypes.string.isRequired,
            subject : PropTypes.string.isRequired,
            article : PropTypes.string.isRequired,
            _id: PropTypes.string.isRequired
        })
    )
}

export default Binder