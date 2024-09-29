<script setup lang="ts">

import {useDevToolsGlobalData} from "@/ts/capabilities";
import {HtmlElement} from "@/ts/devtools/Inspector";

const devTools = useDevToolsGlobalData();

const ourHtmlStuff: HtmlElement = new HtmlElement('body', {
    children: [
        new HtmlElement('p', {
            attributes: {
                'class': 'thing thing1',
                'on-click': 'callFunction()'
            },
            children: [
                new HtmlElement('span', {
                    classes: ['thing2', 'thing3']
                })
            ]
        }),
        new HtmlElement('div', {
            attributes: {
                'class': 'the-divrrrr',
                'v-if': 'made_a_div'
            }
        })
    ]
})

</script>

<template>
	<!--<canvas id="game-canvas"></canvas>-->
	<button class="testbutton" @click="devTools.logLine('button clicked')">test</button>
	<button class="testbutton" @click="devTools.inspectorDetails.html.push(ourHtmlStuff)">pushBody</button>
</template>

<style scoped>

</style>