import React,{Component} from 'react';

 class Counter extends Component{
    // state= {
    //     count:0
    // };
    constructor(props){
        super(props);
        this.state={
            count:this.props.initialCount
            // Count=1,
            // id=15,
            // test:'collabra'
        }
    }
    increment = () => {
        //this.state.count +=1; 
        console.log('Function Increment');
        this.setState(prevState => {
            return{count:prevState.count + 1}
            

        })
    }
        decrement = () => {
            //this.state.count +=1; 
            console.log('Function decrement');
            this.setState(prevState => {
                return{count:prevState.count - 1}
            })    
       

    }
    render(){
        console.log('Props Values : ',this.props.intialCount);
        return(
            <div>Counter:{this.state.count }
            
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.decrement}>Decrement</button>

                </div>
        );
    }

            
        
} 


export default Counter;