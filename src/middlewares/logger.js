export default store => next => action => {
    console.log('state before', store.getState())
    console.log('dispatching', action)
    next(action)//передали управление дальше (в reducer, когда закончатся middlewares) ?
    console.log('state after', store.getState())
}