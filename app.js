const app = Vue.createApp({
    // data, functions 
    // template: '<h2>This is a template</h2>'
    data() {
        return {
            url: 'https://youtube.com',
            showBooks: true,
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45,
            x: 0,
            y: 0,

            books:[
                {title: 'The Way of King', author: 'Patrick Rothfuss', img: 'assets/1.png', isFav: true},
                {title: 'Name of The Wind', author: 'Brandon Sanderson', img:'assets/2.png', isFav: false},
                {title: 'The Final Empire', author: 'Brandon Sanderson', img:'assets/3.png', isFav: true},
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
        },
        toggleChangeisFav(book){
            book.isFav = !book.isFav
        }
    },
    computed: {
        filteredBooks(){
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')