import { Item, Items, ListContainer } from "./styles/style";

export default function List({ children, ...props }) {
    return (
        <ListContainer {...props}>{children}</ListContainer>
    )
}


List.Item = function ListItem({ children, ...props }) {
    return (
        <Item {...props}>{children}</Item>
    )
}