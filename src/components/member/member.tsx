import { useEffect, useState } from "react";
import Table from "react-bootstrap/esm/Table"
import { DeleteMember, GetAllMembers, UpdateMember } from "../../service/Member";
import Button from "react-bootstrap/esm/Button";
import { MemberEdit } from "./MemberEdit";

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
    }

    const [members , setMember] = useState<Member[]>([]);
    const [showEditForm , setShowEditForm] = useState(false);
    const [selectedRow , setSelectedRow] = useState<Member | null>(null);

    useEffect(()=> {
        const loadData = async()=> {
            const getAllMembers = await GetAllMembers();
            setMember(getAllMembers)
        }
        loadData();
    })

    const handleDelete = async(memberId :string)=> {
        try {
            await DeleteMember(memberId);
            setMember(members.filter(
                (members)=>(
                    members.memberId !== memberId
                )
            ));
        } catch (err) {
            console.error(err);
        }
    }

    const handleEdit = (row :Member)=> {
        setShowEditForm(true);
        setSelectedRow(row);
    }

    const handleUpdateState = (updateMember :Member)=> {
        const updateMembers = members.map((member)=>
            member.memberId === updateMember.memberId ? updateMember : member
        )
        setMember(updateMembers);
    }

    const handleOnClose = ()=> {
        setShowEditForm(false);
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
                            
                            <th>
                                <Button variant="outline-secondary" 
                                    onClick={
                                        ()=> handleEdit(row)
                                    }
                                > Edit </Button>
                                <Button variant="outline-danger" 
                                    onClick={
                                        ()=> handleDelete(row.memberId)
                                    }
                                > Delete </Button>
                            </th>
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

            <MemberEdit
                show = {showEditForm}
                selectedRow = {selectedRow}
                handleOnClose = {handleOnClose}
                updateMember={UpdateMember}
                handleUpdateState={handleUpdateState}
            />
        </div>    
    );
}