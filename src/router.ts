import { app } from "./app";


app.get('/', () => Bun.file('src/routes/index.html'))
app.get('/register', () => Bun.file('src/routes/register.html'))


export default app;