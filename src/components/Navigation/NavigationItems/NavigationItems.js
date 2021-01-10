import React from 'react';
import { NavLink } from 'react-router-dom';


const navItems = [
  { id: 'home', text: 'Home', link: '/',  },
  { id: 'about', text: 'About', link: '/about',  },
  { id: 'blog', text: 'Blog', link: '/blog', },
  { id: 'portfolio', text: 'Portfolio', link: '/portfolio',}
];


const navigationItems = props => [
  ...navItems.filter(item => item.auth === props.isAuth).map(item => (
    <li
      key={item.id}
      className={['navigation-item', props.mobile ? 'mobile' : ''].join(' ')}
    >
      <NavLink to={item.link} exact onClick={props.onChoose}>
        {item.text}
      </NavLink>
    </li>
  )),
 
];

export default navigationItems;

