import {  useState } from "react";
import { ShiftLog } from "../../Model/Interfaces";
import ShiftLogUpdater from "../ShiftLogUpdater/ShiftLogUpdater";
import './ShiftLogItem.css';

// icons
import deleteIcon from "../../Icons/delete.svg";





interface Props {
    log: ShiftLog;
    deleteReport: () => void;
    updateLogSubmit: (shiftLog: ShiftLog) => void;
}

const ShiftLogItem = ({log, deleteReport, updateLogSubmit}: Props) => {

    const [updateForm, setUpdateForm] = useState<string>("hidden");

    const handleHidden = () => {
        if(updateForm === "hidden"){
            setUpdateForm("ShiftUpdaterForm");
        } else if(updateForm === "ShiftUpdaterForm"){
            setUpdateForm("hidden");
        }
    }


    return (
        <main className="ShiftLogContainer">
            <section className="LogAuthorTime">
                <section className="AuthDateSection">
                    <p className="ParaInfo">{log.author}</p>
                    <p className="ParaInfo">{log.month}/{log.day}/{log.year}</p>
                </section>
                {/* <button className="DeleteButton" type="button" onClick={deleteReport}><img src={deleteIcon} alt="delete button" /></button> */}
            </section>
            <section className="PersonUpdateSection">
                <div className="MainDiv">
                    <section >
                        <p>Supervisor: {log.supervisor}</p>
                        <p>Log Time: {log.hours}:{log.minutes} </p>
                    </section>
                    <section className="UpdateDeleteSection">
                        <ShiftLogUpdater
                            shiftLog={log}
                            UpdateForm={updateForm}
                            updateLogSubmit={updateLogSubmit}
                            updateHidden={handleHidden}
                        />
                        <button className="DeleteButton" type="button" onClick={deleteReport}><img src={deleteIcon} alt="delete button" /></button>
                    </section>
                </div>
                <section>
                    <p>{log.logText}</p>
                </section>
            </section>
        </main>
    )
}

export default ShiftLogItem;