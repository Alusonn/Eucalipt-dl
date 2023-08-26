import { config } from 'dotenv'
config()

export const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://alanWindowsPC:Argentina1@eucalipto-dl.xsyqukc.mongodb.net/eucalipto-dl"

export const PORT = process.env.PORT || 4000

export const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME || "dyp6u7nll"

export const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY || "469227314426786"

export const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET || "kqhqasmlsqtSwUF7UOuHoGgaCKA"