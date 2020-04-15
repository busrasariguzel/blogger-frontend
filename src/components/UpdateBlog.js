import React, {Component} from 'react'
import Button from './Button'
import PropTypes from 'prop-types'

class UpdatedBlog extends Component {
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
        this.props.handleUpdateBlogSubmit(
            event, 
            this.state.blog, 
            this.props.blog._id)
        let emptyBlog= {title:'', subject:'', author:'', article:''};

        this.setState({blog :emptyBlog});
        event.target.reset();
    }
    render(){
        return (
            // console.log('update', this.props.)
            <div style={{margin:'40px'}}>
                <h1>Update Blog:</h1>
                <form onSubmit={this.handleSubmit} className="ui form" >
            <div className="equal width fields">   
            <div className="field">
                <label>Title
                </label>
                <div className="ui fluid input">
                <input type="text" 
                name="title"
                defaultValue={this.props.blog.title}
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
                <input type="text" 
                name="author"
                defaultValue={this.props.blog.author}
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
                <input type="text" 
                name="subject"
                defaultValue={this.props.blog.subject}
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
                <input type="text" 
                name="article"
                defaultValue={this.props.blog.article}
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

UpdatedBlog.propTypes = {
    handleUpdateBlogSubmit: PropTypes.func,
    blog: PropTypes.objectOf(
        PropTypes.shape({
            title : PropTypes.string.isRequired,
            author : PropTypes.string.isRequired,
            subject : PropTypes.string.isRequired,
            article : PropTypes.string.isRequired,
            _id: PropTypes.string.isRequired
        })
    )
}

export default UpdatedBlog;