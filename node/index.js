import 'dotenv/config'
import bs from 'browser-sync'

bs.create().init({watch: true, server: './app'})

process.env.SECRETO
process.env.API_KEY

console.log(process.env.SECRETO)
console.log(process.env.API_KEY)