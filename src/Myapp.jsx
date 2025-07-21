import React, { Component } from 'react';
import './Myapp.css';
class Myapp extends Component {
    render() {
        return (
            <div className='myInfo'>
                <img className='photo' src='/myphoto.jpeg' alt='photo' /><br/><br/>
                <label className='mystyle'>My Info</label>
                <table>
                    <tr>
                        <td> <label>Name</label></td>
                        <td> <label>P.V.Durgabhavani</label></td>
                    </tr>
                <tr>
                    <td><label>Program</label></td>
                    <td><label>BTECH</label></td>
                </tr>
                <tr>
                    <td><label>email</label></td>
                    <td><label>2400032351@kluniversity.in</label></td>
                                    </tr>
                <tr>
                    <td><label>Mobile no</label> </td>
                    <td><label>9515409399</label></td>
                </tr>
                <tr>
                    <td><label>Group</label></td>
                    <td><label>CSE</label></td>
                </tr>
                <tr>
                    <td><label>Course</label></td>
                    <td><label>front End Development Frameworks</label></td>
                </tr>
                </table>
            </div>
        );
    }
}

export default Myapp;
