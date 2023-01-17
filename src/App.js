import React from "react"
import Header from "./components/Header"
import Home from "./pages/Home";
import { Route } from "react-router-dom";
import Cart from "./pages/Cart";
import axios from 'axios';
import {useDispatch} from "react-redux";
import {setPizzas} from "./redux/actions/pizzas";

function App() {
    const dispatch = useDispatch();



    React.useEffect(() => {
        axios.get('http://localhost:3000/pizzas').then(({data}) => {
            dispatch(setPizzas(data))
        });
    },[]);

    return(
        <div>
            <h1>React Pizza</h1>
            <div className="wrapper">
                <Header />

                <div className="content">
                    <Route path='/' component={Home} exact />
                    <Route path='/cart' component={Cart} exact />
                </div>
            </div>
        </div>
    );
}

export default App;




// const mapStateToProps = (state) =>
//     return{
//         items: state.pizzas.items,
//     };
// };
//
// const mapDispatchToProps = dispatch =>{
//     return{
//         setPizzas: (items) => dispatch(setPizzasAction(items)),
//         dispatch,
//     }
// }
//
//
// export default connect(mapStateToProps,mapDispatchToProps)(App);
