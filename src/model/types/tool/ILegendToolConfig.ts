// Geovisto core
import {
    IMapToolConfig
} from "geovisto";

/**
 * This interface provides specification of legend tool config model.
 * 
 * @author Tomas Koscielniak
 */
type ILegendToolConfig = IMapToolConfig & {
    state?: ILegendToolConfig[];
    tools?: Array<string>;
}
export default ILegendToolConfig;