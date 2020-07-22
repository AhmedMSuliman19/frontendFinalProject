import React, { Component } from "react";
 
class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
            <div class="container">
                <img class="pubgicon" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQMVF7o5QG5TPEymSWSdJiCKdkbzh_YOQD8eg&usqp=CAU" />
                <a class="navbar-brand js-scroll-trigger" href="#page-top">Pubgiers</a><button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto my-2 my-lg-0">    
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="/">Home</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="/login">Login</a></li>
                    </ul>
                </div>
            </div>
        </nav>
      </React.Fragment>
    );
  }
}
 
export default NavBar;