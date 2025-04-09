import { useCookies } from "react-cookie";

const Cart = () => {
    const [cookies, setCookie] = useCookies(["productIds"]);

    useEffect(() => {
        setProductIds(cookies.productIds || []);
    }, [cookies.productIds]);

}
export default Cart;