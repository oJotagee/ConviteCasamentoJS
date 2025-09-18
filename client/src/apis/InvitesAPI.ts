import { IResponseInvites } from "../interfaces/IResponseInvites";
import { api } from "../configurations/Axios";

const GetByName = async (name: string) => {
    try {
        const result = await api.post(`/api/SearchInvite`, { "name": name });
        const response = await result.data as IResponseInvites;
        return response;
    }
    catch (error: any) {
        throw new Error(error.response.data);
    }
}

const ConfirmPresence = async (ids: string) => {
    try {
        const result = await api.put(`/api/ConfirmPresence`, { "ids": ids });
        const response = await result.data;
        return response;
    }
    catch (error: any) {
        throw new Error(error.response.data);
    }
}

const RemovePresence = async (ids: string) => {
    try {
        const result = await api.put(`/api/RemovePresence`, { "ids": ids });
        console.log(result)
        const response = await result.data;
        return response;
    }
    catch (error: any) {
        throw new Error(error.data);
    }
}

export {
    GetByName,
    ConfirmPresence,
    RemovePresence
}