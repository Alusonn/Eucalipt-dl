import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({
    author: "Alan",
    desc: "",
    ver: 2321,
  });
});

router.get('/ping', (req, res) => {
    res.send('dsajhn')
} )

export default router 