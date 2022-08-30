export default (to, from, next) => {
    if (
        localStorage.getItem('userDetails') != null &&
        localStorage.getItem('userDetails').length > 0
    ) {
        next()
    } else {
        return console.log(localStorage.getItem('userDetails'));
        localStorage.removeItem('userDetails')
        next('/app/login')
    }
}