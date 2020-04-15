import React, {Component} from 'react'
import Button from './Button'
import PropTypes from 'prop-types'

class CreateBlog extends Component {
    constructor(){
        super()
        this.state = {
            blog:{
                title:'', subject:'', author:'', article:'' , 
                objectId : new Date().getTime(),
        },
        
            
        }
    }
    handleChange=(event)=>{
let updatedBlog = { ...this.state.blog}
updatedBlog[event.target.name]=event.target.value;
this.setState({blog:updatedBlog}, () => {
    console.log(updatedBlog)
})
    };
    handleSubmit = (event) =>{
        event.preventDefault();
        this.props.handleCreateBlogSubmit(event, this.state.blog)
        let emptyBlog= {title:'', subject:'', author:'', article:''};

        this.setState({blog :emptyBlog});
        event.target.reset();
    }
    render(){
        return (
            <div style={{margin:'40px'}}>
                <h1>Create Blog:</h1>
                <form onSubmit={this.handleSubmit} className="ui form" >
            <div className="equal width fields">   
            <div className="field">
                <label>Title
                </label>
                <div className="ui fluid input">
                <input type="text" placeholder="Title..."
                name="title"
                value={this.state.blog.title}
                onChange={this.handleChange}
                />
                
                </div>
                </div>
            </div>
            <div className="equal width fields">   
            <div className="field">
                <label>Author
                </label>
                <div className="ui fluid input">
                <input type="text" placeholder="Author..."
                name="author"
                value={this.state.blog.author}
                onChange={this.handleChange}
                />
                
                </div>
                </div>
            </div>
            <div className="equal width fields">   
            <div className="field">
                <label>Subject
                </label>
                <div className="ui fluid input">
                <input type="text" placeholder="subject..."
                name="subject"
                value={this.state.blog.subject}
                onChange={this.handleChange}
                />
                
                </div>
                </div>
            </div>
            
            <div className="equal width fields">   
            <div className="field">
                <label>Article
                </label>
                <div className="ui fluid input">
                <input type="text" placeholder="Article..."
                name="article"
                value={this.state.blog.article}
                onChange={this.handleChange}
                />
                
                </div>
                </div>
            </div>
            <div className="field">
            <Button type="submit" className="ui button">Submit</Button>


            </div>



                </form>
            </div>
        )
    }
}
CreateBlog.propTypes = {
    handleCreateBlogSubmit : PropTypes.func,

    
}


export default CreateBlog;