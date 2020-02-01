<template>
  <v-row :elevation="20" justify="center" style="width: 305px;">
    <v-expansion-panels popout>
      <v-expansion-panel
        v-for="(item,i) in 1"
        :key="i"
      >
        <v-expansion-panel-header style="background: rgba(255, 204, 0, 0.7);">
          Activator
        </v-expansion-panel-header>
        <v-expansion-panel-content style="font-size: 14px; font-weight: 300;">
          People exceptionally talented in the Activator theme can make things<br>happen by turning thoughts into action. <br>They want to do things now, rather than simply talk about them.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</template>
