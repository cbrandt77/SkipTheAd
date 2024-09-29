<script setup lang="ts">
import {HtmlElement} from "@/ts/devtools/Inspector";

const {tag} = defineProps({
    tag: {
        type: HtmlElement,
        required: true
    }
})
</script>

<template>
	<div class="htmltagbase">
		&lt;
		<span class="htmltagname">{{ tag.type }}</span>
		<span v-if="tag.classes.length !== 0">
			class="
			<span class="htmltag-attribute" v-for="(val, i) in tag.classes" :key="i">{{ val }} </span>
			"
		</span>
		<span class="htmltag-attribute" v-for="(val, key) in tag.attributes" :key="key"> {{key}}="{{val}}"</span>
		&gt;
		<div class="htmltagbase" v-if="tag.children.length !== 0">
			{{"\n"}}
			<HtmlEntry v-for="(child, childIdx) in tag.children" :key="childIdx" :tag="child"/>
			{{"\n"}}
		</div>
		&lt;/<span class="htmltagname">{{ tag.type }}</span>&gt;
	</div>
</template>

<style scoped>
/* TODO NEEDS STYLING */
</style>