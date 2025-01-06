import DARK_Base_Global from "../theme/dark/GlobalStyles";
import DARK_Base_Theme from "../theme/dark/Theme";
import LIGHT_Base_Global from "../theme/light/GlobalStyles";
import LIGHT_Base_Theme from "../theme/light/Theme";

function Theme(theme: string) {
  switch (theme?.toLowerCase()) {
    case "light":
      return {
        global: LIGHT_Base_Global,
        theme: LIGHT_Base_Theme,
      };
    case "dark":
      return {
        global: DARK_Base_Global,
        theme: DARK_Base_Theme,
      };
    default:
      return {
        global: LIGHT_Base_Global,
        theme: LIGHT_Base_Theme,
      };
  }
}

export default Theme;
