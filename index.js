// write your code below!

function happyHolidays () {
  return "Happy holidays!";
}

function happyHolidaysTo(name), (){
  if name = "you"
  return "Happy holiday, ${name}!"
}


 describe('happyHolidaysTo(name)', () => {
    it('returns "Happy holidays, ${name}!"', () => {
      expect(happyHolidaysTo('you')).toEqual('Happy holidays, you!')
    })
  })