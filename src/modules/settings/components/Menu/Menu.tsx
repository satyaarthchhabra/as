import { Container } from "./menu.style";
import { CollapsibleItem, TextField } from "components";
import { getIcon } from "icons";
import { useData } from "data";
import shallow from "zustand/shallow";
import { ColorOption } from "./bones";
import { useThemeOptions } from "../../hooks";
import { About, WidgetOptions } from "../";

const ThemeIcon = getIcon("theme");
const WallpaperIcon = getIcon("image");
const AboutIcon = getIcon("info");
const WidgetsIcon = getIcon("widgets");

const Menu = () => {
  const { themeOptions, selectedTheme } = useThemeOptions();

  const [updateDataStore, backgroundImages] = useData(
    (state) => [state.updateDataStore, state.backgroundImages],
    shallow
  );

  return (
    <Container>
      <p className="title">Settings</p>

      <div className="section">
        <div className="row">
          {/* Color mode picker */}
          <div className="row__item">
            <CollapsibleItem
              title="Theme"
              description={`Selected: ${selectedTheme} theme`}
              Icon={<ThemeIcon />}
            >
              <div className="theme-options">
                {themeOptions.map((option, i) => (
                  <ColorOption key={i} {...option} />
                ))}
              </div>
            </CollapsibleItem>
          </div>
        </div>
      </div>

      {/* Background image */}
      <div className="section">
        <div className="row">
          <div className="row__item">
            <CollapsibleItem
              title="Wallpaper"
              description="You can add multiple wallpapers by adding a comma separated list of urls"
              Icon={<WallpaperIcon />}
            >
              <TextField
                placeholder="Add image URL/s here"
                type="url"
                aria-label="image URL field"
                value={backgroundImages}
                onChange={(e) =>
                  updateDataStore({ backgroundImages: e.target.value })
                }
              />
            </CollapsibleItem>
          </div>
        </div>
      </div>

      {/* Widget visibility option */}
      <div className="section">
        <div className="row">
          <div className="row__item">
            <CollapsibleItem
              title="Widget Options"
              description="Show or hide widgets according to your needs"
              Icon={<WidgetsIcon />}
            >
              <WidgetOptions />
            </CollapsibleItem>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="section">
        <div className="row">
          <div className="row__item">
            <CollapsibleItem
              title="About"
              description="Application version, source code and developer's info"
              Icon={<AboutIcon />}
            >
              <About />
            </CollapsibleItem>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Menu;
