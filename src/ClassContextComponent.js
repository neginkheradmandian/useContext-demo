import React, {useContext} from 'react'
import { useTheme, useThemeUpdate } from './ThemeContext'

export default function ClassContextComponent() {
    const darkTheme = useTheme();
    const toggleTheme = useThemeUpdate();
    const themeStyle = {
        backgroundColor : darkTheme ? '#333' : '#CCC'
    }
    return (
        <>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <div style={themeStyle}>Function Theme</div>
        </>
    )
}