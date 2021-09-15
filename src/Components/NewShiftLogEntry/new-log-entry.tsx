import { FormEvent, useContext, useState } from "react";
import { ShiftLogContext } from "../../ContextProviders/ShiftLogProvider";
import { ShiftLog } from "../../Model/Interfaces";
import {ObjectId} from "mongodb";

import "./new-log-entry-styles.css";
import { Link } from "react-router-dom";

// TODO
// remove log function

const NewLogEntry = () => {
   const [author, setAuthor] = useState("");
   const [supervisor, setSupervisor] = useState("");
   const [logText, setLogText] = useState("");

 //takes all log items to compile into shift log object
   const { shiftLogs, addLog, removeLog } = useContext(ShiftLogContext);

 //functions to handle onSubmit
    const onSubmit = (log: ShiftLog) => {
       addLog(log);
       console.log("shiftlogs post onSubmit function",shiftLogs)
    }    

 //handles submit event with ShiftLog object key values -FIX ANY
    const handlesubmit = (e: FormEvent) => {
        e.preventDefault();
        const d: Date = new Date();
        let year: any = d.getFullYear();
        let month: any = d.getMonth();
        let day: any = d.getDate();
        let time: any = Date.now();

        // IS THIS CORRECT?
        let _id = new ObjectId();
        
        onSubmit({
            author,
            supervisor,
            logText,
            year,
            month,
            day,
            time,
            _id
        });
        // onClose();
        setAuthor("");
        setSupervisor("");
        setLogText("");
    } 

    // functions to handle creation of shiftlog - FIX ANY
    const newAuthor = (e: any) => setAuthor(e.target.value);
    const newSupervisor = (e: any) => setSupervisor(e.target.value);
    const newLogText = (e: any) => setLogText(e.target.value);



    return (
        <form className="logInputForm" action="submit">
            <div className="logInputInfoContainer">
                <label htmlFor="author">Name</label>
                <input type="text" name="author" id="author" value={author} onChange={newAuthor} />

                <label htmlFor="supervisor">Supervisor</label>
                <input type="text" name="supervisor" id="supervisor" value={supervisor} onChange={newSupervisor} />
            </div>
            <label htmlFor="logEntry">Log Here:</label><br/>
            <input type="textArea" name="logEntry" id="logEntry" value={logText} onChange={newLogText}/><br />
            <button id="logSubmitButton" type="submit" onClick={handlesubmit}>Submit Log</button>
            <Link to="/HomeScreen"><button>Back</button></Link>
        </form>
    );
}


export default NewLogEntry;