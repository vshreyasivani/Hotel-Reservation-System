import './index.css';
import React from 'react';
import Idli from "../../images/idli.jpg";
import GCD from "../../images/dosa.jpg";
import MD from "../../images/masaladosa.jpg";
import Pongal from "../../images/pongal.jpg";
import Uttapam from "../../images/uttapam.jpg";
import Vada from "../../images/vada.jpg";
import RU from "../../images/ravaupma.jpg";
import Poori from "../../images/poori_masala.jpg";
import KP from "../../images/kuzhi_paniyaram.jpg";
import Set from "../../images/set_dosa.jpg";
import Neer from "../../images/neer_dosa.jpg";
import Ragi from "../../images/ragi_dosa.jpg";
import Semiya from "../../images/semiya_upma.jpg";
import Coffee from "../../images/filter_coffee.jpg";
import Aloo from "../../images/aloo_poha.jpg";
// import Idli from "../../images/idli.jpg";
// import Idli from "../../images/idli.jpg";


const BreakfastMenu = () => {
  return (
    <div className="menuouter">
      <header>
        <h1>South Indian Breakfast Menu</h1>
      </header>

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
          <img src={Pongal} alt="Pongal" />
          <div className="menu-details">
            <div className="menu-title">Pongal</div>
            <div className="menu-description">A comforting South Indian dish made with rice and lentils, cooked to a creamy consistency and seasoned with ghee, black pepper, and cumin.</div>
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
          <img src={Vada} alt="Vada" />
          <div className="menu-details">
            <div className="menu-title">Vada</div>
            <div className="menu-description">Deep-fried lentil donuts, light and fluffy on the inside with a crispy exterior, served with coconut chutney and sambar.</div>
          </div>
        </div>

        <div className="menu-item">
          <img src={RU} alt="Rava Upma" />
          <div className="menu-details">
            <div className="menu-title">Rava Upma</div>
            <div className="menu-description">A savory semolina dish cooked with vegetables, mustard seeds, and curry leaves, offering a quick and nutritious breakfast choice.</div>
          </div>
        </div>

        <div className="menu-item">
          <img src={Poori} alt="Poori Masala" />
          <div className="menu-details">
            <div className="menu-title">Poori Masala</div>
            <div className="menu-description">Soft and puffy deep-fried bread served with a flavorful potato curry, providing a delightful combination of textures and tastes.</div>
          </div>
        </div>

        <div className="menu-item">
          <img src={Aloo} alt="Aloo Poha" />
          <div className="menu-details">
            <div className="menu-title">Aloo Poha</div>
            <div className="menu-description">Flattened rice cooked with potatoes, mustard seeds, and curry leaves, creating a light and nutritious dish with a burst of aromatic spices.</div>
          </div>
        </div>

        <div className="menu-item">
          <img src={KP} alt="Kuzhi Paniyaram" />
          <div className="menu-details">
            <div className="menu-title">Kuzhi Paniyaram</div>
            <div className="menu-description">Round, bite-sized dumplings made from fermented rice and urad dal batter, seasoned with mustard seeds and served with coconut chutney.</div>
          </div>
        </div>

        <div className="menu-item">
          <img src={Set} alt="Set Dosa" />
          <div className="menu-details">
            <div className="menu-title">Set Dosa</div>
            <div className="menu-description">Soft and fluffy, the Set Dosa is a set of small, thick pancakes, typically served in sets of 3 or 4, accompanied by coconut chutney and sambar.</div>
          </div>
        </div>

        <div className="menu-item">
          <img src={Ragi} alt="Ragi Dosa" />
          <div className="menu-details">
            <div className="menu-title">Ragi Dosa</div>
            <div className="menu-description">A nutritious dosa made from ragi (finger millet) flour, offering a unique earthy flavor and served with a side of coconut chutney.</div>
          </div>
        </div>

        <div className="menu-item">
          <img src={Neer} alt="Neer Dosa" />
          <div className="menu-details">
            <div className="menu-title">Neer Dosa</div>
            <div className="menu-description">Translating to "Water Dosa," Neer Dosa is a thin, delicate rice crepe, light on the stomach and typically served with coconut or tomato chutney.</div>
          </div>
        </div>

        <div className="menu-item">
          <img src={Semiya} alt="Semiya Upma" />
          <div className="menu-details">
            <div className="menu-title">Semiya Upma</div>
            <div className="menu-description">Also known as Vermicelli Upma, this dish features thin noodles made from semolina, cooked with vegetables and seasoned with mustard seeds.</div>
          </div>
        </div>

        <div className="menu-item">
          <img src={Coffee} alt="Filter Coffee" />
          <div className="menu-details">
            <div className="menu-title">Filter Coffee</div>
            <div className="menu-description">Enjoy the rich and aromatic South Indian filter coffee, brewed to perfection with a blend of coffee beans and served with frothy milk.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakfastMenu;
