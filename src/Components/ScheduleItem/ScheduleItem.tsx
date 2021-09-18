import { Schedule, TimeBlock } from "../../Model/Interfaces";


interface Props {
    schedule: Schedule,
    timeblock: TimeBlock
}

const ScheduleItem = ({schedule, timeblock}: Props) => {

    return(
        <main>
            <section>
                <div>
                    {/* here might potentially be a timeblock component to be more specific. 
                        for the time being, just schedule.timeBlocks to map on the Schedule component
                    */}
                    {schedule.timeBlocks}
                </div>
            </section>
        </main>
    );
}


export default ScheduleItem;