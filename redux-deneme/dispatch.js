store.dispatch({ type: 'counter/increment' })

console.log(store.getState())
// {value: 1}


//PART 2 
const increment = () => {
    return {
      type: 'counter/increment'
    }
  }
  
  store.dispatch(increment())
  
  console.log(store.getState())
  // {value: 2}