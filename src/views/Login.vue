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
        <form>
          <FieldGroup>
            <Field>
              <FieldLabel for="email">
                Email
              </FieldLabel>
              <Input
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
              <Input id="password" type="password" required />
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
</script>