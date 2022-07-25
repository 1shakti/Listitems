import styled from "styled-components";

export const ListContainer = styled.div`
    width: 50%;
    height: 100%;
    padding: 0.5rem 1rem;
    overflow: auto;
`;

export const Item = styled.div`
    width: 100%;
    padding: 8px 16px;
    background: #002D62;
    color: #fff;
    border-radius: 8px;
    word-break: brek;
    text-overflow: ellipsis;
    border: 1px solid rgba(0,0,0, 0.2);
    margin-bottom: 1rem;

    &:last-of-type {
        margin-bottom: 0;
    }
`;