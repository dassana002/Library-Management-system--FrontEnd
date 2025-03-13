import { useEffect, useState } from "react";
import Table from "react-bootstrap/esm/Table";
import { GetAllStaff } from "../../service/Staff";

export const Staff = () => {

    const tHeadings :string[] = [
        "#",
        "StaffId",
        "FirstName",
        "LastName",
        "Email",
        "JoinDate",
        "LastUpdated",
        "Role",
        "Options"
    ];

    interface Staff {
        staffId :string;
        firstName :string;
        lastName :string;
        email :string;
        role :string;
    }

    const [staffs , setStaff] = useState<Staff[]>([]);

    useEffect(()=> {
        const loadData = async()=> {
            const getAll = await GetAllStaff();
            setStaff(getAll);
        }    

        loadData();
    })

    return (
        <div style={{ maxHeight: "2000px", overflow: "auto", border: "2px solid #ddd" }}>
            <Table striped="columns" style={{ minWidth: "600px", borderCollapse: "separate" }}>
                
                <thead style={{ position: "sticky", top: 0, background: "#fff", zIndex: 2 }}>
                    <tr>
                        {tHeadings.map((Header)=>(
                           <th>{Header}</th>     
                        ))}
                    </tr>
                </thead>
                
                <tbody>
                    {staffs.map((row,index)=>
                        
                        <tr key={row.staffId}>
                            <td>{index+1}</td>
                            {Object.values(row).map((cell,index)=>
                                <td key={index}>{cell}</td>
                            )}
                        </tr>    
                    )}
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