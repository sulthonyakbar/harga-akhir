import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
        harga: 0,
        ppn: 0,
        diskon: 0,
        hasil: 0
    }
}
bind = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

    Hitung = (event) => {
        event.preventDefault();

        let data = {
        harga: parseInt (this.state.harga),
        ppn: parseInt (this.state.ppn),
        diskon: parseInt (this.state.diskon),
        }

        let hasil_ppn = data.harga * (data.ppn / 100)
        let hasil_diskon = data.harga * (data.diskon / 100)
        let hasil_data = data.harga + hasil_ppn - hasil_diskon

        this.setState({
            hasil: hasil_data
        })
    }
    
render(){
    return(
      <div className="container col-sm-6">
            <div class="card mt-4 mr-5 ml-5">
              <div class="card-header bg-danger text-black">Harga Akhir</div>
              <div class="card-body">

  
                <form onSubmit={this.Hitung}> 

                <div className="form-group">
                    <label>Harga</label>
                    <input type="number" name="harga" className="form-control" value={this.state.harga} onChange={this.bind} required/>
                </div>

                <div className="form-group">
                    <label>PPN</label>
                    <input type="number" name="ppn" className="form-control" value={this.state.ppn} onChange={this.bind} required />
                </div>

                <div className="form-group">
                    <label>Diskon</label>
                    <input type="number" name="diskon" className="form-control" value={this.state.diskon} onChange={this.bind} required />
                </div>  
              
                <button class="btn btn-danger" type="submit">Hitung</button>

                </form>
                <hr></hr>
                <div className="alert alert-info">
                    <strong><center>Rp. {this.state.hasil}</center></strong> 
                </div>
                </div>
            </div>
            </div>
            
    );
}
}
export default App;
