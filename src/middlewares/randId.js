export default store => next => action => {
    if(!action.generateId) return next(action)
        
    next({
        ...action,
        randomId: Math.random().toString() //, randomId in action creator
    }) 
}