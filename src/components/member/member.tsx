import { useEffect, useState } from "react";
import Table from "react-bootstrap/esm/Table"
import { GetAllMembers } from "../../service/Member";

export const Member = ()=> {

    const tHeadings :string[] = [
        "memberId",
        "firstname",
        "lastname",
        "email",
        "memberShipDate",
        "Options"
    ];

    interface Member {
        memberId :string;
        firstname :string;
        lastname :string;
        email :string;
        memberShipDate :Date;
    }

    const [members , setMember] = useState<Member[]>([]);

    useEffect(()=> {
        const loadData = async()=> {
            const getAllMembers = await GetAllMembers();
            setMember(getAllMembers)
        }
        loadData();
    })

    return(
        <div style={{ maxHeight: "2000px", overflow: "auto", border: "2px solid #ddd" }}>
            <Table striped="columns" style={{ minWidth: "600px", borderCollapse: "separate" }}>
                <thead style={{ position: "sticky", top: 0, background: "#fff", zIndex: 2 }}>
                    <tr>
                        {tHeadings.map((headings)=>(
                            <th>{headings}</th>    
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {members.map((row)=>(
                        <tr key={row.memberId}>
                            {Object.values(row).map((cell , index)=>(
                                <td key={index}>
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                    
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