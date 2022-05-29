// Geovisto core
import {
    MapToolState
} from "geovisto";

import ILegendTool from "../../types/tool/ILegendTool";
import ILegendToolConfig from "../../types/tool/ILegendToolConfig";
import ILegendToolDefaults from "../../types/tool/ILegendToolDefaults";
import ILegendToolState from "../../types/tool/ILegendToolState";

/**
 * This class provide legend tool model.
 * 
 * @author Tomas Koscielniak
 */
class LegendToolState extends MapToolState implements ILegendToolState {

    private legendConfig?: ILegendToolConfig[];
    private legendTools?: Array<string>;

    /**
     * It creates a tool state.
     */
    public constructor(tool: ILegendTool) {
        super(tool);

        this.legendConfig = undefined;
    }

    /**
     * The metod takes config and deserializes the values.
     *
     * @param config
     */
    public deserialize(config: ILegendToolConfig): void {
        super.deserialize(config);

        this.legendConfig = config.state;
        this.legendTools = config.tools;
    }

    /**
     * The method serializes the tool state. Optionally, defaults can be set if property is undefined.
     *
     * @param defaults
     */
    public serialize(defaults: ILegendToolDefaults | undefined): ILegendToolConfig {
        const config: ILegendToolConfig = <ILegendToolConfig> super.serialize(defaults);

        config.tools = [];
        const tools: string[] | undefined = this.getLegendToolsConfig() ;
        if (tools != undefined) {
            for (let i = 0; i < tools.length; i++) {
                config.tools.push(tools[i]);
            }
        }
        return config;
    }

    /**
     * It returns the legend config.
     */
    public getLegendConfig(): ILegendToolConfig[] | undefined {
        return this.legendConfig;
    }

    /**
     * It returns the tools to create a legend for.
     */
    public getLegendToolsConfig(): string[] | undefined {
        return this.legendTools;
    }


}
export default LegendToolState;