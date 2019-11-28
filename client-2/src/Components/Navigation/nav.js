import React, { Component } from 'react';
import './nav.css';
import $ from 'jquery';


class Nav extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        $(document).ready(function(){
            var showHeaderAt = 150;
            var win = $(window),
                    body = $('body');
            
            if(win.width() > 600){
                win.on('scroll', function(e){
                    if(win.scrollTop() > showHeaderAt) {
                        body.addClass('fixed');
                    }
                    else {
                        body.removeClass('fixed');
                    }
                });
            }
    });
    }

    render(){
        return(
            <div>
            
<header class="header-fixed">

<div class="header-limiter">

    <h1><a href="#">Company<span>logo</span></a></h1>

    <nav>
        <a href="#">Home</a>
        <a href="#" class="selected">Blog</a>
        <a href="#">Pricing</a>
        <a href="#">About</a>
        <a href="#">Faq</a>
        <a href="#">Contact</a>
    </nav>

</div>

</header>


<div class="header-fixed-placeholder"></div>
</div>




        )
    }
}