import React from 'react';
import './index.css';
import SIT from "../../images/southindianmeals.jpg";
import VB from "../../images/vegbiryani.jpg";
import Sambar from "../../images/sambarrice.jpg";
import Curd from "../../images/curdrice.jpg";
import Lemon from "../../images/lemonrice.jpg";
import NIT from "../../images/northindianthali.jpg";
import Naan from "../../images/naan.jpg";
import Roti from "../../images/roti.jpg";
import Dal from "../../images/dalmakhani.jpg";
import PBM from "../../images/pbm.jpg";
import Tikka from "../../images/paneertikka.jpg";

const LunchMenu = () => {
  return (
    <div className="lunchmenuouter">
        <header>
        <h1>Lunch Menu</h1>
      </header>
      
      
      <h2>South Indian Cuisine</h2>
    <div className="menu-container">
        <div className="menu-item">
          <img src={SIT} alt="South Indian Thali" />
          <div className="menu-details">
            <div className="menu-title">South Indian Meals</div>
            <div className="menu-description">South Indian meals are a symphony of flavors, featuring aromatic rice, lentil-based dishes, and a vibrant array of vegetable curries. With elements like tangy sambar, spicy rasam, and coconut-infused poriyal, South Indian meals offer a delightful blend of textures and tastes. The traditional presentation on a banana leaf adds cultural richness to this culinary experience.</div>
          </div>
        </div>

        <div className="menu-item">
          <img src={VB}alt="Veg Biryani" />
          <div className="menu-details">
            <div className="menu-title">Vegetable Biryani</div>
            <div className="menu-description">Fragrant basmati rice cooked with mixed vegetables and aromatic spices, creating a flavorful and colorful one-pot dish.</div>
          </div>
        </div>

        <div className="menu-item">
          <img src={Sambar} alt="Sambar Rice" />
          <div className="menu-details">
            <div className="menu-title">Sambar Rice</div>
            <div className="menu-description">A wholesome dish made by combining rice with sambar, a tangy and spicy lentil-based soup with a variety of vegetables.</div>
          </div>
        </div>

        <div className="menu-item">
          <img src={Curd} alt="Curd Rice" />
          <div className="menu-details">
            <div className="menu-title">Curd Rice</div>
            <div className="menu-description">Cooked rice mixed with yogurt, tempered with mustard seeds, curry leaves, and garnished with finely chopped coriander, providing a cooling and soothing flavor.</div>
          </div>
        </div>

         <div className="menu-item">
          <img src={Lemon} alt="Lemon Rice" />
          <div className="menu-details">
            <div className="menu-title">Lemon Rice</div>
            <div className="menu-description">Rice seasoned with mustard seeds, urad dal, chilies, and curry leaves, with the addition of lemon juice for a zesty and refreshing taste.</div>
          </div>
        </div>
        <h2>North Indian Cuisine</h2>

        <div className="menu-item">
          <img src={NIT} alt="North Indian Thali" />
          <div className="menu-details">
            <div className="menu-title">North Indian Thali</div>
            <div className="menu-description">A feast of diverse flavors on a plate, the North Indian thali showcases an assortment of aromatic curries, tandoori delights, assorted bread, flavorful rice, and sweet treats. A symphony of tastes, textures, and colors, the thali provides a delightful culinary journey through North India's rich gastronomic heritage.</div>
          </div>
        </div>

        <div className="menu-item">
          <img src={Naan} alt="Naan" />
          <div className="menu-details">
            <div className="menu-title">Naan</div>
            <div className="menu-description">Soft, leavened flatbread from North India, perfect for scooping up curries or serving with kebabs.</div>
          </div>
        </div>

        <div className="menu-item">
          <img src={Roti} alt="Roti" />
          <div className="menu-details">
            <div className="menu-title">Roti</div>
            <div className="menu-description">Staple unleavened whole wheat flatbread, essential in North Indian cuisine, ideal for pairing with curries.</div>
          </div>
        </div>

        <div className="menu-item">
          <img src={Dal} alt="Dal Makhani" />
          <div className="menu-details">
            <div className="menu-title">Dal Makhani</div>
            <div className="menu-description">Creamy lentil dish with black lentils and kidney beans, slow-cooked with spices and cream, a rich and flavorful delight.</div>
          </div>
        </div>

        <div className="menu-item">
          <img src={PBM} alt="Paneer butter masala" />
          <div className="menu-details">
            <div className="menu-title">Paneer Butter Masala</div>
            <div className="menu-description">Beloved curry with paneer in a creamy, mildly spiced tomato-based gravy, known for its rich texture and indulgent flavor.</div>
          </div>
        </div>

        <div className="menu-item">
          <img src={Tikka} alt="Paneer tikka" />
          <div className="menu-details">
            <div className="menu-title">Paneer Tikka</div>
            <div className="menu-description">Popular appetizer featuring grilled or baked marinated paneer cubes, offering a smoky and tangy taste, served with mint chutney.</div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default LunchMenu;
