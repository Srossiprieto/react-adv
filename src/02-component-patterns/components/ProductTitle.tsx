import { useContext } from "react";
import styles from "../styles/styles.module.css";
import { ProductContext } from "./ProductCard";

export const ProductTitle = ({ title }: { title?: string }) => {
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
        <span className={styles.productDescription}>{title ? title : product.title}</span>
    );
};
