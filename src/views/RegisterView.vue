<script setup>
import { reactive, ref } from 'vue';


const form = reactive({
    rut: "",
    email: "",
    nombre: "",
    password: ""
})

const form2 = ref()
const snackbar = ref(false)
const mensaje = ref('')

const register = async () => {
    try {
        
        
        const {valid} = await form2.value.validate()
        if (valid){
            const res = await fetch("http://localhost:3001/api/v1/register", {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                rut: form.rut,
                email: form.email,
                nombre: form.nombre,
                password: form.password
            })
        })

        const data = await res.json()

        snackbar.value = true
        mensaje.value = data.mensaje
        }
        
        console.log(valid)
    } catch (error) {
        console.log(error)
    }
}

const rulesRut = [
    rut => {
        if (/^(\d{1,2}(\.\d{3}){2}-[\dkK])$/.test(rut) && validarut(rut)) return true
        return 'Ingrese un rut valido con puntos y guion'
    },
]
const validarut = (rut) =>{

    rut = rut.replace(/\./g, "").replace(/-/g, "");
    if (rut.length === 0) return false;
    let cuerpo = rut.slice(0, -1);
    let dv = rut.slice(-1).toUpperCase();
    if (cuerpo.length < 7) return false;

    // Calculo digito verificador
    let suma = 0;
    let factor = 2;
    for (let i = cuerpo.length - 1; i >= 0; i--) {
        suma += parseInt(cuerpo.charAt(i), 10) * factor;
        factor = (factor === 7) ? 2 : factor + 1;
    }
    let dvCalculado = 11 - (suma % 11);
    let dvFinal = (dvCalculado === 11) ? '0' : ((dvCalculado === 10) ? 'K' : dvCalculado.toString());
    return dvFinal === dv;

}
</script>

<template>
    <v-container class="fill-height">
        <v-row align="center" justify="center">
            <v-card title="Registro" color="transparent" width="500" elevation="10">
            <v-form ref="form2" fast-fail @submit.prevent="register">
            
                <v-text-field label="Rut"
                :rules="rulesRut"
                id="rut" 
                name="rut" 
                v-model="form.rut"></v-text-field>

                <v-text-field label="Email"
                :rules="[v => /^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(v) || 'Ingrese un correo valido']"
                id="email" 
                name="email" 
                v-model="form.email"></v-text-field>

                <v-text-field label="Nombre Completo"
                :rules="[v => v.length > 3 || 'Debe contener al menos 4 caracteres']"
                id="nombre" 
                name="nombre" 
                v-model="form.nombre"></v-text-field>

                <v-text-field label="Password" 
                :rules="[v => v.length > 4 || 'Debe contener al menos 5 caracteres']"
                id="password" name="password" 
                v-model="form.password" 
                type="password"></v-text-field>

                <v-btn block variant="tonal" type="submit">Registrarse</v-btn>
            </v-form>

            <v-divider
                :thickness="2"
                class="border-opacity-50 mt-2"
                color="info"
            ></v-divider>
            <v-btn class="mt-2" block to="/">Iniciar Sesión</v-btn>
            </v-card>
        </v-row>
        <v-snackbar v-model="snackbar" class="text-center" :timeout="3000">
            {{ mensaje }}
        </v-snackbar>
    </v-container>
    
</template>