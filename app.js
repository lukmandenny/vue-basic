const app = Vue.createApp({
    // data, functions 
    // template: '<h2>This is a template</h2>'
    data() {
        return {
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45
        }
    }
})

app.mount('#app')