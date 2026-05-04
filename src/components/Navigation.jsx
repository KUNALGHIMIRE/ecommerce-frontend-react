const Navigation=()=>{
return(
    <nav className="nav">
        <div className="nav-container"></div>
        <img src="/download.png" alt="logo" height={50} />
          <ul className="list">
             <li><a href="#">Menu</a></li>
             <li><a href="#">About</a></li>
             <li><a href="#">Location</a></li>
             <li><a href="#">Contact</a></li>
             
        
        </ul>
        <button className="button">Login</button>
            
      </nav>
)
}
export default Navigation;
