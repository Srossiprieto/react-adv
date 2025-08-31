import { useContext } from "react";
import styles from "../styles/styles.module.css";
import { ProductContext } from "./ProductCard";

export interface Props{
    title?: string;
    className?: string;
}

export const ProductTitle = ({ title, className }: Props) => {
    const {product} = useContext(ProductContext)
    // let titleToShow: string;
    // const titleDefault = 'no Title'
    // if(title){
    //     titleToShow = title;
    // }else if (product.title){
    //     titleToShow = product.title;
    // }else{
    //     titleToShow = titleDefault;
    // }

    return (
        <span className={`${styles.productDescription} ${className}`}>{title ? title : product.title}</span>
    );
};
