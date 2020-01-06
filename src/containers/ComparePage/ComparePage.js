import React from 'react';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Features from 'components/Features/Features';
import {Component} from 'react'



// make a  date formatter for yyyymmdd
// make sure the event only starts after the start date
// make sure if theres multiple times for the same day......
// at line 94atm
class ComparePage extends Component {
    constructor(props){
        super(props)
        this.state={
            rawCalendar:[],
            parsedStartTimes:{},
            timeZone:{
                value:-5,
                options:[
                    {value:-5, displayValue: 'EST'},
                    {value:-4, displayValue: 'AST'},
                    {value:-3.5, displayValue: 'NST'},
                    {value:-6, displayValue: 'CST'},
                    {value:-7, displayValue: 'MST'},
                    {value:-8, displayValue: 'PST'},
                    {value:-9, displayValue: 'AKST'}

                ]},
            endPoint:null,
            }
            this.fileInput=React.createRef();
        }

    
inputChangedHandler=(event)=>{
    const updatedInput={
        ...this.state.timeZone
    };
    
    updatedInput.value=event.target.value;
    
    this.setState({timeZone:updatedInput})
}

endpointCalculator=()=>{
    // Calculate the timepoint at which we want to stop parsing events
    let today=new Date()
    let futureDate=today.setDate(today.getDate()+31);
    futureDate=new Date(futureDate)
    let futureYear=futureDate.getFullYear()
    let futureMonth=futureDate.getMonth()+1
    let futureDay=futureDate.getDate();
    if(futureMonth<10){
        futureMonth=0+""+futureMonth
    }
    if(futureDay<10){
        futureDay=0+""+futureDay
    }
    let endPoint=futureYear+futureMonth+futureDay
    console.log(endPoint)
    this.setState({endPoint:endPoint});
    
}
componentDidMount(){
    this.endpointCalculator()
}


    
    calendarParser=()=>{
        let daysRegex=/MO|TU|WE|TH|FR/g
        let currentDate=new Date()
        let currentYMD=currentDate.getFullYear()+""+(currentDate.getMonth()+1)+currentDate.getDate()
        // do checks if current ymd is less than 10, bc js formatting
        let startTime=0
        let i=0
        // console.log(this.state.rawCalendar)
        for(i=0;i<this.state.rawCalendar.length;i++){
            let dateIndex =this.state.rawCalendar.indexOf("DTSTART",i)
            i=dateIndex
            let yearIndex=this.state.rawCalendar.indexOf(":",i);
            i=yearIndex
            // Found a start of an event, check if it is relevant to our year
            if(this.state.rawCalendar.substr(i+1,8)>=currentYMD && this.state.rawCalendar.substr(i+1,8)<this.state.endPoint){ 
            //Check if the event is recurring or not
           
                  
                let nextEventDateIndex=this.state.rawCalendar.indexOf("DTSTART",i)
                let freqIndex=this.state.rawCalendar.indexOf("FREQ",i)
                if(freqIndex<nextEventDateIndex){
                    //this means that this is a recurring event, now is it  monthly or weekly
                    if(this.state.rawCalendar.substr(freqIndex+5,12).indexOf("WEEK")>-1){
                        //what days is it on?c, also make sure the event only is logged AFTER it starts, and 
                        // let eventStartDate=
                        let eventFinishIndex=this.state.rawCalendar.indexOf("UNTIL",freqIndex);
                        let daysIndex=this.state.rawCalendar.indexOf("BYDAY",freqIndex)
                        let dayString=this.state.rawCalendar.substr(daysIndex+5,16)
                        let daysArray=dayString.match(daysRegex)
                        
                        for(let ele of daysArray){
                            if(ele=="MO"){
                                let incrementedYMD=0
                                let incrementedDate=new Date()
                                incrementedDate.setDate(incrementedDate.getDate()+(1+7-incrementedDate.getDay())%7);
                                let incrementedMonth=incrementedDate.getMonth()+1
                                let incrementedDay=incrementedDate.getDate();
                                if(incrementedMonth<10){
                                    incrementedMonth=0+""+incrementedMonth
                                }
                                if(incrementedDay<10){
                                    incrementedDay=0+""+incrementedDay
                                }

                                //multiple events on the same day??
                                incrementedYMD=incrementedDate.getFullYear()+""+(incrementedMonth)+incrementedDay
                                console.log(incrementedYMD)
                                this.state.parsedStartTimes[incrementedYMD]=startTime
                                while(incrementedYMD<this.state.endPoint || incrementedYMD<eventFinishIndex){
                                    //whens the next monday
                                    incrementedDate.setDate(incrementedDate.getDate()+7);
                                    incrementedMonth=incrementedDate.getMonth()+1
                                    incrementedDay=incrementedDate.getDate();
                                    if(incrementedMonth<10){
                                        incrementedMonth=0+""+incrementedMonth
                                    }
                                    if(incrementedDay<10){
                                        incrementedDay=0+""+incrementedDay
                                    }
                                    incrementedYMD=incrementedDate.getFullYear()+""+incrementedMonth+incrementedDay
                                    console.log(incrementedYMD)
                                    startTime=this.state.rawCalendar.substr(i+10,6)
                                    this.state.parsedStartTimes[incrementedYMD]=startTime
                                }
                            }
                        }
                        //figure out which day it is using .getDate(), figure out the next days the event is on then just add 7


                    }
                }

                //if not recurring at the event start and end to calendar
                // else{
                //     // check if the event is an all day event
                //     // if(this.state.rawCalendar.substr(i+1))
                //     let yearMonthDay = this.state.rawCalendar.substr(i+1,8);
                //     if(this.state.rawCalendar.substr(i+1,10).indexOf("T")==-1){
                //         this.state.parsedStartTimes[yearMonthDay]="allDay"
                //     }
                //     else{
                //     this.state.parsedStartTimes[yearMonthDay]=this.state.rawCalendar.substr(i+10,6)}
                // }

                
            }
            if(dateIndex===-1){
                console.log(this.state.parsedStartTimes)
                break;
            }

        }
        console.log(this.state.timeZone.value)
        // return (this.state.rawCalendar.substring(1,4));
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
                let userCalendar=event.target.result
                this.setState({rawCalendar:userCalendar})
            };
            return(
            reader.readAsText(file))}
        
            
        
        return (

            <div>
                <button onClick={this.endpointCalculator}/>
                <input type="file" id="input" ref={this.fileInput}></input>
                <button onClick={fileReader} type="button" class="btn btn-primary">Upload</button>
               
                <button onClick={this.calendarParser}>clickme</button>
                <select  
                value={this.state.timeZone.value}
                onChange={(event)=>this.inputChangedHandler(event)}>
                {this.state.timeZone.options.map(option=>(
                  <option value={option.value}>
                      {option.displayValue}
                  </option>  
        
                    
                ))}
                </select>
                    <p>{this.state.rawCalendar}</p>

            </div>
        );
    }
}

export default ComparePage;
