import { Color } from "./Constants";
import Slider from "./variables/components/slider/slider";

const DARK_Base_Theme = {
  key: "dark",
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

export default DARK_Base_Theme;
