import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'store/actions/index';
import ScheduleContainer from 'containers/ScheduleContainer/ScheduleContainer';


class ComparePage extends React.Component {
    render() {
        return (
            <div onClick={() => this.props.getSchedule()}>
            <ScheduleContainer/>
            {/*<OptionsBlock />*/}
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