import {type Component, reactive, ref} from 'vue'
import {CssBlock, InspectorDetails} from "@/ts/devtools/Inspector";
import type {DevToolsDetails} from "@/ts/devtools/DevTools";

type packettype = any

// reusable "has devtools details" interface, essentially
export function hasDevtoolsDetails() {
    const inspectorDetails = reactive(new InspectorDetails())
    const networkPackets: any[] = reactive([])
    const consoleLines: string[] = reactive([])
    
    function populateGlobal(glbl: DevToolsDetails) {
        glbl.inspectorDetails = inspectorDetails;
        glbl.networkPackets = networkPackets;
        glbl.consoleLines = consoleLines;
    }
    
    return {
        inspectorDetails,
        networkPackets,
        consoleLines,
        populateGlobal
    }
}
