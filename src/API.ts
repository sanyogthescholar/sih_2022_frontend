import axios, { AxiosResponse } from "axios"
var SHA256 = require("crypto-js/sha256");

const baseUrl: string = "http://localhost:4000"

export const getTodos = async(): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const todos: AxiosResponse<ApiDataType> = await axios.get(
            baseUrl + "/tickets"
        )
        return todos
    }
    catch (error) {
        throw error
    }
}

export const addTicket = async(formData: ITicket): Promise<AxiosResponse<ApiDataType>> => {
    try {
        console.log(formData)
        console.log(SHA256(formData).toString());
        const ticket: Omit<ITicket, "_id"> = {
            site_name: formData.site_name,
            visitor_name: formData.visitor_name,
            visitor_email: formData.visitor_email,
            visitor_id: formData.visitor_id,
            visitor_id_number: formData.visitor_id_number,
            num_adults: formData.num_adults,
            num_children: formData.num_children,
            time_slot: formData.time_slot,
            hash: SHA256(formData).toString(),
            checked_in: false,
        }

        //let body= JSON.stringify(todo)
        const config = {
            headers: {
              'Content-Type': 'application/JSON'
            }
          };
          //above code added from https://stackoverflow.com/a/63763326/13681680
        
          const saveTodo: AxiosResponse<ApiDataType> = await axios.post(
            baseUrl + "/add-ticket",
            ticket
        )
        console.log(saveTodo)
        return saveTodo
    } catch (error) {
        throw error
    }
}

/*export const updateTodo = async(todo: ITodo): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const todoUpdate: Pick<ITodo, "status"> = {
            status: true
        }
        const updatedTodo: AxiosResponse<ApiDataType> = await axios.put(`${baseUrl}/edit-todo/${todo._id}`,
        todoUpdate
        )
        return updatedTodo
    } catch(error) {
        throw error
    }
}

export const deleteTodo = async(_id: string): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const deletedTodo: AxiosResponse<ApiDataType> = await axios.delete(
            `${baseUrl}/delete-todo/${_id}`
        )
        return deletedTodo
    } catch(error) {
        throw error
    }
}*/