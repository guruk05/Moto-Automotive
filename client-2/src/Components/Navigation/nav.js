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
            // Show the fixed header only on larger screen devices
            if(win.width() > 600){
                // When we scroll more than 150px down, we set the
                // "fixed" class on the body element.
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