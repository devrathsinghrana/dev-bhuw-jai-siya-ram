import { Color } from "./Constants";
import Btn from "./variables/common/buttons";
import Slider from "./variables/components/slider";

const WLB_Base_Theme = {
  key: "wlb",
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

export default WLB_Base_Theme;
