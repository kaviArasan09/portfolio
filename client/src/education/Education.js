import React from 'react';
import "./Education.css";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import SchoolIcon from '@mui/icons-material/School';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';

function Education() {
    return (
        <div id='education'>
        <VerticalTimeline lineColor='blue'>
            <VerticalTimelineElement
                    date="2023 - present"
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<ImportantDevicesIcon />}
                    >
                <h3>Work :</h3>
                <h2>Web Developer</h2>
                <h2>Online Course</h2>
                <h2>Cuddalore</h2>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                    date="2019-2022"
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<SchoolIcon />}
                    >
                <h3>College :</h3>
                <h2>Government Arts and Science College</h2>
                <h2>Bsc Computer Science</h2>
                <h2>Vedaranyam</h2>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                    date="2017-2019"
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: 'black'}}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<ImportContactsIcon />}
                    >
            <h3>School 11th & 12th :</h3>
            <h2>Government HighSchool</h2>
            <h2>Thamarankottai</h2>
            </VerticalTimelineElement>

        </VerticalTimeline>
        </div>
    );
}

export default Education;
