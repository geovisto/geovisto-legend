// Geovisto core
import {
    IMapTool,
    IMapToolInitProps
} from "geovisto";

import ILegendToolConfig from './ILegendToolConfig';
import ILegendToolDefaults from './ILegendToolDefaults';
import ILegendToolProps from './ILegendToolProps';
import ILegendToolState from "./ILegendToolState";

/**
 * This class provides the legend tool.
 *
 * @author Tomas Koscielniak
 */
interface ILegendTool<
    TProps extends ILegendToolProps = ILegendToolProps,
    TDefaults extends ILegendToolDefaults = ILegendToolDefaults,
    TState extends ILegendToolState = ILegendToolState,
    TConfig extends ILegendToolConfig = ILegendToolConfig,
    TInitProps extends IMapToolInitProps<TConfig> = IMapToolInitProps<TConfig>
> extends IMapTool<TProps, TDefaults, TState, TConfig, TInitProps> {

    /**
     * It creates a copy of the uninitialized tool.
     */
    copy(): ILegendTool;

}
export default ILegendTool;
