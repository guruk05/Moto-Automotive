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


  
}

export default Posts;