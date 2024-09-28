import {InspectorDetails} from "@/ts/devtools/Inspector";

export type PacketType = any // TODO

export class DevToolsDetails {
    public networkPackets: PacketType[] = []
    public consoleLines: string[] = []
    public inspectorDetails: InspectorDetails = new InspectorDetails();
}