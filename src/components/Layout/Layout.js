import React, { Fragment } from 'react';

const Layout = (props) => {
  return (
     <Fragment>
    <header className={`main-header ${props.isScroll ? "isScroll  " : " "}`}> {props.header}</header>
    {props.mobileNav}
    <main className="content">{props.children}</main>
  </Fragment>
  );
}

export default Layout;
