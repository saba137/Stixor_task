import { useQuery, gql } from '@apollo/client';
// import React, { Component } from 'react'
import React, {useEffect, useState} from 'react';
import UserCard from '../Components/UserCard';
import logohere from '../Images/logohere.png'

const TopMenu = (props) =>{
   
    return (
        <div className="top-menu is-shadow-2">
            <div className="menu-logo-container">
                <img className="menu-logo" src={logohere} alt="Logo" />
            </div>
            <div>
                <input
                    className="search-field"
                    placeholder="Search here...."
                    type="search"
                    name="name"
                    autoComplete="off"
                    onChange={(e)=>props.handleChange(e.target.value)}
                />
            </div>
            
            
        </div>
    );

}
export default TopMenu;