import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.render('home', {})
})

router.get('/cart', (req, res) => {
    res.render('carts', {})
})

export default router
