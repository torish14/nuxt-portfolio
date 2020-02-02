<template>
  <v-expansion-panels focusable="">
    <v-row justify="center" style="width: 305px;">
      <v-expansion-panels popout>
        <v-expansion-panel
          v-for="(item,i) in 1"
          :key="i"
        >
          <v-expansion-panel-header>Self-Assurance</v-expansion-panel-header>
          <v-expansion-panel-content style="font-size: 14px; font-weight: 300">
            People exceptionally talented in the <br> Self-Assurance theme feel confident in their ability to take risks and manage their own lives.<br> They have an inner compass that gives them certainty in their decisions.
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </v-expansion-panels>
</template>
