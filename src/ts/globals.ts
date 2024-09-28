import {type Component, inject, reactive, ref} from 'vue'
import {DevToolsDetails} from "@/ts/devtools/DevTools";

export const devToolsDetails = reactive(new DevToolsDetails())