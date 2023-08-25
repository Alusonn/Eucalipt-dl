import { config } from 'dotenv'
config()

export const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://alanWindowsPC:Argentina1@eucalipto-dl.xsyqukc.mongodb.net/"

export const PORT = process.env.PORT || 4000


