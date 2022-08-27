import React, { Component } from "react";
import '../style/avatar.css'

export default class Header extends Component {
    render() {
        return (
            <div
                className="container-fluid bg-warning"
                style={{ width: "100%", height: 100 }}
            >
                <div className="row">
                    <div className="col-2">
                        {/* logo */}
                        <img
                            src="https://now.edu.vn/wp-content/uploads/2018/12/Be-logo-now-academy-768x768.png"
                            style={{ width: 100 }}
                            alt="img"
                        />
                    </div>
                    {/* search form */}
                    <div className="col-8">
                        <div className="input-group mt-4 ">
                            <div className="row">
                                <div className="form-outline">
                                    <input type="search" id="form1" className="form-control" placeholder="Tìm kiếm" style={{ width: '950px' }} />
                                </div>
                                
                                <button type="button" className="btn btn-danger" style={{ width: 37, height: 37 }} >
                                    <i className="fa fa-search"/>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* cart */}
                    <div>
                        <button className="mt-4 btn btn-warning" style={{ width: 37, height: 37 }} >
                            <i className="fa fa-shopping-cart" style={{fontSize: 20}}/>
                        </button>
                    </div>

                    <div className="mt-4 ml-5">
                        <img className="avatar" src="./avatar.jpg" alt="avatar" style={{ width: 37, height: 37 }}/>
                    </div>
                </div>

            </div>
        );
    }
}
