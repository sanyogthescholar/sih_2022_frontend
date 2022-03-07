import axios, { AxiosResponse } from "axios"

const baseUrl: string = "https://sih-2022-backend.vercel.app"

export const getTodos = async(): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const todos: AxiosResponse<ApiDataType> = await axios.get(
            baseUrl + "/todos"
        )
        return todos
    }
    catch (error) {
        throw error
    }
}

export const addTodo = async(formData: ITodo): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const todo: Omit<ITodo, "_id"> = {
            name: formData.name,
            description: formData.description,
            status: false,
        }

        let body= JSON.stringify(todo)
        const config = {
            headers: {
              'Content-Type': 'application/JSON'
            }
          };
          //above code added from https://stackoverflow.com/a/63763326/13681680
        
          const saveTodo: AxiosResponse<ApiDataType> = await axios.post(
            baseUrl + "/add-todo",
            todo,
            config
        )
        return saveTodo
    } catch (error) {
        throw error
    }
}

export const updateTodo = async(todo: ITodo): Promise<AxiosResponse<ApiDataType>> => {
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
}