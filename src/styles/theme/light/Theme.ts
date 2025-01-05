import { Color } from "./Constants";
import Btn from "./variables/common/buttons";
import Slider from "./variables/components/slider";

const LIGHT_Base_Theme = {
  key: "light",
  font: {
    Primary: "'Nunito' , sans-serif",
    Secondary: "'Domine', serif",
  },
  common: {
    color: Color.black,
    backgroundColor: Color.white,
    Btn,
  },
  component: {
    Slider,
  },
};

export default LIGHT_Base_Theme;
