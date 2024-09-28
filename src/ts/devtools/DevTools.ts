import {InspectorDetails} from "@/ts/devtools/Inspector";
import {reactive} from "vue";

export type PacketType = any // TODO

export class DevToolsDetails {
    public networkPackets: PacketType[]
    public consoleLines: string[];
    public inspectorDetails: InspectorDetails;
    
    constructor() {
        this.networkPackets = reactive([])
        this.consoleLines = reactive<string[]>([])
        if (!this.consoleLines) {
            console.error('undfined somefhow?')
        }
        this.inspectorDetails = reactive(new InspectorDetails())
    }
    
    public logLine(s: string) {
        this.consoleLines.push(s)
    }
    
    public addPacket(packet: PacketType) {
        this.networkPackets.push(packet)
    }
}