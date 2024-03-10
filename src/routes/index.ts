import { Router } from 'express'
import cd from '../controllers/cd'

const router = Router()

// CD
router.post('/cd/add', cd.addCD)
router.get('/cd/all', cd.allCDs)

export default router
