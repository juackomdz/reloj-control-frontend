<script setup>
    import { ref } from "vue"
    import NavBarComponent from "../components/NavBarComponent.vue"
    import LogoutComponent from "../components/LogoutComponent.vue"
    import { jwtDecode } from "jwt-decode"

    const resumen = ref([])
    const loading = ref(true)
    const user = localStorage.getItem("user")
    const decoded = jwtDecode(user)
    

    const datos = async () => {
        const refresh_token = await cookieStore.get("refresh_token")
        try {
            const res = await fetch(`http://localhost:3001/api/v1/auth/data/`+decoded.user,{
                headers: {
                    "Authorization": "Bearer "+user
                }
            })
            const data = await res.json()

            resumen.value = data

            if(res.status === 401){

                const res_refresh = await fetch('http://localhost:3001/api/v1/refresh',{
                    method: "POST",
                    headers: {
                        "Refresh": refresh_token.value
                    }
                })

                const new_token = await res_refresh.json()
                const tkn = new_token.token
                localStorage.removeItem("user")
                localStorage.setItem("user", tkn)
            }
        } catch (error) {
            console.log(error)
        } finally {
            setTimeout(()=> {
                loading.value = false
            },1000)
        }
    }
    
    datos()
</script>

<template>

<v-container>
    <NavBarComponent></NavBarComponent>
    <v-container>
        <v-row>
            <h1 class="text-h2">Registros</h1>
            <LogoutComponent></LogoutComponent>
        </v-row>
    </v-container>
      <v-container v-if="loading" class="text-center">
       <v-progress-circular
      color="primary"
      indeterminate
    ></v-progress-circular>
    </v-container>
    <v-container v-else>
        <v-row>
            <v-col>
                <v-table hover striped="even" theme="dark" fixed-header density="comfortable">
                <thead>
                    <tr>
                        <th>Hora Entrada</th>
                        <th>Hora Salida</th>
                        <th>Horas Trabajadas</th>
                        <th>Minutos Trabajados</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in resumen">
                        <td>{{ item.hora_entrada }}</td>
                        <td>{{ item.hora_salida }}</td>
                        <td>{{ item.horas_trabajadas }}</td>
                        <td>{{ item.minutos_trabajados }}</td>
                    </tr>
                </tbody>
            </v-table>
            </v-col>
        </v-row>
    </v-container>
</v-container>
</template>