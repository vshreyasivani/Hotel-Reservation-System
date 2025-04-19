import './index.css';
import React from 'react';
import Idli from "../../images/idli.jpg";
import GCD from "../../images/dosa.jpg";
import MD from "../../images/masaladosa.jpg";
import Ragi from "../../images/ragi_dosa.jpg";
import Uttapam from "../../images/uttapam.jpg";
import Naan from "../../images/naan.jpg";
import Roti from "../../images/roti.jpg";
import Dal from "../../images/dalmakhani.jpg";
import PBM from "../../images/pbm.jpg";
import Palak from "../../images/palak.jpg";
import Gobi from "../../images/gobimasala.jpg";
import VegManchu from "../../images/vegmanchu.jpg";
import VHN from "../../images/veghakka.jpg";
import Spring from "../../images/springroll.jpg";
import FriedRice from  "../../images/friedrice.jpg";



const DinnerMenu = () => {
  return (
    <div className="dinnermenuouter">
      <header>
        <h1>Dinner Menu</h1>
      </header>
      <h2>South Indian Cuisine</h2>
    <div className="menu-container">
    <div className="menu-item">
          <img src={Idli} alt="Idli" />
          <div className="menu-details">
            <div className="menu-title">Idli</div>
            <div className="menu-description">Steamed rice cakes served with coconut chutney and sambar.</div>
          </div>
        </div>

        <div className="menu-item">
          <img src={GCD}alt="Ghee Cone Dosa" />
          <div className="menu-details">
            <div className="menu-title">Ghee Cone Dosa</div>
            <div className="menu-description">Crispy, golden dosa with a unique cone shape, generously drizzled with pure ghee for a delightful South Indian twist.</div>
          </div>
        </div>

        <div className="menu-item">
          <img src={MD} alt="Masala Dosa" />
          <div className="menu-details">
            <div className="menu-title">Masala Dosa</div>
            <div className="menu-description">A crispy dosa filled with a spiced potato mixture, served with coconut chutney and tangy sambar for a flavorful breakfast experience.</div>
          </div>
        </div>
        <div className="menu-item">
          <img src={Uttapam} alt="Uttapam" />
          <div className="menu-details">
            <div className="menu-title">Uttapam</div>
            <div className="menu-description">Thick rice pancakes topped with a colorful mix of vegetables, creating a savory and satisfying breakfast option.</div>
          </div>
        </div>
        <div className="menu-item">
          <img src={Ragi} alt="Ragi Dosa" />
          <div className="menu-details">
            <div className="menu-title">Ragi Dosa</div>
            <div className="menu-description">A nutritious dosa made from ragi (finger millet) flour, offering a unique earthy flavor and served with a side of coconut chutney.</div>
          </div>
        </div>
        <h2>North Indian Cuisine</h2>
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
          <img src={Palak} alt="Palak Paneer" />
          <div className="menu-details">
            <div className="menu-title">Palak Paneer</div>
            <div className="menu-description">Palak Paneer is a classic North Indian dish where paneer (Indian cottage cheese) cubes are cooked in a flavorful spinach (palak) gravy.</div>
          </div>
        </div>

        <div className="menu-item">
          <img src={Gobi} alt="Gobi Masala" />
          <div className="menu-details">
            <div className="menu-title">Gobi Masala</div>
            <div className="menu-description">Gobi Masala is a delectable North Indian dish featuring cauliflower florets cooked in a spiced tomato-based gravy</div>
          </div>
        </div>
        <h2>Chinese Cuisine</h2>

        <div className="menu-item">
          <img src={VegManchu} alt="Veg Manchurian" />
          <div className="menu-details">
            <div className="menu-title">Veg Manchurian</div>
            <div className="menu-description">Vegetable Manchurian consists of deep-fried vegetable balls made from grated vegetables, cornflour, and spices. These crunchy balls are then tossed in a savory and tangy Manchurian sauce, creating a delightful Indo-Chinese dish.</div>
          </div>
        </div>

        <div className="menu-item">
          <img src={VHN} alt="Veg Hakka Noodles" />
          <div className="menu-details">
            <div className="menu-title">Veg Hakka Noodles</div>
            <div className="menu-description">Vegetable Hakka Noodles are stir-fried noodles mixed with a colorful assortment of julienned vegetables. The dish is seasoned with soy sauce and other spices, offering a flavorful and satisfying noodle experience.</div>
          </div>
        </div>
        <div className="menu-item">
          <img src={Spring} alt="Spring Roll" />
          <div className="menu-details">
            <div className="menu-title">Spring Roll</div>
            <div className="menu-description">Spring Rolls are crispy, cylindrical rolls filled with a mixture of julienned vegetables. These rolls are deep-fried until golden brown, creating a crunchy exterior. They are often served with a sweet and tangy dipping sauce.</div>
          </div>
        </div>
        <div className="menu-item">
          <img src={FriedRice} alt="Fried Rice" />
          <div className="menu-details">
            <div className="menu-title">Veg Fried Rice</div>
            <div className="menu-description">Vegetable Fried Rice is a classic Chinese dish made with cooked rice stir-fried with a medley of vegetables like carrots, peas, and bell peppers. It is seasoned with soy sauce and other spices, resulting in a flavorful and satisfying rice dish.</div>
          </div>
        </div>


    
</div>
    </div>
  );
};

export default DinnerMenu;
