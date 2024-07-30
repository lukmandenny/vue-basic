const app = Vue.createApp({
    // data, functions 
    // template: '<h2>This is a template</h2>'
    data() {
        return {
            showBooks: true,
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45
        }
    }, 
    methods: {
        // newTitle is an arguments
        changeTitle(newtitle){
            console.log('you clicked me')
            this.title = newtitle
        },
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },
        handleEvent(){
            console.log('hola spada')
        }
    }
})

app.mount('#app')