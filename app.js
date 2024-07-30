const app = Vue.createApp({
    // data, functions 
    // template: '<h2>This is a template</h2>'
    data() {
        return {
            showBooks: true,
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45,
            x: 0,
            y: 0,

            books:[
                {title: 'The Way of King', author: 'Patrick Rothfuss'},
                {title: 'Name of The Wind', author: 'Brandon Sanderson'},
                {title: 'The Final Empire', author: 'Brandon Sanderson'},
            ]
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
        handleEvent(e, data){
            console.log(e, e.type)
            if (data){
                console.log(data)
            }
        },
        handleMousemove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
})

app.mount('#app')