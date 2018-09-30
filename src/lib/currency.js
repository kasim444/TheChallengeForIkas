export default number =>
  number.toLocaleString('tr-TR', {
    style: 'currency',
    currency: 'TRY'
  })
