// Leaflet
import * as L from 'leaflet';

// styles
import "../../../styles/style.scss";

// Geovisto core
import {
    IMapEvent,
    IMapLegendControl,
    IMapToolInitProps,
    instanceOfMapLegend,
    LayerToolRenderedEvent,
    MapTool,
    ToolEnabledEvent,
} from "geovisto";

import ILegendTool from '../../types/tool/ILegendTool';
import ILegendToolConfig from '../../types/tool/ILegendToolConfig';
import ILegendToolDefaults from '../../types/tool/ILegendToolDefaults';
import ILegendToolProps from '../../types/tool/ILegendToolProps';
import ILegendToolState from '../../types/tool/ILegendToolState';
import LegendToolDefaults from "./LegendToolDefaults";
import LegendToolState from "./LegendToolState";

/**
 * This class provides the legend tool.
 *
 * @author Tomas Koscielniak
 */
class LegendTool extends MapTool implements ILegendTool {

    /**
     * It creates a new tool with respect to the props.
     *
     * @param props
     */
    public constructor(props?: ILegendToolProps) {
        super(props);
    }

    /**
     * It creates a copy of the uninitialized tool.
     */
    public copy(): ILegendTool {
        return new LegendTool(this.getProps());
    }

    /**
     * It returns the props given by the programmer.
     */
    public getProps(): ILegendToolProps {
        return <ILegendToolProps> super.getProps();
    }
    
    /**
     * It returns default values of the legend tool.
     */
    public getDefaults(): ILegendToolDefaults {
        return <ILegendToolDefaults> super.getDefaults();
    }

    /**
     * It creates new defaults of the tool.
     */
    protected createDefaults(): ILegendToolDefaults {
        return new LegendToolDefaults();
    }

    /**
     * It returns the legend tool state.
     */
    public getState(): ILegendToolState {
        return <ILegendToolState> super.getState();
    }

    /**
     * It returns default tool state.
     */
    protected createState(): ILegendToolState {
        return new LegendToolState(this);
    }

    /**
     * Overrides the super method.
     * 
     * @param initProps
     */
    public initialize(initProps: IMapToolInitProps<ILegendToolConfig>): this {
        return super.initialize(initProps);
    }

    /**
     * It creates legend.
     */
    public create(): this {
        super.create();
        this.createLegend();
        return this;
    }

    /**
     * It creates a legend tool and its parts (new legend for each layer that implements it).
     *
     */
    protected createLegend(): void {
        // Get map and tools
        const map = this.getMap()?.getState().getLeafletMap();
        const config = this.getState().getLegendToolsConfig();
        let tools = this.getMap()?.getState().getTools().getAll();
        if (config != undefined && this.getMap() != undefined){
            tools = [];
            for (let i = 0; i < config?.length; i++) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                tools.push(this.getMap().getState().getTools().getById(config[i]));
            }
        }
        if (tools != undefined && map) {
            for (let i = 0; i < tools?.length; i++) {
                // Check if tools implement legends
                if (instanceOfMapLegend(tools[i]) && tools[i].isEnabled()) {
                    const mapLegendControlTool: IMapLegendControl = (tools[i] as unknown as IMapLegendControl);
                    // Check if tool doesnt want the legend rendered for some reason
                    // You can achieve this from tool by returning 'undefined'
                    if (mapLegendControlTool.getMapLegend().getContent(tools[i]) != undefined) {
                        // And if they do want to get rendered, get div with legend
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        const legend = (L as any).control({position: "bottomright"});
                        this.clearLegend(tools[i].getId());
                        // Get the div
                        legend.onAdd = () => {
                            if (tools != undefined){
                                return mapLegendControlTool.getMapLegend().getContent(tools[i]);
                            }
                        };
                        // Add it to map
                        legend.addTo(map);
                        // Disable dragging when user's cursor leaves the element
                        legend.getContainer().addEventListener('mouseover', function () {
                            map.dragging.disable();
                        });
                        // Re-enable dragging when user's cursor leaves the element
                        legend.getContainer().addEventListener('mouseout', function () {
                            map.dragging.enable();
                        });
                    }
                }
            }
        }
    }

    /**
     * This function clears legend.
     */
    public clearLegend(owner: string | undefined): void {
        const div = L.DomUtil.get(owner + "-legend");
        if(div) {
            L.DomUtil.remove(div);
        }
    }

    /**
     * This function is called when a custom event is invoked.
     *
     * @param event
     */
    public handleEvent(event: IMapEvent): void {
        switch (event.getType()) {
            case LayerToolRenderedEvent.TYPE():
                this.createLegend();
                break;
            case ToolEnabledEvent.TYPE():
                if((event as ToolEnabledEvent).getChangedObject()) {
                    this.createLegend();
                } else {
                    this.clearLegend((event as ToolEnabledEvent).getSource().getId());
                }
                break;
            default:
                break;
        }
    }

}
export default LegendTool;
