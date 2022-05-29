import ILegendTool from "./model/types/tool/ILegendTool";
import ILegendToolProps from "./model/types/tool/ILegendToolProps";
import LegendTool from "./model/internal/tool/LegendTool";
import LegendToolDefaults from "./model/internal/tool/LegendToolDefaults";

export const GeovistoLegendTool: {
    getType: () => string,
    createTool: (props?: ILegendToolProps) => ILegendTool
} = {
    getType: () => LegendToolDefaults.TYPE,
    createTool: (props) => new LegendTool(props),
};