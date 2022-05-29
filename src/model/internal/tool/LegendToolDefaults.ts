// Geovisto core
import { MapToolDefaults } from "geovisto";

import ILegendToolConfig from "../../types/tool/ILegendToolConfig";
import ILegendToolDefaults from "../../types/tool/ILegendToolDefaults";

/**
 * This class provide functions which return the default state values.
 * 
 * @author Tomas Koscielniak
 */
class LegendToolDefaults extends MapToolDefaults implements ILegendToolDefaults {

    /**
     * It returns the default config.
     */
    public getConfig(): ILegendToolConfig {
        const config = <ILegendToolConfig>super.getConfig();
        config.tools = undefined;
        config.state = undefined;
        return config;
    }

    /**
     * Static tool type constant.
     */
    public static TYPE = "geovisto-tool-legend";

    /**
     * It returns a unique string of the tool type.
     */
    public getType(): string {
        return LegendToolDefaults.TYPE;
    }

    /**
     * Only one legend tool should be present in the Geovisto map.
     */
    public isSingleton(): boolean {
        return true;
    }

}
export default LegendToolDefaults;