export default ({ app }) => {
    // Every time the route changes (fired on initialization too)
    app.router.afterEach((to, from) => {
        
        if (typeof window !== 'undefined') {
            let storedToken = localStorage.getItem('Token')
            
            console.log('Checking global router..', storedToken)
        }
        
    })
}