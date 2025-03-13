import { useEffect, useState } from "react";
import Table from "react-bootstrap/esm/Table"
import { GetAllMembers } from "../../service/Member";
import Button from "react-bootstrap/esm/Button";

export const Member = ()=> {

    const tHeadings :string[] = [
        "#",
        "MemberId",
        "Firstname",
        "Lastname",
        "Email",
        "MemberShipDate",
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

    const handleDelete = ()=> {
        console.log("Delete fuction design");
    }

    const handleEdit = ()=> {
        console.log("Update fuction design");
    }

    return(
        <div style={{ maxHeight: "2000px", overflow: "auto", border: "2px solid #ddd" }}>
            <Table striped="columns" style={{ minWidth: "600px", borderCollapse: "separate" }}>
                <thead style={{ position: "sticky", top: 0, background: "#fff", zIndex: 2 }}>
                    <tr>
                        {tHeadings.map((headings,index)=>(
                            <th key={index} scope="col">{headings}</th>    
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {members.map((row,rowIndex)=>(
                        <tr key={row.memberId}>
                            <th scope="row">{rowIndex + 1}</th>

                            {Object.values(row).map((cell,index)=>(
                                <td key={index}>
                                    {cell}
                                </td>
                            ))}

                            <Button variant="outline-secondary" onClick={handleEdit}> Edit </Button>
                            <Button variant="outline-danger" onDoubleClick={handleDelete}> Delete </Button>
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