import { useState } from "react";
import { Button, Form,FloatingLabel } from "react-bootstrap";


interface SignUp {
    // userId: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role?: Role;
}

enum Role {
    ADMIN = "ADMIN",
    OFFICER = "OFFICER",
    LIBRARIAN = "LIBRARIAN"
}

export const SignUp = () => {

    const [signUp, setSignUp] = useState<SignUp>({
        // userId: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        role: undefined
    })

    const handleReset = () => {
        setSignUp({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            role: undefined
        })
    }

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setSignUp({ ...signUp, [e.target.name]: e.target.value });
    }

    const handleOnSubmit = async () => {
        //API req
        console.log(JSON.stringify(signUp))
        handleReset()
    }

    return (
        <>
            <div className="mx-auto w-50 mt-5">
                <h1>SignUp Portal</h1>
                <Form>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="First Name"
                        className="mb-3"
                    >
                        <Form.Control type="text" name="firstName" value={signUp.firstName} onChange={handleOnChange} />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Last Name"
                        className="mb-3"
                    >
                        <Form.Control type="text" name="lastName" value={signUp.lastName} onChange={handleOnChange} />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email"
                        className="mb-3"
                    >
                        <Form.Control type="email" name="email" value={signUp.email} onChange={handleOnChange} />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Password"
                        className="mb-3"
                    >
                        <Form.Control type="password" name="password" value={signUp.password} onChange={handleOnChange} />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingRole" label="Role" className="mb-3">
                        <Form.Select
                            name="role"
                            value={signUp.role || ""}
                            onChange={handleOnChange}
                        >
                            <option value="">Select Role</option>
                            <option value="ADMIN">ADMIN</option>
                            <option value="LIBRARIAN">LIBRARIAN</option>
                            <option value="OFFICER">OFFICER</option>
                        </Form.Select>
                    </FloatingLabel>
                </Form>

                <Button variant="success" onClick={handleOnSubmit}>SignIn</Button>
                <Button variant="danger" className="mx-2">
                    Reset
                </Button>
            </div>
        </>
    );
};