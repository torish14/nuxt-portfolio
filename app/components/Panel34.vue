<template>
  <v-expansion-panels focusable="">
    <v-row justify="center" style="width: 305px;">
      <v-expansion-panels popout>
        <v-expansion-panel
          v-for="(item,i) in 1"
          :key="i"
        >
          <v-expansion-panel-header>Relator</v-expansion-panel-header>
          <v-expansion-panel-content style="font-size: 14px; font-weight: 300">
            People exceptionally talented in the Relator theme enjoy close relationships with others.<br> They find deep satisfaction in working hard with friends to achieve a goal.
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </v-expansion-panels>
</template>
