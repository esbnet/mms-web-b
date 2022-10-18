import { useState } from "react";
import InputButton from "../../components/InputButton";

interface fieldsForm {
    id: number;
    name: string;
    type: string;
    placeholder: string;
    errorMessage: string;
    label: string;
}

export default function Register() {

    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const inputs: fieldsForm[] = [
        {
            id: 1,
            name: "name",
            type: "text",
            placeholder: "nome",
            errorMessage: "Nome deve ter 3-30 caracteres e não pode conter catactéres especiais",
            label: "Nome",
        },
        {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "email",
            errorMessage: "Email é obrigatório e tem ser um email válido.",
            label: "Email",
        },
        {
            id: 3,
            name: "password",
            type: "password",
            placeholder: "senha",
            errorMessage: "A senha deve conter entre 6-20 caracteres, 1 legra, 1 número e 1 caracter especial.",
            label: "Senha",
        },
        {
            id: 4,
            name: "confirmPassword",
            type: "password",
            placeholder: "confirma senha",
            errorMessage: "Confirmação de senha não confere.",
            label: "Confirma Senha",
        },
    ]

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

    }

    const onChange1 = () => {
        setValues({ ...values })
    }

    return (
        <div className="flex items-center justify-center h-[100vh]
            bg-cover bg-center
            bg-[272727]
            background-image: url('../../assets/logo-192x192B.png')
            drop-shadow-xl
            "
        >
            <form onSubmit={handleSubmit}
                className="bg-[#272727] px-10 py-0 rounded-sm flex flex-col w-96 border-[1px] border-yellow"
            >
                <h1 className="text-center text-yellow text-3xl mt-4">Registro</h1>
                {inputs.map((input) => (
                    <InputButton
                        key={input.id}
                        {...input}
                        //@ts-ignore
                        values={values[input.name]}
                    />
                ))}
                <button
                    className="w-full h-[50px] p-2 bg-yellow text-[#272727] rounded-md font-bold cursor-pointer mt-4 mb-7"
                >Submit</button>
            </form>
        </div>
    )
}