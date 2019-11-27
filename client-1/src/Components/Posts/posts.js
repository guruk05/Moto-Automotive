import React, { Component } from 'react';
import axios from 'axios';
import Nav from '../Navigation/nav';

class Posts extends Component{
    constructor(props){
        super(props)

        this.state = {
            data:[
                {
                  commentToUser: ''
                }
              ],
        }
    }


    componentDidMount(){
        this.getdata();
    }


  async getdata() {
      try {
        const response = await axios.get('http://localhost:8000/posts')
        let datas = await response.data;
        this.setState({data:datas});
    // console.log(response);
    // console.log(response.data);
      }
   catch (err) {
    console.log(err);
   }
}


    
}

export default Posts;