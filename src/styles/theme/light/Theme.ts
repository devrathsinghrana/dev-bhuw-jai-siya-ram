import Base_Theme from "../base/Theme";
import { Color } from "./Constants";
import Slider from "./variables/components/slider/slider";

const LIGHT_Base_Theme = {
  ...Base_Theme,
  key: "light",
  font: {
    Primary: "'Nunito' , sans-serif",
    Secondary: "'Domine', serif",
  },
  common: {
    color: Color.black,
    backgroundColor: Color.white,
  },
  components: {
    slider: {
      Slider,
    },
    ui: {},
  },
  layouts: {},
  pages: {},
  component: {
    Slider,
  },
};

export default LIGHT_Base_Theme;
