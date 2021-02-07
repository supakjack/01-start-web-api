module.exports = {
  get: (req, res, next) => {
    res.send({ message: 'Hello get route' })
  },

  post: (req, res, next) => {
    res.send({ message: 'Hello post route' })
  },

  delete: (req, res, next) => {
    res.send({ message: 'Hello delete route' })
  },

  put: (req, res, next) => {
    res.send({ message: 'Hello put route' })
  }
}
