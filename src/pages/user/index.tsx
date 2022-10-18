import { useEffect, useState } from "react";
import axios from "axios";

const baseURL = process.env.BASE_URL +`/user/add/`;

type FormValues = {
    name: string;
    email: string;
    password: string;
};

export default function User({ name, email, password }: FormValues) {
    const [data, setData] = useState<FormValues>({
        name: "", email: "", password: ""
    });

    //@ts-ignore
    function submitUser(e) {
        e.preventDefault();
        try {
            axios
                .post(baseURL, {
                    name: data.name,
                    email: data.email,
                    password: data.password
                })
                .then((response) => {
                    setData(response.data);
                });

        } catch (error) {
            return console.log(error);
        }
    }

    //@ts-ignore
    function handle(e) {
        const newData = { ...data }
        //@ts-ignore
        newData[e.target.id] = e.target.value
        setData(newData);
    }

    return (
        <>
                <header className="px-5 py-4 border-b border-gray-100">
                    <div className="font-semibold text-gray-800">Usuários</div>
                </header>
            <section className="antialiased border border-dashed p-10 flex justify-center">
                <form onSubmit={e => submitUser(e)} className="flex flex-col w-[500px] border p-10 ">
                    <label htmlFor="name">Nome</label>
                    <input onChange={(e) => handle(e)} type="text" id="name" value={data.name} placeholder="nome" className="rounded-sm" />
                    <label htmlFor="email" className="pt-4">E-mail</label>
                    <input onChange={(e) => handle(e)} type="text" id="email" value={data.email} placeholder="e-mail" className="rounded-sm" />
                    <label htmlFor="password" className="pt-4">Password</label>
                    <input onChange={(e) => handle(e)} type="text" id="password" value={data.password} placeholder="senha" className="rounded-sm" />
                    <div className="flex items-center content-center justify-center space-x-10">
                        <button className="bottom bg-green border m-4 h-10 rounded-sm w-[100px]" type="submit"> Gravar </button>
                        <button className="bottom bg-green border m-4 h-10 rounded-sm w-[100px]" type="submit"> Cancel </button>
                    </div>
                </form>
            </section>
            < hr className="m-4" />

            <section className="antialiased bg-gray-100 text-gray-600 px-4" x-data="app">
                <div className="flex flex-col justify-center h-full">
                    <div className="w-full max-w-2xl mx-auto  shadow-lg rounded-sm border border-gray-200">
                        <header className="px-5 py-4 border-b border-gray-100">
                            <div className="font-semibold text-gray-800">Manage Carts</div>
                        </header>

                        <div className="overflow-x-auto p-3">
                            <table className="table-auto w-full">
                                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                    <tr>
                                        <th></th>
                                        <th className="p-2">
                                            <div className="font-semibold text-left">Product Name</div>
                                        </th>
                                        <th className="p-2">
                                            <div className="font-semibold text-left">Quantity</div>
                                        </th>
                                        <th className="p-2">
                                            <div className="font-semibold text-left">Total</div>
                                        </th>
                                        <th className="p-2">
                                            <div className="font-semibold text-center">Action</div>
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className="text-sm divide-y divide-gray-100">
                                    <tr>
                                        <td className="p-2">
                                            <input type="checkbox" className="w-5 h-5" value="id-1" />
                                        </td>
                                        <td className="p-2">
                                            <div className="font-medium text-gray-800">
                                                Samsung Galaxy Note 4
                                            </div>
                                        </td>
                                        <td className="p-2">
                                            <div className="text-left">1</div>
                                        </td>
                                        <td className="p-2">
                                            <div className="text-left font-medium text-green-500">
                                                RM 2,890.66
                                            </div>
                                        </td>
                                        <td className="p-2">
                                            <div className="flex justify-center">
                                                <button>
                                                    <svg className="w-8 h-8 hover:text-blue-600 rounded-full hover:bg-gray-100 p-1"
                                                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">
                                                        </path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="p-2">
                                            <input type="checkbox" className="w-5 h-5" value="id-2" />
                                        </td>
                                        <td className="p-2">
                                            <div>
                                                <div className="font-medium text-gray-800">Logitech Keyboard</div>
                                            </div>
                                        </td>
                                        <td className="p-2">
                                            <div className="text-left">1</div>
                                        </td>
                                        <td className="p-2">
                                            <div className="text-left font-medium text-green-500">
                                                RM 120.50
                                            </div>
                                        </td>
                                        <td className="p-2">
                                            <div className="flex justify-center">
                                                <button>
                                                    <svg className="w-8 h-8 hover:text-blue-600 rounded-full hover:bg-gray-100 p-1"
                                                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">
                                                        </path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="p-2">
                                            <input type="checkbox" className="w-5 h-5" value="id-3" />
                                        </td>
                                        <td className="p-2">
                                            <div>
                                                <div className="font-medium text-gray-800">Earphone</div>
                                            </div>
                                        </td>
                                        <td className="p-2">
                                            <div className="text-left">1</div>
                                        </td>
                                        <td className="p-2">
                                            <div className="text-left font-medium text-green-500">RM 15.00</div>
                                        </td>
                                        <td className="p-2">
                                            <div className="flex justify-center">
                                                <button>
                                                    <svg className="w-8 h-8 hover:text-blue-600 rounded-full hover:bg-gray-100 p-1"
                                                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">
                                                        </path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="flex justify-end font-bold space-x-4 text-2xl border-t border-gray-100 px-5 py-4">
                            <div>Total</div>
                            <div className="text-blue-600">RM <span x-text="total.toFixed(2)"></span></div>
                        </div>

                        <div className="flex justify-end">
                            <input type="hidden" className="border border-black bg-gray-50" x-model="selected" />
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}
