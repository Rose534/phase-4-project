import Category from "./Category";

function Homepage() {
    return (
        <div>
      <div id="container">
        <div id="box1">
          <p id="welcome">Welcome back!</p>
        </div>
        <div id="image-container">
          <img src="https://53525363.000webhostapp.com/Images/Download_premium_png_of_Sofa_png_mockup_in_green_fabric_on_transparent_background_about_sofa__sofa_png__armchair__couch__and_furniture_3101307-removebg-preview.png" alt="" className="homeimage"/>
          
        </div>
        
        <div>

        </div>
        <div id="box2"></div>
      </div>
      {/* <h2 id="list">LIST OF ITEMS</h2> */}
      <Category/>
      
      <div>
        
      </div>
      </div>
    );
  }
  
  export default Homepage;
  