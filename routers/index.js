import dashboardRouter from './dashboardRouters.js';

export default (app, express)=>{
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))
    app.use(dashboardRouter)
}