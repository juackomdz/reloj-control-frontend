<script setup>
    import { ref } from "vue"
    import NavBarComponent from "../components/NavBarComponent.vue"
    import LogoutComponent from "../components/LogoutComponent.vue"
    import { jwtDecode } from "jwt-decode"

    const ex = ref([])
    const user = localStorage.getItem("user")
    const decoded = jwtDecode(user)
    const datos = async () => {
        try {
            const res = await fetch(`http://localhost:3001/api/v1/auth/data/`+decoded.user,{
                headers: {
                    "Authorization": "Bearer "+user
                }
            })
            const data = await res.json()

            ex.value = data
        } catch (error) {
            console.log(error)
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
    <v-container>
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
                    <tr v-for="item in ex">
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