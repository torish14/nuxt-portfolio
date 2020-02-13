<template>
  <div>
    <v-card :elevation="10">
      <v-container>
        <v-form ref="form" v-model="contactFormValidation.valid" lazy-validation="">
          <v-text-field
            v-model="contactForm.name"
            :rules="contactFormValidation.nameRules"
            label="name"
            required
          />
          <v-text-field
            v-model="contactForm.email"
            :rules="contactFormValidation.emailRules"
            label="email"
            required
          />
          <v-textarea
            v-model="contactForm.contents"
            :rules="contactFormValidation.emailRules"
            label="contents"
            required
          />
          <v-btn
            :loading="contactForm.loading"
            :disabled="!contactFormValidation.valid"
            block
            large
            color="accent"
            class="mt-4 font-weight-bold"
            @click="sendMailNew()"
          >
            Send
          </v-btn>
        </v-form>
      </v-container>
    </v-card>
    <v-snackbar
      v-model="snackBar.show"
      :color="snackBar.color"
      :timeout="6000"
      bottom
      right
      class="font-weight-bold"
    >
      {{ snackBar.message }}
    </v-snackbar>
  </div>
</template>

<script>
import { functions } from '~/plugins/firebase'

export default {
  data: () => ({
    contactForm: {
      name: '',
      contents: '',
      email: '',
      loading: false
    },
    contactFormValidation: {
      valid: false,
      nameRules: [v => !!v || 'Name is required'],
      emailRules: [v => !!v || 'E-mail must be valid'],
      contentsRules: [v => !!v || 'Contents are required']
    },
    snackBar: {
      show: false,
      color: '',
      message: ''
    }
  }),
  methods: {
    sendMailNew () {
      if (this.$refs.form.validate()) {
        this.contactForm.loading = true
        const mailer = functions.httpsCallable('sendMailNew')

        mailer(this.contactForm)
          .then(() => {
            this.formReset()
            this.showSnackBar(
              'success',
              'Thank you for contacting me.'
            )
          })
          .catch((err) => {
            this.showSnackBar(
              'error',
              'Transmission failed. Please try again later.'
            )
            // eslint-disable-next-line
            console.log(err)
          })
          .finally(() => {
            this.contactForm.loading = false
          })
      }
    },
    showSnackBar (color, message) {
      this.snackBar.message = message
      this.snackBar.color = color
      this.snackBar.show = true
    },
    formReset () {
      this.$refs.form.reset()
    }
  }
}
</script>

<style>

</style>
