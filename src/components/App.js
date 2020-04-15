import React , {Component} from 'react';
import axios from 'axios';
// import blogs from '../data/data';
import Search from './Search';
import CreateBlog from './CreateBlog';
import Blogs from './Blogs';
import UpdateBlog from './UpdateBlog';



    // function searchIt(term){
    //     return function (item){
    //         return item.subject.toLowerCase().includes(term.toLowerCase())
    //     };
    // };
// let searchIt = term => item => item.subject.toLowerCase().includes(term.toLowerCase());



class App extends Component {
    // state={blogs}
    constructor(){
        super()
        this.state = {
            blogs: [],
            searchTerm: '',
            toggle: true,
            blog : {},

        };
        // this.onDelete = this.onDelete.bind(this);
    
    }
    loadBlogs = () => {
        const url = '/blogs';
        axios.get(url).then((blogs)=>{
            // return console.log(blogs.data)
            return this.setState({ blogs: blogs.data})
        })
    }

    // loadBlog =(id) => {
    //     axios.get(`/blog/${id}`).then((blog)=>{
    //         this.setState({
    //             toggle: false,
    //             blog : blog.data,
    //         })
    //         // return console.log(blog.data)

    //     })
    // }
    loadBlog = (id) => {
        axios.get(`/blog/${id}`).then((blog) => {
            // return console.log(blog.data)
            this.setState({
                toggle: false,
                blog: blog.data,
            })
        })
    }

    onDelete = (id) => {
        axios.delete(`/blog/${id}`).then(()=>{
            this.loadBlogs();
        })
        // const updatedBlogs = this.state.blogs.filter((item => item.objectId !== id));
        // this.setState({blogs:updatedBlogs});
    }
    onUpdate = (id) => {
        // return console.log(`Update : ${id}`);
        this.loadBlog(id);


    }
    handleChange = (event) => {
        this.setState({searchTerm:event.target.value}, ()=> {
            console.log(this.state.searchTerm)
        })
        
    };
    handleCreateBlogSubmit = (event,blog) => {
        event.preventDefault();
        let axiosConfig = {
            headers:{
                'Content-Type' : 'application/json;charset=UTF-8',
                'Access-Control-Allow-Origin' : '*',
            },
        };
        axios.post('/blog',blog,axiosConfig).then(()=> {
            this.loadBlogs();
        })

        // let updatedBlogs=[...this.state.blogs];
        // updatedBlogs.unshift(blog)
        // same thing with the lines below.
        // let updatedBlogs=[blog, ...this.state.blogs];
        // this.setState({
        //     blogs: updatedBlogs,
        // }, () => {
        //     console.log(this.state.blogs)
        // })


    };


    handleUpdateBlogSubmit=(event,blog,id)=> {
        event.preventDefault();
        this.setState({
            toggle:true,
        });

        let axiosConfig = {
            headers:{
                'Content-Type' : 'application/json;charset=UTF-8',
                'Access-Control-Allow-Origin' : '*',
            },

        };

        axios.put(`/blog/${id}` , blog, axiosConfig).then(()=>{
            return this.loadBlogs();
        })
    }

    componentDidMount(){
        this.loadBlogs();
    }



    render () {
        console.log('blogs....', this.state.blog);
        return (
<div style={{
    marginTop:'100px',
    display:'flex', 
    justifyContent:'center', 
    alignItems: 'center', 
    flexDirection:'column'
}}>
    

    <Search handleChange={this.handleChange} searchTerm={this.state.searchTerm} />
<hr style={{ width :'75%', margin: '50px 0', color:'black'}}/>




{this.state.toggle ? 
(<CreateBlog handleCreateBlogSubmit={this.handleCreateBlogSubmit}/>) 
: 
(<UpdateBlog  blog={this.state.blog}  handleUpdateBlogSubmit={this.handleUpdateBlogSubmit}/>)}





    
    <Blogs blogs={this.state.blogs} searchTerm={this.state.searchTerm} onDelete={this.onDelete} onUpdate={this.onUpdate}
    toggle={this.state.toggle}/>
{/* <form className="ui form">
    <div className="field">
<input onChange={this.handleChange}
type="text" placeholder="Search..."
value={this.state.searchTerm}/>

    </div>


</form> */}


    {/* {this.state.blogs.filter(searchIt(this.state.searchTerm)).map((blog,idx)=>{
    return(
<div  key={idx} className="ui card" style={{width:'75%', padding:'20px'}}>
    <div className="content">
<div className="header">{blog.title}</div>

<br />
    <div className="meta">Author: {blog.author}</div>
    <div className="meta"> Subject: {blog.subject}</div>
<hr />
<div className="description"> {blog.article}</div>

<button className="ui primary button" style={{ margin:'10px 15px'}} onClick={()=>{
return this.onDelete(blog.objectId)
}}>Delete</button>
</div> 
</div>
    )
    })} */}
</div>

        )
    }
}

export default App