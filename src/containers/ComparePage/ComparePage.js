import React from 'react';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Features from 'components/Features/Features';
import {Component} from 'react'
import { connect } from 'react-redux';
import * as actions from 'store/actions/index';
import ScheduleContainer from 'containers/ScheduleContainer/ScheduleContainer';


class ComparePage extends Component {
    constructor(props){
        super(props)
        this.fileInput=React.createRef();
    }
    render() {
        const submitClick=()=>{
            
            console.log(this.fileInput.current.files[0])
        }

        const fileReader=()=>{
            var file=this.fileInput.current.files[0];
            var reader= new FileReader();
            reader.onload=(event)=>{
                // this.props.getSchedule(event.target.result)
                console.log(event.target.result)
            };
            return(
            reader.readAsText(file))}
        
            
        
        return (
            <div>
                <input type="file" id="input" ref={this.fileInput}></input>
                <button onClick={fileReader} type="button" class="btn btn-primary">Upload</button>
            <p>OWO </p>
            <p></p>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getSchedule: (scheduleContent) => dispatch(actions.getSchedule(scheduleContent))
    };
};

export default connect(null, mapDispatchToProps)(ComparePage);