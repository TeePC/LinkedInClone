import React from 'react'
import "./Sidebar.css";
import Avatar from '@mui/material/Avatar';

function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );

  return (
    <div className='sidebar'>
       <div className="sidebar__top">
        <img src="https://e1.pxfuel.com/desktop-wallpaper/778/623/desktop-wallpaper-purple-aesthetic-anime-posted-by-christopher-johnson-purple-anime-scene.jpg" alt="Background" />
        <Avatar className='sidebar__avatar' />
        <h2>Andre Thomas</h2>
        <h4>andre.thomas@gmail.com</h4>
        </div> 

        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p> Who viewed you</p>
                <p className="sidebar__statNumber">
                    2.543
                </p>
                
                </div>       

            <div className="sidebar__stat">
            <p> Who viewed you</p>
                <p className="sidebar__statNumber">
                    2.543
                </p>
                
                </div>         

        </div>


        <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('programming')}
            {recentItem('softwareengineering')}
            {recentItem('design')}
            {recentItem('developer')}
        </div>

    </div>
  )
}

export default Sidebar