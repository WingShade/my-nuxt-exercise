export default ({ app }, inject) => {
  app.myInjectedFunction = (string) =>
    console.log('Okay, another function', string)
}
