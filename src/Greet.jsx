const Greet = props => {
   // console.log(props);
   const {name, heroName} =props
    return (
        <h1> Hello {name} a.k.a {heroName} </h1>
    )
}
export default Greet;