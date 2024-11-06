import { useSelector } from "react-redux";
import styled from "styled-components";

const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
`;

const TotalTasksContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const ActionDisplayContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Audit = () => {
    const { auditLogs, totalTasks } = useSelector((state => state.audits));
    console.log(totalTasks)
    return (
        <Main>
            <TotalTasksContainer>Total Tasks: {totalTasks}</TotalTasksContainer>
            <ActionDisplayContainer>
                <h3>Logs</h3>
                <ul style={{ display: 'inline', padding: 0, margin: 0 }}>
                    {auditLogs.map((log, index) => (<li key={index}>{log}</li>))}
                </ul>
            </ActionDisplayContainer>
        </Main>
    );
}

export default Audit;