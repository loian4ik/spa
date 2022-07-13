const express = require('express')
const router = express.Router()
const controllers = require('../controllers')

router.get('/', async (req, res, next) => {
  const data = req.context

  const itemCtr = controllers.item.instance()
  data.massaggi = await itemCtr.get({category: 'massaggi'})
  data.hammam = await itemCtr.get({category: 'hammam'})
  data.viso = await itemCtr.get({category: 'viso'})

res.render('home', data)
})

router.get('/blog', (req, res, next) => {

 res.render('blog', req.context)

})
router.get('/items', async (req, res, next) => {
  const itemCtr = controllers.item.instance()
  const items = await itemCtr.get()

  res.json({
    items
  })
})

router.post('/prenotate', async (req, res, next) => {
  const prenotateData = req.body
  res.json(prenotateData)

  const prenotateCtr = controllers.prenotate.instance()
  const prenotate = await prenotateCtr.post(prenotateData)

  res.json(prenotate)

})

module.exports = router
