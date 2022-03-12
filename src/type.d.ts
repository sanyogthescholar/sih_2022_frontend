interface ITicket {
    _id: string
    site_name: string
    visitor_name: string
    visitor_email: string
    visitor_id: string
    visitor_id_number: string
    num_adults: number
    num_children: number
    time_slot: string
    checked_in: boolean
    createdAt?: string
    updatedAt?: string
}

interface TodoProps {
    todo: ITodo
}

type ApiDataType = {
    message: string
    status: string
    todos: ITodo[]
    todo?: ITodo
}