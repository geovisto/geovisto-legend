// Geovisto core
import {
    IMapToolState,
} from "geovisto";

import ILegendToolDefaults from "./ILegendToolDefaults";
import ILegendToolConfig from "./ILegendToolConfig";
import ILegendToolProps from "./ILegendToolProps";

/**
 * This interface declares legend tool model.
 * 
 * @author Tomas Koscielniak
 */
interface ILegendToolState<
    TProps extends ILegendToolProps = ILegendToolProps,
    TDefaults extends ILegendToolDefaults = ILegendToolDefaults,
    TConfig extends ILegendToolConfig = ILegendToolConfig
> extends IMapToolState<TProps, TDefaults, TConfig> {
    /**
     * It returns the tabs configs.
     */
    getLegendConfig(): ILegendToolConfig[] | undefined;

    /**
     * It returns the tools to create a legend for.
     */
    getLegendToolsConfig(): string[] | undefined;


}
export default ILegendToolState;