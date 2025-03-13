import Table from "react-bootstrap/esm/Table"

export const Member = ()=> {

    const tHeadings :string[] = [
        "memberId",
        "firstname",
        "lastname",
        "email",
        "memberShipDate",
        "Options"
    ];

    return(
        <div style={{ maxHeight: "2000px", overflow: "auto", border: "2px solid #ddd" }}>
            <Table striped="columns" style={{ minWidth: "600px", borderCollapse: "separate" }}>
                <thead style={{ position: "sticky", top: 0, background: "#fff", zIndex: 2 }}>
                    <tr>
                        
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
    
                <tfoot style={{ position: "sticky", bottom: 0, background: "#fff", zIndex: 2 }}>
                    <tr>
                        <td colSpan={tHeadings.length + 2} 
                            style={{ textAlign: "center", fontWeight: "bold", padding: "10px" }}></td>
                    </tr>
                </tfoot>
            </Table>
        </div>    
    );
}