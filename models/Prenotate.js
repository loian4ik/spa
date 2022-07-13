const { Model } = require('vertex360')({ site_id: process.env.TURBO_APP_ID })

const props = {
 nome: { type: String, default: '', display: true },
 email: { type: String, default: ''},
 prenotate: { type: String, default: ''},
  schema: { type: String, default: 'prenotate', immutable: true },
  timestamp: { type: Date, default: new Date(), immutable: true }
}

class Prenotate extends Model {
  constructor () {
    super()
    this.schema(props)
  }
}

module.exports = Prenotate
