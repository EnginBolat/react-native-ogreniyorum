import React from "react";
import { TextInput } from "react-native";
import styles from './SearchBar.Style';


const SearchBar = () => {
    return (
        <TextInput
            placeholder='Ara...'
            style={styles.searchbar}
        ></TextInput>
    );
}

export default SearchBar;