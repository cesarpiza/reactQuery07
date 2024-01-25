import axios from "axios";
import { useQuery } from "react-query";

function fetchApi() {
    return axios.get('http://192.168.0.102:8080/food').then(response => response.data);
}

export function useFoodData() {
    // Se id existir (for truthy), então !id será false, e !!id será true porque você está negando o false.

    // Se id não existir (for falsy, como null, undefined, 0, false, ou uma string vazia), então !id será true, e !!id será false porque você está negando o true.

    const data = useQuery(['food-data'], fetchApi, /* {
        // Isso é ideal para quando você quer fazer uma get na api para obter um item com base no id somente quando apertar um botão, por exemplo. Se a opção enabled estiver como true, quando o componente for montado pela primeira vez, haverá um get com base no id; não é isso que você quer (nesse caso). Então para fazer o get com base no id apenas quando apertar um botão, use useQuery com a opção enabled !!id. Assim somente quando existir o id, o useQuery funciona.
        enabled: !!id,
    } */);

    return data;
}