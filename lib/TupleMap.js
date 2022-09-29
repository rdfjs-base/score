import toNT from '@rdfjs/to-ntriples'

class TupleMap extends Map {
  constructor (entries = []) {
    super()

    for (const [terms, value] of entries) {
      this.set(terms, value)
    }
  }

  delete (terms) {
    return super.delete(TupleMap.key(terms))
  }

  get (terms) {
    return super.get(TupleMap.key(terms))
  }

  has (terms) {
    return super.has(TupleMap.key(terms))
  }

  set (terms, value) {
    return super.set(TupleMap.key(terms), value)
  }

  static key (terms) {
    return terms.map(term => (term && toNT(term)) || 'undefined').join(' ')
  }
}

export default TupleMap
