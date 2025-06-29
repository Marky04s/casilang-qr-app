<template>
  <div>
    <v-img
      class="mx-auto my-6"
      max-width="228"
      src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-slim-text-light.svg"
    ></v-img>

    <v-card
      class="mx-auto pa-12 pb-8"
      elevation="8"
      max-width="448"
      rounded="lg"
    >
      <div class="text-subtitle-1 text-medium-emphasis">Account</div>

      <v-text-field
        density="compact"
        placeholder="Email address"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
      ></v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
        Password

        <a
          class="text-caption text-decoration-none text-blue"
          href="#"
          rel="noopener noreferrer"
          target="_blank"
        >
          Forgot login password?
        </a>
      </div>

      <v-text-field
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="Enter your password"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="visible = !visible"
      ></v-text-field>

      <v-card
        class="mb-6"
        color="surface-variant"
        variant="tonal"
      >
        <v-card-text class="text-medium-emphasis text-caption">
          Tip: You can also sign in using your Google account below.
        </v-card-text>
      </v-card>

      <v-btn
        class="mb-4"
        color="blue"
        size="large"
        variant="tonal"
        block
      >
        Log In
      </v-btn>

      <v-divider class="my-4"></v-divider>

      <!-- ✅ Google Sign-In Button -->
      <v-btn
        color="white"
        variant="outlined"
        block
        size="large"
        height="45"
        class="px-4"
        style="display: flex; justify-content: center; align-items: center;"
        @click="handleGoogleSignIn"
      >
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
          alt="Google"
          width="20"
          height="20"
          style="margin-right: 10px;"
        />
        <span style="color: #000; font-size: 14px;">Sign in with Google</span>
      </v-btn>

      <v-card-text class="text-center mt-6">
        <a
          class="text-blue text-decoration-none"
          href="#"
          rel="noopener noreferrer"
          target="_blank"
        >
          Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
        </a>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { signInWithPopup, auth, provider } from '@/plugins/firebase'

const visible = ref(false)

const handleGoogleSignIn = async () => {
  try {
    const result = await signInWithPopup(auth, provider)
    const user = result.user

    console.log('✅ Google Sign-In Successful:', user)
    console.log('Name:', user.displayName)
    console.log('Email:', user.email)

    // OPTIONAL: Redirect after sign-in
    // window.location.href = '/dashboard' or use router.push()

  } catch (error) {
    console.error('❌ Google Sign-In Failed:', error)
    alert("Google Sign-In failed: " + error.message)
  }
}
</script>

<script>
export default {
  layout: "auth",
}
</script>