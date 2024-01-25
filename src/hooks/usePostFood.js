import axios from "axios";

export function usePostFood() {
    async function postFood({ id, name, price, image }) {
        const newFoodPost = {
            userId: 1,
            id,
            name,
            price,
            image,
        }

        const { data } = await axios.post('http://192.168.0.102:8080/food', newFoodPost);

        return data;
    }

    return { postFood };
}