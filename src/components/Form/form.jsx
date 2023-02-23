import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';

const ShowError = ({ errors }) => {
    return (
        <ul style={{color: 'red', marginLeft: '-20px'}}>
            {
                errors.map((error, i) => <li key={i}>{error}</li>)
            }
        </ul>)

}

export default class Form extends React.Component {

    state = {
        nama: "",
        email: "",
        nomor: "",
        kelamin: "",
        password: "",
        setuju: false,
        errors: []
    }

    handleRegister = (e) => {
        e.preventDefault();
        const { nama, email, nomor, kelamin, password } = this.state;

        let massage = [];

        if (nama.length === 0) {
            massage = [...massage, "Nama tidak boleh kosong"]
        }

        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (email.length === 0) {
            massage = [...massage, "Email tidak boleh kosong"]
        } else if(!re.test(String(email).toLocaleLowerCase())) {
            massage = [...massage, "Email tidak valid"]
        }

        if (nomor.length === 0) {
            massage = [...massage, "Nomor tidak boleh kosong"]
        }
        if (kelamin.length === 0) {
            massage = [...massage, "Jenis kelamin tidak boleh kosong"]
        }
        if (password.length === 0) {
            massage = [...massage, "Password tidak boleh kosong"]
        } else if(password.length < 8) {
            massage = [...massage, "Password terlalu pendek"]
        }

        
        

        

        if (massage.length > 0) {
            this.setState({
                errors: massage
            },);
        } else {
            alert(`
        nama: ${this.state.nama}
        email: ${this.state.email}
        nomor: ${this.state.nomor}
        kelamin: ${this.state.kelamin}
        password: ${this.state.password}
        setuju: ${this.state.setuju ? "YES" : "NO"}
        `)
        this.setState({
            nama: "",
            email: "",
            nomor: "",
            kelamin: "",
            password: "",
            setuju: false,
            errors: []
        })
        }

        
    }

    render() {
        return (
            <>
        <Card>
            <div class="container justify-content-center w-50 p-5">
            {
                this.state.errors && <ShowError errors={this.state.errors} />
            }
                <h2>Form Register</h2>
                <form class="mt-3" onSubmit={this.handleRegister}>
                    <div class="row mb-3">
                        <label class="col-sm-3 col-form-label">Nama</label>
                        <div class="col-sm-9">
                            <input placeholder="Masukan Nama" type="text" class="form-control" id="inputName" name="nama" onChange={e => this.setState({ nama: e.target.value })} value={this.state.nama} />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label class="col-sm-3 col-form-label">Email</label>
                        <div class="col-sm-9">
                            <input placeholder="email@email.com" type="email" class="form-control" id="inputEmail" name="email" onChange={e => this.setState({ email: e.target.value })} value={this.state.email} />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label class="col-sm-3 col-form-label">No. WA</label>
                        <div class="col-sm-9">
                            <input placeholder="08123456789" type="text" class="form-control" id="inputNomor" name="nomor" onChange={e => this.setState({ nomor: e.target.value })} value={this.state.nomor} />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label class="col-sm-3 col-form-label">Jenis Kelamin</label>
                        <div class="col-sm-9">
                            <select class="form-select" aria-label="Default select example" name="kelamin" onChange={e => this.setState({ kelamin: e.target.value })} value={this.state.kelamin}>
                                <option selected>Pilih Jenis Kelamin</option>
                                <option value="1">Laki-Laki</option>
                                <option value="2">Perempuan</option>
                            </select>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label class="col-sm-3 col-form-label">Password</label>
                        <div class="col-sm-9">
                            <input placeholder="********" type="password" class="form-control" id="inputPassword" name="password" onChange={e => this.setState({ password: e.target.value })} value={this.state.password} />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-7 offset-sm-3">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck1" checked={this.state.setuju} name="setuju" onChange={e => this.setState({ setuju: e.target.checked })} />
                                <label class="form-check-label" for="gridCheck1">
                                    Setuju dengan kebijakan perusahaan.
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-8">
                        <button type="submit" class="btn btn-primary ">Register</button>
                    </div>
                </form>
            </div>
        </Card>
            </>
        )
    }
}