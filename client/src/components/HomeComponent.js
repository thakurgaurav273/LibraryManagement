import React,{Component} from 'react';

class Home extends Component {

    constructor(props){
        super(props);
        this.state={
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
      }

render(){
    return(
        <div className="container mt-4 home text-center align-self-center">
        <br/><br/><br/>
            <div className="row mt-3  text-center justify-content-center">
            <h1 align="center"> Welcome to Our Library</h1>
            </div>
            <div className="row ">

        <br/><br/><br/>
        <br/><br/><br/>
            <h6>
            Welcome to Our Library, a place where knowledge knows no bounds. Explore our collection of classics and contemporary titles across genres and subjects. Find your next adventure, escape, or inspiration within these shelves. Our dedicated 
            staff is here to assist you. Thank you for choosing our library;
             we're excited to be part of your reading journey     <br/><br/> </h6>
            </div>
            <div className="row justify-content-center">
            <table>
    <tr> <th colspan="2"><h6>Library Timings</h6></th> </tr>
    <tr> <td><h6>Opening Time</h6> </td> <td> <h6>9.00 A.M.</h6></td></tr>
    <tr> <td>Closing Time </td> <td> 9.00 P.M.</td></tr>
            </table>
            <br/>
            <br/>
                </div>
                <br/><br/>
                <br/><br/><br/>
            </div>
        );
}

}

export default Home;