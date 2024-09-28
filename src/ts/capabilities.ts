import {onMounted, reactive, ref, type Ref} from "vue";
import {DevToolsDetails} from "@/ts/devtools/DevTools";

const devToolsDetails = reactive(new DevToolsDetails())

export function useDevToolsGlobalData(): Ref<DevToolsDetails> {
    const ourdetails = ref(new DevToolsDetails())
    
    onMounted(() => ourdetails.value = devToolsDetails);
    
    return ourdetails
}