import {InspectorDetails} from "@/ts/devtools/Inspector";
import {reactive} from "vue";

export type PacketType = any // TODO

export class DevToolsDetails {
    public networkPackets: PacketType[]
    public consoleLines: string[];
    public inspectorDetails: InspectorDetails;
    
    constructor() {
        this.networkPackets = reactive([])
        this.consoleLines = reactive([])
        this.inspectorDetails = reactive(new InspectorDetails())
    }
    
    public logLine(s: string) {
        this.consoleLines.push(s)
    }
    
    public addPacket(packet: PacketType) {
        this.networkPackets.push(packet)
    }
    
    public clearConsole() {
        this.consoleLines.length = 0;
    }
    
    public clearNetworkPackets() {
        this.networkPackets.length = 0;
    }
    
    public clearAll() {
        this.clearNetworkPackets()
        this.clearConsole();
        this.inspectorDetails.clear();
    }
}

