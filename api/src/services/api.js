
import fetch from "node-fetch";

// Adicionar informações sobre o ambiente de prod
const baseUrl = __DEV__ ? 'https://10.0.2.2:9070' : "todo"

const api = {
    sendHireForm: (form) => {
        return fetch(`${baseUrl}/sender/v1/hire-form`, {
            method: 'POST',
            body: JSON.stringify(form),
            headers: { 'Content-Type': 'application/json' },
        })
    },

    sendContactForm: (form) => {
        console.log('dentro do sendContactForm')
        console.log(`${baseUrl}/sender/v1/contact-form`)
        return fetch(`${baseUrl}/sender/v1/contact-form`, {
            method: 'POST',
            body: JSON.stringify(form),
            headers: { 'Content-Type': 'application/json' },
        })
    }
}

export default api;