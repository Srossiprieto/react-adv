import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { createContext } from "react";
import { Product, ProductContextProps } from "../interfaces/interfaces";


export interface Props { 
    children: React.ReactElement | React.ReactElement[];
    product: Product;
    className?: string;
    style?: React.CSSProperties;
}

export const ProductContext = createContext({} as ProductContextProps);
export const { Provider } = ProductContext;

export const ProductCard = ({children, product, className, style }: Props) => {
    const { counter, incrementBy } = useProduct();
    return (
        <Provider value={{ 
            counter, 
            incrementBy, 
            product
            }}>
            <div className={`${styles.productCard} ${className}`} style={style}>
                {children}
            </div>
        </Provider>
    )
};
