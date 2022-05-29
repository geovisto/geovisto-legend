// Geovisto core
import {
    IMapToolDefaults
} from "geovisto";

import ILegendToolConfig from "./ILegendToolConfig";

/**
 * This interface declares functions which return the default state values.
 * 
 * @author Tomas Koscielniak
 */
interface ILegendToolDefaults extends IMapToolDefaults {

    /**
     * It returns default config if no config is given.
     */
    getConfig(): ILegendToolConfig;
}
export default ILegendToolDefaults;