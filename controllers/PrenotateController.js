const { Controller } = require('vertex360')({ site_id: process.env.TURBO_APP_ID })
const Prenotate = require('../models/Prenotate')

class PrenotateController extends Controller {
  constructor () {
    super(Prenotate, process.env)
  }

  async get (params) {
    const prenotates = await Prenotate.find(params, Controller.parseFilters(params))
    return Prenotate.convertToJson(prenotates)
  }

  async getById (id) {
    const prenotate = await Prenotate.findById(id)
    if (prenotate == null) {
      throw new Error(`${Prenotate.resourceName} ${id} not found.`)
    }

    return prenotate.summary()
  }

  async post (body) {
    const prenotate = await Prenotate.create(body)
    return prenotate.summary()
  }

  async put (id, params) {
    const prenotate = await Prenotate.findByIdAndUpdate(id, params, { new: true })
    return prenotate.summary()
  }

  async delete (id) {
    const prenotate = await Prenotate.findByIdAndRemove(id)
    return prenotate
  }
}

module.exports = new PrenotateController()

