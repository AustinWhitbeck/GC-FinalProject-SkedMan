import { FormEvent, useState } from "react";
import { ShiftLog } from "../../Model/Interfaces";
import './ShiftLogUpdater.css';


interface Props {
    shiftLog: ShiftLog;
    UpdateForm: string;
    updateLogSubmit: (shiftLog: ShiftLog) => void;
    updateHidden: () => void;
}

const ShiftLogUpdater = ({shiftLog, UpdateForm, updateLogSubmit, updateHidden}: Props) => {

    const [pendingLog, setPendingLog] = useState<ShiftLog>({
        ...shiftLog,
    });

    const preventReload = (e: FormEvent) => {
        e.preventDefault();
        updateLogSubmit(pendingLog);

        // separation of concerns. Parent shouldn't be concerned //
    }

    return(
        <main className="ShiftLogUpdaterContainer">
            <section>
                <button className="ModalToggle" onClick={updateHidden}>E</button>
            </section>
            <section className={UpdateForm}>
                <form action="submit" className="InputFormUpdater"onSubmit={preventReload}>
                    <section className="UpdateClickableSection">
                        <div className="UpdateClickableDiv"onClick={updateHidden}>X</div>
                    </section>
                    <h3 className="NewLogTitle">Update Log</h3>
                    <div className="logInputInfoContainer">
                        <div className="InputOptions">
                            <label htmlFor="author">Name</label>
                            <input type="text" name="author" id="author" value={pendingLog.author} onChange={(e) => setPendingLog({...pendingLog, author: e.target.value})}/>
                        </div>
                        <div className="InputOptions">
                            <label htmlFor="supervisor">Supervisor</label>
                            <input type="text" name="supervisor" id="supervisor" value={pendingLog.supervisor} onChange={(e) => setPendingLog({...pendingLog, supervisor: e.target.value})}/>
                        </div>
                    </div>
                    <label htmlFor="logEntry">Log Here:</label><br/>
                    <textarea name="logEntry" id="logEntry" className="logEntry" value={pendingLog.logText} onChange={(e) => setPendingLog({...pendingLog, logText: e.target.value})} required minLength={2} rows={8}/><br />
                    <button className="SubmitButton" id="logSubmitButton" type="submit" >Update Log</button>
                </form>
            </section>


        </main>
    )
}


export default ShiftLogUpdater;