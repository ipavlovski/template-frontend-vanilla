import '../styles/style.css'

export default class App {
    prop = 123
    constructor() {
        console.log('Starting.')
    }
}

declare global { var app: App }
window.app = new App()