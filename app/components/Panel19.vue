<template>
  <v-row justify="center" style="width: 305px;">
    <v-expansion-panels popout>
      <v-expansion-panel
        v-for="(item,i) in 1"
        :key="i"
      >
        <v-expansion-panel-header>Context</v-expansion-panel-header>
        <v-expansion-panel-content>
          People exceptionally talented in the Context theme enjoy thinking about the past. They understand the present by researching its history.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</template>
