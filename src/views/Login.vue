<template>
    <div class="flex h-screen justify-center items-center">
      <div class="w-full max-w-md px-4">
        <Card>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          Ingresa al sistema
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form @submit.prevent="acceso">
          <FieldGroup>
            <Field>
              <FieldLabel for="email">
                Email
              </FieldLabel>
              <Input
                v-model="email"
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </Field>
            <Field>
              <div class="flex items-center">
                <FieldLabel for="password">
                  Password
                </FieldLabel>
              </div>
              <Input
              v-model="password" 
              id="password" 
              type="password" 
              required />
            </Field>
            <Field>
              <Button type="submit">
                Login
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
      </div>
    </div>
</template>

<script setup lang="ts">

import { Card, CardContent, CardDescription, CardTitle, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Button } from "@/components/ui/button"

import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { jwtDecode } from 'jwt-decode'

const router = useRouter()

interface Payload {
  role: string
}

const email = ref<string>()
const password = ref<string>()

const acceso = async () =>{

  try {
    const res = await fetch('http://localhost:3001/api/v1/login',{
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      email: email.value,
      password: password.value
    })
  })

  const data = await res.json()
  localStorage.setItem("token", JSON.stringify(data))
  
  const decoded: Payload = jwtDecode(data.auth_token)

  if(decoded.role === 'admin'){
    router.push('test-admin')
  }else{
    router.push('/panel/index')
  } 
  } catch (error) {
    console.log(error)
  }
}

</script>